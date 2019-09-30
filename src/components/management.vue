<template>
  <div class="management">
    <div class="header-manage"><span>系统设置 > 用户管理 > 综合管理</span>
    </div>
    <div class="bottom-manage">
      <div class="bottom_first_manage">
        <input
          type="text"
          placeholder="请输入公司名称"
          class="searchbox"
          v-model="searchbox"
        />
        <el-button
          type="primary"
          icon="el-icon-search"
          class="searchbutton"
          @click="SearchFun()"
        ></el-button>
        <el-button
          type="success"
          icon="el-icon-plus"
          class="plusbutton"
          @click="dialogFormVisible = true"
        ></el-button>
        <el-dialog
          title="添加公司"
          :visible.sync="dialogFormVisible"
        >
          <el-form>
            <el-form-item label="纪委名称" :label-width="formLabelWidth"
              prop="name"
            >
                    <el-input v-model="form.departname" autocomplete="off"></el-input>
                  </el-form-item>
                <el-form-item label="监察委名称" :label-width="formLabelWidth">
                     <el-input v-model="form.jcwName" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="行政区划名称" :label-width="formLabelWidth">
                    <el-input v-model="form.xzqhName" autocomplete="off"></el-input>
                  </el-form-item>
                <el-form-item label="行政区划简称" :label-width="formLabelWidth">
                     <el-input v-model="form.xzqhAbbr" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="行政区划代码" :label-width="formLabelWidth">
                    <el-input v-model="form.xzqhCode" autocomplete="off"></el-input>
                  </el-form-item>
                <el-form-item label="单位编号" :label-width="formLabelWidth">
                     <el-input v-model="form.departCode" autocomplete="off"></el-input>
                  </el-form-item>
          </el-form>
          <div
            slot="footer"
            class="dialog-footer"
          >
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button
              type="primary"
              @click="dialogFormVisible = false,PostUser()"
            >确 定</el-button>
          </div>
        </el-dialog>

        <!-- 搜索后 -->
        <div
          class="list_first_main"
          v-if="searchData.length>0"
        >
          <div
            class="list_first"
            v-for="(item,index) in searchData"
            :key="index"
          >
            <span @click="get_second_list(item.id)">
              {{item.text}}
            </span>
            <el-button
              type="primary"
              icon="el-icon-delete"
              class="icon_delete_con"
              @click="open(item.id)"
            ></el-button>
            <el-button
              type="primary"
              icon="el-icon-edit"
              class="icon_edit_con "
              @click="dialogFormVisible3 = true,EditUser(item.id)"
            ></el-button>
            <el-dialog
              title="修改信息"
              :visible.sync="dialogFormVisible3"
            >
              <el-form>
                <el-form-item label="纪委名称" :label-width="formLabelWidth" prop="name">
                        <el-input v-model="form.departname" autocomplete="off"></el-input>
                      </el-form-item>
                    <el-form-item label="监察委名称" :label-width="formLabelWidth">
                         <el-input v-model="form.jcwName" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="行政区划名称" :label-width="formLabelWidth">
                        <el-input v-model="form.xzqhName" autocomplete="off"></el-input>
                      </el-form-item>
                    <el-form-item label="行政区划简称" :label-width="formLabelWidth">
                         <el-input v-model="form.xzqhAbbr" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="行政区划代码" :label-width="formLabelWidth">
                        <el-input v-model="form.xzqhCode" autocomplete="off"></el-input>
                      </el-form-item>
                    <el-form-item label="单位编号" :label-width="formLabelWidth">
                         <el-input v-model="form.departCode" autocomplete="off"></el-input>
                      </el-form-item>

              </el-form>
              <div
                slot="footer"
                class="dialog-footer"
              >
                <el-button @click="dialogFormVisible3 = false">取 消</el-button>
                <el-button
                  type="primary"
                  @click="dialogFormVisibl3 = false,PostUser()"
                >确 定</el-button>
              </div>
            </el-dialog>

          </div>
        </div>

        <!-- 搜索前 -->
        <div
          class="list_first_main"
          style="overflow:auto"
          v-else
        >

          <div
         
            class="list_first"
            v-for="(item,index) in list_first"
            :key="index"
          >
            <span @click="get_second_list(item.id,index)">
              {{item.text}}
            </span>
            <el-button
              type="primary"
              icon="el-icon-delete"
              class="icon_delete_con"
              @click="open(item.id)"
            ></el-button>
            <el-button
              type="primary"
              icon="el-icon-edit"
              class="icon_edit_con"
              @click="dialogFormVisible3 = true,EditUser(item.id)"
            ></el-button>
            <el-dialog
              title="修改信息"
              :visible.sync="dialogFormVisible3"
            >
              <el-form>
                <el-form-item label="纪委名称" :label-width="formLabelWidth" prop="name">
                        <el-input v-model="form.departname" autocomplete="off"></el-input>
                      </el-form-item>
                    <el-form-item label="监察委名称" :label-width="formLabelWidth">
                         <el-input v-model="form.jcwName" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="行政区划名称" :label-width="formLabelWidth">
                        <el-input v-model="form.xzqhName" autocomplete="off"></el-input>
                      </el-form-item>
                    <el-form-item label="行政区划简称" :label-width="formLabelWidth">
                         <el-input v-model="form.xzqhAbbr" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="行政区划代码" :label-width="formLabelWidth">
                        <el-input v-model="form.xzqhCode" autocomplete="off"></el-input>
                      </el-form-item>
                    <el-form-item label="单位编号" :label-width="formLabelWidth">
                         <el-input :disabled="true"
                    v-model="form.departCode"
                     autocomplete="off"
                  ></el-input>
                      </el-form-item>
              </el-form>
              <div
                slot="footer"
                class="dialog-footer"
              >
                <el-button @click="dialogFormVisible3 = false">取 消</el-button>
                <el-button
                  type="primary"
                  @click="PostEditUser(item.id),dialogFormVisible3 = false"
                >确 定</el-button>
              </div>
            </el-dialog>

          </div>

        </div>

      </div>
      <div class='bottom_second_manage'>
        <el-button
          type="primary"
          class="plus_second_button"
          @click="addBuMen(),dialogFormVisible1 = true"
        >添加部门</el-button>
        <el-dialog
          title="添加部门"
          :visible.sync="dialogFormVisible1"
        >
          <el-form>
            <el-form-item label="所属单位" :label-width="formLabelWidth" prop="name">
                    <el-input :disabled="true"
                v-model="part.parentDepartId"
                 autocomplete="off"
              ></el-input>
                  </el-form-item>
                <el-form-item label="部门名称" :label-width="formLabelWidth">
                     <el-input v-model="part.departname" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="部门编号" :label-width="formLabelWidth">
                    <el-input v-model="part.departCode" autocomplete="off"></el-input>
                  </el-form-item>
                <el-form-item label="负责人" :label-width="formLabelWidth">
                     <el-input v-model="part.administrator" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="电话" :label-width="formLabelWidth">
                    <el-input v-model="part.mobile" autocomplete="off"></el-input>
                  </el-form-item>
                <el-form-item label="电子邮箱" :label-width="formLabelWidth">
                     <el-input v-model="part.fax" autocomplete="off"></el-input>
                  </el-form-item>
                <el-form-item label="地址" :label-width="formLabelWidth">
                     <el-input v-model="part.address" autocomplete="off"></el-input>
                  </el-form-item>
                <el-form-item label="备注" :label-width="formLabelWidth">
                     <el-input v-model="part.description" autocomplete="off"></el-input>
                  </el-form-item>

          </el-form>
          <div
            slot="footer"
            class="dialog-footer"
          >
            <el-button @click="dialogFormVisible1 = false">取 消</el-button>
            <el-button
              type="primary"
              @click="dialogFormVisible1 = false,PostPart()"
            >确 定</el-button>
          </div>
        </el-dialog>
        <div class="list_second_main">
          <div
            class='list_second'
            v-for="(item,index) in list_text"
            :key="index"
            @click="get_three_list(item.id)"
          >
            <span>
              {{item.text}}
            </span>
            <el-button
              type="primary"
              icon="el-icon-delete"
              class="icon_delete_con"
              @click="open2(item.id)"
            ></el-button>
            <el-button
              type="primary"
              icon="el-icon-edit"
              class="icon_edit_con"
              @click="dialogFormVisible4 = true,EditPart(item.id)"
            ></el-button>
            <el-dialog
              title="修改信息"
              :visible.sync="dialogFormVisible4"
            >
              <el-form>
                <el-form-item label="所属单位" :label-width="formLabelWidth" prop="name">
                        <el-input :disabled="true"
                    v-model="part.parentDepartId"
                     autocomplete="off"
                  ></el-input>
                      </el-form-item>
                    <el-form-item label="部门名称" :label-width="formLabelWidth">
                         <el-input v-model="part.departname" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="部门编号" :label-width="formLabelWidth">
                        <el-input v-model="part.departCode" autocomplete="off"></el-input>
                      </el-form-item>
                    <el-form-item label="负责人" :label-width="formLabelWidth">
                         <el-input v-model="part.administrator" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="电话" :label-width="formLabelWidth">
                        <el-input v-model="part.mobile" autocomplete="off"></el-input>
                      </el-form-item>
                    <el-form-item label="电子邮箱" :label-width="formLabelWidth">
                         <el-input v-model="part.fax" autocomplete="off"></el-input>
                      </el-form-item>
                    <el-form-item label="地址" :label-width="formLabelWidth">
                         <el-input v-model="part.address" autocomplete="off"></el-input>
                      </el-form-item>
                    <el-form-item label="备注" :label-width="formLabelWidth">
                         <el-input v-model="part.description" autocomplete="off"></el-input>
                      </el-form-item>

              </el-form>
              <div
                slot="footer"
                class="dialog-footer"
              >
                <el-button @click="dialogFormVisible4 = false">取 消</el-button>
                <el-button type="primary" @click="PostEditPart(),dialogFormVisible4 = false">确 定</el-button>
              </div>
            </el-dialog>
          </div>
        </div>
      </div>

      <div class="list_three_main">
        <div class="three_header">
          <span>姓名：</span><input
            type="text"
            placeholder="请输入姓名"
            class="searchbox_second_first"
            v-model="searchbox_second_first"
          />
          <span class="number_second">证件编号：</span><input
            type="text"
            placeholder="请输入证件编号"
            class="searchbox_second"
            v-model="searchbox_second"
          />
          <el-button
            type="primary"
            class="search_three_button_first"
            @click="SearchFun_second()"
          >查询</el-button>
          <el-button
            @click="AddUsers_first(),dialogFormVisible5 = true "
            type="primary"
            class="plus_three_button"
          >添加人员</el-button>

          <el-dialog
            title="添加人员"
            :visible.sync="dialogFormVisible5"
          >
            <el-form
              ref="form"
              :model="form"
              label-width="80px"
            >
              <el-form-item label="单位名称">
                <el-input v-model="user.pdepartId"></el-input>
              </el-form-item>
              <el-form-item label="部门名称">
                <el-input v-model="user.cdepartId"></el-input>
              </el-form-item>
              <el-form-item label="姓名">
                <el-input v-model="user.username"></el-input>
              </el-form-item>
              <el-form-item label="身份证号">
                <el-input v-model="user.citizenNo"></el-input>
              </el-form-item>
              <el-form-item label="证件编号">
                <el-input v-model="user.empNo"></el-input>
              </el-form-item>
              <el-form-item label="职务">
                <el-input v-model="user.job"></el-input>
              </el-form-item>
              <el-form-item label="电话">
                <el-input v-model="user.mobilePhone"></el-input>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input v-model="user.fax"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="user.password"></el-input>
              </el-form-item>
              <el-form-item label="UKEY">
                <el-select
                  v-model="user.ukey"
                  placeholder="请选择"
                >
                  <el-option
                    label="区域一"
                    value="shanghai"
                  ></el-option>
                  <el-option
                    label="区域二"
                    value="beijing"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="角色">
                <el-select
                  v-model="form.region"
                  placeholder="请选择"
                >
                  <el-option
                    label="区域一"
                    value="8a8ab0b246dc81120146dc81818b0051"
                  ></el-option>
                  <el-option
                    label="区域二"
                    value="beijing"
                  ></el-option>
                </el-select>
              </el-form-item>
              </el-form-item>
              <el-form-item label="头像">
                <el-button type="primary">选择头像</el-button>

              </el-form-item>

            </el-form>
            <div
              slot="footer"
              class="dialog-footer"
            >
              <el-button @click="dialogFormVisible5 = false">取 消</el-button>
              <el-button
                type="primary"
                @click="dialogFormVisible5 = false,AddUser()"
              >确 定</el-button>
            </div>
          </el-dialog>
        </div>
        <!-- 搜索后 -->
        <table
          class="table_three"
          v-if="searchData.length>0"
        >

          <tr class="table_three_header">
            <td>照片</td>
            <td>姓名</td>
            <td>证件编号</td>
            <td>角色名称</td>
            <td>操作</td>
          </tr>
          <tr
            class="table_three_bottom"
            v-for="(item,index) in list_three"
            :key="index"
          >
            <td><img
                :src="item.icon"
                class="td_img"
              ></td>
            <td>{{item.userName}}</td>
            <td>{{item.empNo}}</td>
            <td>{{item.roleId}}</td>
            <td>
              <el-button
                type="primary"
                icon="el-icon-edit"
                class="icon_edit_con_1 "
                @click="dialogFormVisible6 = true"
              ></el-button>

              <el-button
                type="primary"
                icon="el-icon-delete"
                class="icon_delete_con_1"
                @click="open3(item.id)"
              ></el-button>
            </td>
          </tr>

          <el-pagination
            background
            layout="total, prev, pager, next, slot, jumper, ->"
            prev-text="上页"
            next-text="下页"
            :total="list_three.length"
            :current-page="currentPage"
            @current-change="handleCurrentChange"
          >
          </el-pagination>

        </table>

        <!-- 搜索前 -->
        <table
          class="table_three"
          v-else
        >

          <tr class="table_three_header">
            <td>照片</td>
            <td>姓名</td>
            <td>证件编号</td>
            <td>角色名称</td>
            <td>操作</td>
          </tr>
          <tr
            class="table_three_bottom"
            v-for="(item,index) in list_three"
            :key="index"
          >
            <td><img
                :src="item.icon"
                class="td_img"
              ></td>
            <td>{{item.user.userName}}</td>
            <td>{{item.user.empNo}}</td>
            <td>{{item.roleName}}</td>
            <td>
              <el-button
                type="primary"
                icon="el-icon-edit"
                class="icon_edit_con_1 "
                @click="dialogFormVisible6 = true"
              ></el-button>

              <el-button
                type="primary"
                icon="el-icon-delete"
                class="icon_delete_con_1"
                @click="open(item.id)"
              ></el-button>
            </td>
          </tr>

          <el-pagination
            background
            layout="total, prev, pager, next, slot, jumper, ->"
            prev-text="上页"
            next-text="下页"
            :total="list_three.length"
            :current-page="currentPage"
            @current-change="handleCurrentChange"
          >
          </el-pagination>

        </table>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  inject: ["reload"],

  data() {
    return {
      rootUrl: domain.rootUrl,
      i: 0,
      searchbox: "",
      searchbox_second: "",
      currentPage: 1,
      searchData: [],
      searchData_second: [],
      searchbox_second_first: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogTableVisible1: false,
      dialogFormVisible1: false,
      dialogTableVisible3: false,
      dialogFormVisible3: false,
      dialogFormVisible4: false,
      dialogTableVisible4: false,
      dialogFormVisible5: false,
      dialogTableVisible5: false,
      Newid:'',
      Newid_second:'',
      computed: {
        currentPageData() {
          let startInd = (this.currentPage - 1) * 10;
          let endInd =
            this.list_three.length - 1 > startInd + 10
              ? startInd + 10
              : this.list_three.length - 1;
          return startInd === endInd
            ? [this.list_three[startInd]]
            : this.list_three.slice(startInd, endInd);
        }
      },
      form: {
        parentDepartId: "",
        departId: "",
        departname: " ",
        jcwName: "",
        xzqhName: "",
        xzqhAbbr: "",
        xzqhCode: "",
        departCode: "",
        
      },
      rules: {
        departname: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      getUserInfo: [],
      part: {
        departId: "",
        parentDepartId: "",
        departname: "",
        departCode: "",
        administrator: "",
        mobile: "",
        fax: "",
        address: "",
        description: ""
      },
      user: {
        userId: "", //新增时不传
        pdepartId: "",
        cdepartId: "",
        username: "", //必填
        citizenNo: "",
        empNo: "",
        job: "",
        mobilePhone: "",
        fax: "",
        password: "",
        ukey: "",
        roleId: "",
        file: ""
      },

      formLabelWidth: "120px",
      i: "",
      modal6: false,
      loading: true,
      input: "",
      list_first: [],
      list_second: [],
      list_three: [],
      list_text: [],
      fatherId: "", //左侧选中项id
      father_childrenId: ""
    };
  },
  created() {
    this.userlist_first();
  },
  watch: {
    searchbox: {
      handler(newValue, oldValue) {
        this.SearchFun();
      },
      deep: true
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    // 点击添加部门
    addBuMen() {
      let that = this;
      if (that.fatherId == "") {
        alert("请选择公司");
        dialogFormVisible1 = false;
      } else {
        for (var i in that.list_first) {
          if (that.list_first[i].id == that.fatherId) {
            that.part.parentDepartId = that.list_first[i].id;
            break;
          }
        }
      }
    },
    asyncOK() {
      setTimeout(() => {
        this.modal6 = false;
      }, 2000);
    },
    userlist_first() {
      this.$http
        .get(this.rootUrl + "departController.do?departList")
        .then(res => {
          this.list_first = res.data;
         
        });
    },
    get_second_list(id, index) {
      var that = this;
      that.fatherId = id;
      that.list_text = [];
      for (var i in that.list_first) {
        if (id == that.list_first[i].id) {
          for (var j in that.list_first[i].children) {
            that.list_text.push(that.list_first[i].children[j]);
          }
        }
      }
    },

    get_three_list(id) {
      var that = this;
      that.father_childrenId = id;
      this.$http.get(this.rootUrl + "departController.do?orgUserList&orgId=" + id).then(res => {
          this.list_three = res.data.obj;

        });
    },

    open(id) {
      this.$confirm("此操作将永久删除该记录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
            this.axios.delete(this.rootUrl + "framebasic/departController.do?del&departId=" +id)
              .then(res => {
                this.reload();
              })
        })
    },

    open2(id) {
      this.$confirm("此操作将永久删除该记录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {

            this.axios.delete(this.rootUrl + "framebasic/departController.do?del&departId=" +id)
              .then(res => {
                this.reload();
              }) 
        })
    },


    open3(id) {
      this.$confirm("此操作将永久删除该记录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          
            this.axios.delete(this.rootUrl + "framebasic/departController.do?del&departId=" +id)
              .then(res => {
                this.reload();
              });
          
        })
    },
    PostUser() {
      let param = {
        parentDepartId: this.form.parentDepartId,
        departId: this.form.departId,
        departname: this.form.departname,
        jcwName: this.form.jcwName,
        xzqhName: this.form.xzqhName,
        xzqhAbbr: this.form.xzqhAbbr,
        xzqhCode: this.form.xzqhCode,
        departCode: this.form.departCode
      };
      this.axios.post(this.rootUrl + "departController.do?saveDepart", param).then(res => {
        console.log('111')
          this.reload();
        });
    },

    EditUser(id) {
      this.axios
        .get(this.rootUrl + "departController.do?departInfo&departId=" + id)
        .then(res => {
          var obj = JSON.parse(res.data);
            (this.form.departname = obj.obj.departname),
            (this.form.jcwName = obj.obj.jcwName),
            (this.form.xzqhName = obj.obj.xzqhName),
            (this.form.xzqhAbbr = obj.obj.xzqhAbbr),
            (this.form.xzqhCode = obj.obj.xzqhCode),
            (this.form.departCode = obj.obj.departCode);   
            this.Newid = id;
            
        });
    },

    PostEditUser() {
      let params = {
        departname: this.form.departname,
        jcwName: this.form.jcwName,
        xzqhName: this.form.xzqhName,
        xzqhAbbr: this.form.xzqhAbbr,
        xzqhCode: this.form.xzqhCode,
        departCode: this.form.departCode,
        // departId :this.part.departId,
        parentDepartId: this.part.parentDepartId,
        departname: this.part.departname,
        departCode: this.part.departCode,
        administrator: this.part.administrator,
        mobile: this.part.mobile,
        fax: this.part.fax,
        address: this.part.address,
        description: this.part.description,
       
      }
      console.log(this.Newid)
      this.$http.put(this.rootUrl + "departController.do?saveDepart&departId="+this.Newid, params).then(res => {
          this.reload();
        });
          this.reload();
    },
    PostPart() {
      let param = {
        departId: this.part.departId,
        parentDepartId: this.Newid,
        departname: this.part.departname,
        departCode: this.part.departCode,
        administrator: this.part.administrator,
        mobile: this.part.mobile,
        fax: this.part.fax,
        address: this.part.address,
        description: this.part.description
      };
      this.axios
        .post(this.rootUrl + "departController.do?saveDepart", param)
        .then(res => {}, res => {});
    },


    PostEditPart() {
     
      let params = {
        departname: this.form.departname,
        jcwName: '',
        xzqhName: '',
        xzqhAbbr: '',
        xzqhCode: '',
        departCode: '',
        parentDepartId: this.part.parentDepartId,
        departname: this.part.departname,
        departCode: this.part.departCode,
        administrator: this.part.administrator,
        mobile: this.part.mobile,
        fax: this.part.fax,
        address: this.part.address,
        description: this.part.description,
      };

      this.$http.put(this.rootUrl + "departController.do?saveDepart&departId="+this.Newid_second, params).then(res => {
      console.log(res)
        });
         this.reload();  
    },

    EditPart(id) {
      this.axios.get(this.rootUrl + "departController.do?departInfo&departId=" + id).then(res => {
          var obj = JSON.parse(res.data);
          this.part.departId = obj.obj.departId,
          this.part.parentDepartId = this.fatherId,
          this.part.departname = obj.obj.departname,
          this.part.departCode = obj.obj.departCode,
          this.part.administrator = obj.obj.administrator,
          this.part.mobile = obj.obj.mobile,
          this.part.fax = obj.obj.fax,
          this.part.address = obj.obj.address,
          this.part.description = obj.obj.description
          this.Newid_second =id
        });
    },
    AddUser() {
      var param = {
        userId: this.user.userId, //新增时不传
        pdepartId: this.user.pdepartId,
        cdepartId: this.user.cdepartId,
        username: this.user.username, //必填
        citizenNo: this.user.citizenNo,
        empNo: this.user.empNo,
        job: this.user.job,
        mobilePhone: this.user.mobilePhone,
        fax: this.user.fax,
        password: this.user.password,
        ukey: this.user.ukey,
        roleId: this.user.roleId,
        file: this.user.file
      };

      this.axios
        .post(this.rootUrl + "userController.do?saveOrUpdateUser", param)
        .then(res => {
          this.reload();
        });
    },

    AddUsers_first() {
      let that = this;
      
      if (that.fatherId == "") {
        alert("请选择公司");
        dialogFormVisible5 = false;
        } else if (that.father_childrenId == "") {
          alert("请选择部门");
          dialogFormVisible5 = false;
      } else {
     
        for (var k in that.list_text) {

          if (that.list_text[k].id == that.father_childrenId) {
            that.user.cdepartId = that.list_text[k].id;
          }
        }
        for (var i in that.list_first) {
          if (that.list_first[i].id == that.fatherId) {
            that.user.pdepartId = that.list_first[i].id;
            // console.log(that.user.pdepartId);
          }
        }
      }
    },
    SearchFun() {
    // search 是 v-model="search" 的 search
    var searchbox = this.searchbox;
    if (searchbox) {
      this.searchData = this.list_first.filter(function(product) {
        return Object.keys(product).some(function(key) {
          // 每一项数据的参数名
          // console.log(key)
          return (
            String(product[key])
              // toLowerCase() 方法用于把字符串转换为小写。
              .toLowerCase()
              // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
              .indexOf(searchbox) > -1
          );
        });
      });
    } else if (searchbox.length === 0) {
      this.searchData = this.list_first;
    } else {
      return this.searchData;
    }
  },
  SearchFun_second() {
    // search 是 v-model="search" 的 search
    var searchbox_second = this.searchbox_second;
    if (searchbox_second) {
      this.searchData_second = this.list_three.filter(function(product) {
        // 每一项数据
        return Object.keys(product).some(function(key) {
          // 每一项数据的参数名
          // console.log(key)
          return (
            String(product[key])
              // toLowerCase() 方法用于把字符串转换为小写。
              .toLowerCase()
              // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
              .indexOf(searchbox_second) > -1
          );
        });
      });
    } else if (searchbox_second.length === 0) {
      this.searchData_second = this.table_three;
    } else {
      return this.searchData_second;
    }
  }
  },
  
};
</script>

<style scoped >
::-webkit-scrollbar {
  margin-top: 20px;
  width: 10px; /*竖向滚动条的宽度*/
  height: 10px; /*横向滚动条的高度*/
}
::-webkit-scrollbar-thumb {
  /*滚动条里面的小方块*/
  background: #5191d1;
  border-radius: 5px;
}
::-webkit-scrollbar-track {
  /*滚动条轨道的样式*/
  background: rgb(218, 215, 215);
  border-radius: 5px;
}

@media screen and (max-width: 1440px) {
  .header-manage {
    width: 100%;
    height: 40px;
    border-bottom: 2px solid #edf0f5;
    background-color: #fff;
    min-width: 1440px;
  }
  .header-manage > span {
    font-weight: 600;
    text-align: left;
    padding: 10px;
    padding-left: 25px;
    font-size: 15px;
    float: left;
  }
  .bottom-manage {
    background-color: #fff;
    min-width: 1440px;
  }
  .bottom_first_manage {
    float: left;
    width: 300px;
    height: 550px;
    border-right: 2px solid #edf0f5;
    box-sizing: border-box;
  }

  .list_first_main {
    height: 480px;
  }
  .searchbox {
    height: 27px;
    width: 130px;
    margin-top: 20px;
    margin-left: -53px;
    border-radius: 5px 0px 0px 5px;
  }

  .bottom-manage >>> .ivu-modal-footer {
    display: none;
  }

  .el-button {
    padding: 8.5px 8px;
  }
  .searchbutton {
    float: left;
    margin-top: -33px;
    margin-left: 190px;
    border-radius: 0px 5px 5px 0px;
  }
  .plusbutton {
    float: left;
    margin-top: -33px;
    margin-left: 240px;
    border: #fff;
    background-color: #5bac58;
    width: 33px;
    height: 33px;
    border-radius: 5px;
  }
  .el-icon-plus:before {
    margin: -4px;
  }

  .list_first,
  .list_second {
    background-color: #5191d1;
    width: 230px;
    height: 33px;
    margin-top: 15px;
    margin-left: 25px;
    border-radius: 3px;
    text-align: left;
  }
  .list_second_main {
    margin-top: 15px;
    min-width: 215px;
  }

  .icon_delete {
    margin-top: 9px;
    text-align: center;
    position: absolute;
    left: 10px;
  }
  .icon_edit {
    display: inline-block;
    margin-top: 9px;
    position: absolute;
    left: 50px;
  }
  /* 

.icon_delete_second{
 
  margin-top:0px;
 
  position: absolute;
  left:210px;
   
}
.icon_edit_second{
  display: inline-block;
  margin-top:0px;
    position: absolute;
  left:180px;
} */
  .list_first > span,
  .list_second > span {
    display: inline-block;
    color: #fff;
    font-size: 14px;
    line-height: 33px;
    margin-left: 20px;
  }
  .el-icon-plus {
    color: #fff;
  }
  .err {
    color: red;
  }
  .bottom_second_manage {
    float: left;
    width: 298px;
    height: 550px;
    border-right: 2px solid #edf0f5;
  }
  .plus_second_button {
    margin-left: 160px;
    margin-top: 20px;
    width: 100px;
  }
  .clearfix {
    clear: both;
    overflow: auto;
  }

  .list_three_main {
    min-width: 620px;
    overflow: hidden;
    width: 620px;
    margin-left: 600px;
  }

  .three_header {
    margin-left: 20px;
    overflow: hidden;
    min-width: 620px;
    float: left;
    margin-top: 20px;
  }

  .bottom-manage >>> .searchbox_second .el-input__inner {
    width: 130px;
    border-radius: 5px 5px;
    height: 35px;
  }
  .searchbox_second_first {
    height: 27px;
    width: 130px;
    border-radius: 5px;
  }
  .searchbox_second {
    height: 27px;
    width: 130px;
    border-radius: 5px;
  }

  .three_header > span {
    font-size: 12px;
    height: 600px;
  }
  .number_second {
    font-size: 12px;
    height: 600px;
    margin-left: 20px;
  }
  .search_three_button_first {
    margin-left: 15px;
  }
  .plus_three_button {
    margin-left: 20px;
  }

  .three_bottom_header {
    width: 550px;
    height: 30px;
    margin-top: 70px;
    background-color: #e6eef1;
    margin: 0 auto;
    margin-top: 70px;
    text-align: left;
    display: flex;
    justify-content: space-between;
  }

  .three_bottom_bottom {
    width: 550px;
    height: 30px;
    margin-top: 70px;
    background-color: #e6eef1;
    margin: 0 auto;
    margin-top: 70px;
    text-align: left;
    display: flex;
    justify-content: flex-start;
  }
  .three_bottom_bottom {
    margin-top: 0px;
    background-color: #f9f9f9;
    height: 60px;
  }

  .table_three_bottom > td > img {
    height: 20px;
    width: 20px;
  }
  .three_bottom_header > span {
    display: inline-block;
    margin-top: 4px;
    font-size: 16px;
  }

  .three_bottom_header > span:nth-child(1) {
    display: inline-block;
    padding-left: 40px;
  }

  .three_bottom_header > span:nth-child(5) {
    display: inline-block;
    padding-right: 40px;
  }

  .three_bottom_bottom > span {
    display: inline-block;
    /* margin-right: 15px; */
    margin-top: 15px;
    font-size: 13px;
  }

  .three_bottom_bottom > span:nth-child(2) {
    margin-left: 50px;
  }
  .three_bottom_bottom > span:nth-child(3) {
    margin-left: 50px;
  }
  .three_bottom_bottom > span:nth-child(4) {
    margin-left: 50px;
  }

  .three_bottom_bottom > span:nth-child(5) {
    margin-left: 50px;
  }
} /*>=1280的设备*/

@media screen and (min-width: 1440px) {
  .blue {
    background-color: red;
  }
  .header-manage {
    width: auto;
    height: 40px;
    border-bottom: 2px solid #edf0f5;
    background-color: #fff;
    min-width: 1300px;
  }
  .header-manage > span {
    font-weight: 600;
    text-align: left;
    padding: 10px;
    padding-left: 25px;
    font-size: 15px;
    float: left;
  }
  .bottom-manage {
    background-color: #fff;
    min-width: 1300px;
  }
  .bottom_first_manage {
    float: left;
    width: 400px;
    height: 550px;
    border-right: 2px solid #edf0f5;
    box-sizing: border-box;
  }

  .list_first_main {
    height: 480px;
  }

  .bottom-manage >>> .ivu-modal-footer {
    display: none;
  }

  .el-button {
    padding: 8.5px 8px;
  }
  .searchbox {
    height: 27px;
    width: 170px;
    margin-top: 20px;
    margin-right: 160px;
    border-radius: 5px 0px 0px 5px;
  }
  .searchbutton {
    float: left;
    margin-top: -33px;
    margin-left: 206px;
    border-radius: 0px 5px 5px 0px;
  }
  .plusbutton {
    float: left;
    margin-top: -33px;
    margin-left: 270px;
    border: #fff;
    background-color: #5bac58;
    width: 33px;
    height: 33px;
    border-radius: 5px;
  }
  .el-icon-plus:before {
    margin: -4px;
  }

  .list_first,
  .list_second {
    background-color: #5191d1;
    width: 320px;
    height: 33px;
    margin-top: 15px;
    margin-left: 25px;
    border-radius: 3px;
    text-align: left;
  }
  .list_second_main {
    margin-top: 15px;
    min-width: 315px;
  }
  .list_first > span,
  .list_second > span {
    display: inline-block;
    color: #fff;
    font-size: 14px;
    line-height: 33px;
    margin-left: 20px;
    cursor: pointer;
  }
  .el-icon-plus {
    color: #fff;
  }
  .err {
    color: red;
  }
  .bottom_second_manage {
    float: left;
    width: 398px;
    height: 550px;
    border-right: 2px solid #edf0f5;
  }
  .plus_second_button {
    margin-left: 260px;
    margin-top: 20px;
    width: 100px;
  }
  .clearfix {
    clear: both;
    overflow: auto;
  }

  .list_three_main {
    min-width: 800x;
    overflow: hidden;
    width: 800px;
    margin-left: 800px;
  }

  .three_header {
    margin-left: 20px;
    overflow: hidden;
    min-width: 780px;
    float: left;
    margin-top: 20px;
  }

  .bottom-manage >>> .searchbox_second .el-input__inner {
    width: 150px;
    border-radius: 5px;
    height: 33px;
  }
  .searchbox_second_first {
    height: 27px;
    width: 130px;
    margin-right: 50px;
    border-radius: 5px;
  }

  .searchbox_second {
    height: 27px;
    width: 130px;
    margin-right: 70px;
    border-radius: 5px;
  }

  .three_header > span {
    font-size: 14px;
    height: 800px;
  }

  .search_three_button_first {
    margin-left: -30px;
  }
  .plus_three_button {
    margin-left: 30px;
  }

  .three_bottom_header {
    width: 750px;
    height: 30px;
    margin-top: 70px;
    background-color: #e6eef1;
    margin: 0 auto;
    margin-top: 70px;
    text-align: left;
    display: flex;
    justify-content: space-between;
  }

  .three_bottom_bottom {
    width: 750px;
    height: 30px;
    margin-top: 70px;
    background-color: #e6eef1;
    margin: 0 auto;
    margin-top: 70px;
    text-align: left;
    display: flex;
    justify-content: flex-start;
  }
  .three_bottom_bottom {
    margin-top: 0px;
    background-color: #f9f9f9;
    height: 60px;
  }

  .td_img {
    height: 60px;
    width: 60px;
  }
  .three_bottom_header > span {
    display: inline-block;
    margin-top: 4px;
    font-size: 16px;
  }

  .three_bottom_header > span:nth-child(1) {
    display: inline-block;
    padding-left: 40px;
  }

  .three_bottom_header > span:nth-child(5) {
    display: inline-block;
    padding-right: 40px;
  }

  .three_bottom_bottom > span {
    display: inline-block;
    /* margin-right: 15px; */
    margin-top: 15px;
    font-size: 13px;
  }

  .three_bottom_bottom > span:nth-child(2) {
    margin-left: 100px;
  }
  .three_bottom_bottom > span:nth-child(3) {
    margin-left: 100px;
  }
  .three_bottom_bottom > span:nth-child(4) {
    margin-left: 100px;
  }

  .three_bottom_bottom > span:nth-child(5) {
    margin-left: 100px;
  }
}

.table_three {
  margin: 0 auto;
  margin-left: 50px;
  font-size: 15px;
  display: inline-block;
  margin-top: 20px;
}

.table_three_header > td {
  height: 30px;
  border: 0px;
  width: 150px;
  background-color: #e6eef1;
}
.table_three_header {
  width: 150px;
  margin-top: 20px;
}
.table_three,
.table_three_bottom {
  text-align: left;
  border-collapse: collapse;
}

.table_three_bottom > td {
  font-size: 13px;
  height: 50px;
  width: 150px;
  vertical-align: center;
}

/* .icon_delete{
 
  margin-top:0px;
  text-align: center;
  position: absolute;
  left:290px;
   
}
.icon_edit{
  display: inline-block;
  margin-top:0px;
  position: absolute;
  left:260px;
} */
.icon_edit_con {
  background-color: #5191d1;
  border: 0px;
  float: right;
  margin-left: 50px;
}
.icon_delete_con {
  background-color: #5191d1;
  border: 0px;
  float: right;
}
</style>
