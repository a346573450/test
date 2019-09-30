<template>
  <el-dialog destroy-on-close title="编辑角色" :visible.sync="editVisible"
    width="650px" :before-close="dialogCancle">
    <el-form ref="editForm" :rules="rules" label-width="180px" :model="editRecord">
      <el-form-item prop="tsRole.roleName" label="角色名称：">
        <el-input v-model="editRecord.tsRole.roleName"></el-input>
      </el-form-item>
      <el-form-item prop="tsRole.description" label="角色说明：" class="after-content" >
        <el-input type="textarea" v-model="editRecord.tsRole.description"></el-input>
      </el-form-item>
      <el-form-item prop="tsRole.dataReadLevel" label="数据读取级别：">
        <el-select placeholder="请选择" v-model="editRecord.tsRole.dataReadLevel">
          <el-option label="账户自有数据" value="账户自有数据"></el-option>
          <el-option label="全部账户数据" value="全部账户数据"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="tsRole.dataWriteLevel" label="数据操作级别：">
        <el-select placeholder="请选择" v-model="editRecord.tsRole.dataWriteLevel">
          <el-option label="账户自有数据" value="账户自有数据"></el-option>
          <el-option label="全部账户数据" value="全部账户数据"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="funcList" label="菜单权限：">
        <div class="border-box">
        <el-tree ref="menuTree"  default-expand-all :default-checked-keys="editRecord.funcList"
                   show-checkbox :data="funcData" :props="defaultProps" node-key="id" @check-change="treeCheckedChange">
        </el-tree>
        </div>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="this.beforeSubmit">确 定</el-button>
    <el-button @click="this.dialogCancle">取 消</el-button>
  </el-dialog>
</template>

<script>
    export default {
      name: "EditRole",
      props: {
        editVisible: {
          type: Boolean,
          default: function () {
            return false;
          }
        }
      },
      data () {
          return{
            rules: {
              "tsRole.roleName": [
                {required: true, message: '请输入角色名称', trigger: 'blur'},
                { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
              ],
              "tsRole.description": [
                {required: true, message: '请输入角色描述', trigger: 'blur'},
                { min: 1, max: 85, message: '长度在 1 到 15 个字符', trigger: 'blur' }
              ],
              "tsRole.dataReadLevel": [
                {required: true, message: '请选择数据读取级别', trigger: 'change'}
              ],
              "tsRole.dataWriteLevel": [
                {required: true, message: '请选择数据操作级别', trigger: 'change'}
              ],
              "funcList": [
                {required: true, message: '请勾选权限', trigger: 'change'}
              ]
            }
            ,
            editRecord: {
              tsRole: {},
              funcList: []
            },
            funcData: [],
            defaultProps: {
              children: 'children',
              label: 'text'
            }
        }
      },
      methods: {
        treeCheckedChange () {
          this.editRecord.funcList = this.$refs.menuTree.getCheckedKeys();
        },
        dialogCancle (type) {
          if (type !== undefined && type === 1){
            this.$emit('editCancle', {upd: 1});
          } else {
            this.$emit('editCancle')
          }
          this.editRecord = { tsRole: {}, funcList: []}
        },
        bindRecord (record) {
          Object.assign(this.editRecord, record);
          this.initData();
          let that = this;
        },
        initData () {
          let that = this;
          this.axios.get('http://192.168.168.228:9388/framebasic/roleController.do?functionTree').then((res)=>{
            that.funcData = res.data;
          })
        },
        beforeSubmit: function () {
          let that = this;
          this.$refs.editForm.validate((valid) => {
           if(valid){
             that.doSubmit();
           }
          })
        },
        doSubmit () {
          let menuTree = this.$refs.menuTree;
          let formDesc = this.editRecord.tsRole.description.replace(/；/g, ';');
          let roleDesc = formDesc;
          if (formDesc.charAt(formDesc.length-1) === ';'){
            roleDesc = formDesc.substr(0, formDesc.length-1);
          }
          let map = {
            roleId: this.editRecord.tsRole.id === undefined ? "" : this.editRecord.tsRole.id,
            roleName: this.editRecord.tsRole.roleName,
            funcList: menuTree.getCheckedKeys(),
            description: roleDesc,
            dataReadLevel: this.editRecord.tsRole.dataReadLevel === undefined ? "" : this.editRecord.tsRole.dataReadLevel,
            dataWriteLevel: this.editRecord.tsRole.dataWriteLevel === undefined ? "" : this.editRecord.tsRole.dataWriteLevel
          }
          let that = this;
          this.axios.post('http://192.168.168.228:9388/framebasic/roleController.do?addRole', map).then((res) => {
            if (res.data.success) {
              that.$alert(res.data.msg, '成功', {
                confirmButtonText: "确定", callback: action => {
                  that.dialogCancle(1);
                }
              })
            }
          })
        }
      }
    }
</script>
<style>
  .el-tree-node__expand-icon.is-leaf.el-icon-caret-right:before {
    content: "—";
    color: #908d8d;
  }
  .el-tree-node__expand-icon.is-leaf {
    margin-left: 13px;
    border-left: 1px solid #908d8d;
    padding-left: 0px;
  }
  .el-checkbox__input.is-focus .el-checkbox__inner{
    border-color: transparent;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
    background-color: transparent;
    border-color: transparent;
    background-image: url("./../assets/zTreeStandard.png");
    background-position: -14px 96px;
  }
  .el-checkbox__input .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
    background-color: transparent;
    border-color: transparent;
    background-image: url("./../assets/zTreeStandard.png");
  }
  .el-dialog__header{
    width: 100%;
    text-align: left;
  }

  .el-tree-node__label:before{
    content: " ";
    display: inline-block;
    background-image: url("./../assets/zTreeStandard.png");
    width: 15px;
    height: 15px;
    background-position: 49px 82px;
    margin-right: 5px;
  }
</style>
<style scoped>
  
  .el-button--primary{
    background-color: #1bb293;
    border-color: #1bb293;
  }
  .el-dialog{
    min-width: 680px;
  }
  .el-select{
    width: 100%;
  }
.border-box{
  border: 1px solid #e6eef1;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
  .after-content:after{
    content: '（;隔开）';
    color: red;
    width: 250px;
  }
</style>
