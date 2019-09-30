<template>
<div>
<div class="header">
  <span>系统设置 > 用户管理 > 角色管理</span>
  <input type="button" value="添加角色" class="header-btn" @click="goAdd"></input>
</div>
<div class="table-box">
  <el-table style="width: 100%" :data="currentPageData" stripe>
    <el-table-column type="index" label="序号" width="60"></el-table-column>
    <el-table-column prop="tsRole.roleName" label="角色名称" width="180"></el-table-column>
    <el-table-column  label="角色说明" width="500" >
      <template slot-scope="scope">
        <span class="tag" v-for="item in scope.row.tsRole.description.split(';')">{{ item }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="tsRole.dataReadLevel" label="数据读取级别"></el-table-column>
    <el-table-column prop="tsRole.dataWriteLevel" label="数据操作级别"></el-table-column>
    <el-table-column  label="配置/删除" width="200px">
      <template slot-scope="scope">
        <span v-if="scope.row.tsRole.roleType === '0'" class="default-user-opt">
          预设角色，无权修改
        </span>
        <span v-else >
          <img class="operation-icon" src="./../assets/cion_6.png" @click="goEdit(scope.row)"></img>&nbsp;&nbsp;&nbsp;
          <img class="operation-icon" src="./../assets/cion_5.png" @click="deleteRole(scope.row.tsRole)"></img>
        </span>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    background
    layout="total, prev, pager, next, slot, jumper, ->"
    prev-text="上页"
    next-text="下页"
    :total="tableData.length"
    :current-page="currentPage"
    @current-change="handleCurrentChange">
  </el-pagination>
</div>

<div class="bottom">
    <div class="bottom_first"></div>
    <div class="bottom_second"></div>
    <div class="bottom_three"></div>
</div>
  <edit-role :edit-visible="addOrUpdate" @editCancle="editDialogCancle" ref="editRoleDialog"></edit-role>
</div>

</template>

<script>

import EditRole from "./EditRole";
export default {
  name: 'usermanagement',
  components: {EditRole},
  data () {
        return{
          addOrUpdate: false,
          tableData: [],
          currentPage: 1
        }
    },
    computed: {
      currentPageData () {
        let startInd = (this.currentPage-1)*10;
        let endInd = this.tableData.length-1 > startInd+10 ? startInd+10 : this.tableData.length-1;
        return startInd === endInd ? [this.tableData[startInd]] : this.tableData.slice(startInd, endInd);
      }
    },
    created () {
      this.getData();
    },
    methods:{
      handleCurrentChange (val) {
        this.currentPage = val;
      },
      getData(){
        this.axios.get('http://192.168.168.228:9388/framebasic/roleController.do?roleList').then((res)=>{
          let that = this;
          if (res.data.success){
            that.tableData = res.data.obj;
          }else{
            that.tableData = [];
          }
        })
      },
      deleteRole (rowRole) {
        let that = this;
        this.$confirm('确定要删除【'+rowRole.roleName+'】吗？', '确认', {
          confirmButtonText: "确定"}).then(() => {
          that.axios.delete('http://192.168.168.228:9388/framebasic/roleController.do?delRole&roleId='
            +rowRole.id).then((res) => {
            if (res.data.success) {
              that.$alert(res.data.msg, '成功', {
                confirmButtonText: "确定", callback: action => {
                  that.getData();
                }
              })
            }
          })
        })
      },
      goAdd () {
        this.addOrUpdate = true;
        this.$refs.editRoleDialog.initData();
      },
      goEdit (record) {
        this.addOrUpdate = true;
        this.$refs.editRoleDialog.bindRecord(record);
      },
      editDialogCancle (param) {
        this.addOrUpdate = false;
        if (param !== undefined && param.upd === 1){
          this.getData();
        }

      }
    },

}
</script>
<style>
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #4396cc;
    color: #fff;
  }
  .el-table__header .has-gutter >tr>th{
    background-color: #e6eef1;
    color: #7f8a90;
  }
  .el-table__header .has-gutter >tr>th>div{
    white-space: nowrap;
  }
</style>
<style  scoped>

  .operation-icon{
    width: 20px;
    height: 20px;
  }
  .default-user-opt{
    font-size: 13px;
    color: #ffffff;
    font-weight: 900;
    background-color: #f8ac59;
    padding: 2px 10px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    float: left;
  }
  .header-btn{
    background-color: #0083b3;
    color: #ffffff;
    float: right;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    padding: 5px 20px;
    margin-top: 3px;
    font-size: 14px;
  }
  .el-pagination{
    float: right;
    margin-top: 20px;
  }
  .tag{
    margin-left: 10px;
    margin-top: 5px;
    font-size: 13px;
    color: #ffffff;
    font-weight: 900;
    background-color: #23c6c8;
    padding: 2px 10px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    float: left;
  }
  .header{
    min-width: 1280px;
    width: 100%;
    position: absolute;
    left:0;
    top:148px;
    border-bottom: 1px solid #EBEEF5;
  }
  .header>span{
    font-weight: 600;
    float: left;
    padding:10px;
    padding-left: 25px;
    font-size:15px;
  }
  .table-box{
    position: absolute;
    border-top: 1px solid #EBEEF5;
    width: calc(100% - 60px);
    min-width: 1220px;
    margin: 70px 30px auto 30px;
  }
</style>
