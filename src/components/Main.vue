<template>
  <div class="box_main">
    <div class="header_main">
      <div class="top">
        <img src="../assets/logo_new.png" alt />
        <div class="login-message_main">
          <div class="login-left_main"></div>
          <div class="login-right_main">
            <p>姓名：{{ user.realName }}</p>
            <p>职务：{{ user.job }}</p>
            <p>部门：{{ user.departName }}</p>
            <p>角色：{{ user.roleName }}</p>
        </div>
        </div>
      </div>
      <div class="btn">
        <router-link to="desk" class="title_first_main">
          <span class="down" @click="color()" ref="work_main">工作桌面</span>
        </router-link>
        <router-link to="SysConfig" class="title_second_main">
          <span @click="color_two()" ref="work_two_main">系统设置</span>
        </router-link>
      </div>
    </div>
    <div class="content_main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import comment from "../router/comment.js";
export default {
  name: "Main",
  data() {
    return {
      point: 0,
      user: {}
    };
  },
  created () {
      this.user = JSON.parse (window.sessionStorage.getItem("userInfo"));
  },
  methods: {
    color() {
      this.$refs.work_main.classList.add("down");
      this.$refs.work_two_main.classList.remove("down");
    },

    color_two() {
      this.$refs.work_main.classList.remove("down");
      this.$refs.work_two_main.classList.add("down");
    }
  }
};
</script>

<style scoped>
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}

@media screen and (max-width: 1440px){
  .header_main {
  height: 146px;
  width: 100%;
  min-width: 1440px;
  background: url(../assets/header_bg.png) no-repeat;
  background-size: 100% 100%;
  border-bottom: 1px solid #b8b8b0;
}
}
@media screen and (min-width: 1440px) {
.header_main {
  height: 146px;
  width: auto;
  min-width: 1600px;
  background: url(../assets/header_bg.png) no-repeat;
  background-size: 100% 100%;
  border-bottom: 1px solid #b8b8b0;
}
}


.box_main {
  /*background-color: #f3f3f3;*/
}

.left-side_main {
  width: 58px;
  height: auto;
  background: linear-gradient(to right, #336ca2, #4e85b9);
  float: left;
  position: absolute;
  /*margin-top: 0px;*/
  margin-top: 150px;
  top: 0;
}

.left-side_main > div {
  height: 150px;
  padding-top: 50px;
  color: white;
  width: 25px;
  margin: 0 auto;
}

.left-side_main .menu-item-2_main {
  border-top: solid 2px white;
}

.title_first_main {
  display: inline-block;
  position: absolute;
  left: 40px;
  top: 110px;
  width: 100px;
  height: 29px;
  text-decoration: none;
  font-size: 16px;
}

.title_first_main>.down{
  border-bottom: 2px solid #fc4d04;
}
.title_second_main>.down,.title_first_main>.down{
  border-bottom: 2px solid #fc4d04;
}
.title_first_main :hover,.title_first_main>.down {
  background: url("../assets/gzzm.png") no-repeat;
  background-size: 30px 30px;
  color: #fc4d04;
  
}

.title_second_main :hover,.title_second_main>.down {
  background: url("../assets/xtsz.png") no-repeat;
  background-size: 30px 30px;
  color: #fc4d04;
}

.title_second_main {
  display: inline-block;
  position: absolute;
  left: 200px;
  top: 110px;
  width: 100px;
  height: 29px;
  text-decoration: none;
  font-size: 16px;
}

.title_first_main > span {
  display: inline-block;
  padding-left: 35px;
  padding-top: 5px;
  cursor: pointer;
  height: 29px;
  background: url("../assets/gzzm1.png") no-repeat;
  background-size: 30px 30px;
  color: #333;
}

.title_second_main > span {
  display: inline-block;
  padding-left: 35px;
  padding-top: 5px;
  cursor: pointer;
  height: 29px;
  background: url("../assets/xtsz1.png") no-repeat;
  background-size: 30px 30px;
  color: #333;
}
.top{	
	
	width:auto;
	height: 160px;
	margin-left:60px; 
	overflow:auto
}
.top>img{
	
	float: left;
}

.login-message_main {
  float: right;
  width:250px;
  height:145px;
  margin-right:100px;

}

.login-right_main{
	overflow: hidden;
	margin-top:10px;
	float:right;
	 
}

.login-left_main {
  width: 90px;
  height: 110px;
  background: url(../assets/work2.png) no-repeat;
  background-size: cover;
  margin-top: 16px;
  float: left;
}

.login-right_main > p {
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  margin-top:3px; 

}
</style>
