<template>
  <div id="login">
    <div class="form-input" >
      <img src="../assets/logo_new_.png" alt="纪检监察智能辅助办案系统">
      <br>
      <form class="inputs">
        <div class="my-input">
          <img src="../assets/login_user_icon.png" alt="">
          <input type="text"  v-model ='accout' placeholder="请输入用户名">
        </div>
        <div class="my-input" >
          <img src="../assets/login_password_icon.png" alt="">
          <input type="password" v-model ='password' placeholder="请输入密码">
        </div>
      </form>
      <div class="btn-div">
        <input type="button" @click="login" value="数字证书登录" class = 'login_scss'>
        <input type="button"  value="重置密码">
      </div>
    </div>

  
  </div>
</template>

<script>;
import comment from '../router/comment.js'
import desk from '../components/desk'
export default {
  name: "Login",
  components:{
    'desk':desk
  },
  data () {
    return {
      rootUrl:domain.rootUrl,
      accout: '',
      password: '',
      realName:''
    }
  },
  methods: {
     open() {
       let that = this;
        this.$alert('登录成功，点击确定跳转', '登录成功', {
          confirmButtonText: '确定',
          callback: action => {
           that.$router.push('/desk');
          }
        });
      },

       open2() {
        this.$alert('登录失败，请核对账户名和密码是否正确，然后再尝试', '登录失败', {
          confirmButtonText: '确定',
          callback: action => {
           
          }
        });
      },

    login () {
      let that = this;
      let param = {
        accout : that.accout,
        password : that.password
      }
     this.axios.post(this.rootUrl+'userLoginController.do?login',this.$qs.stringify(param)).then((res)=>{
  
      let loken = JSON.parse(res.data.jsonStr)
      var status = res.data.msg;
      if(status === "成功"){
        window.sessionStorage.setItem("islogin", JSON.stringify(loken.obj.password)); //这里存到session变量记得换成用户的登录唯一标识
        let resData = res.data.obj;
        let userInfo = {
          id: resData.user.id,
          userName: resData.user.userName,
          roleName: resData.roleName,
          departName: resData.departName,
          realName: resData.user.realName,
          icon: resData.user.icon,
          mobilePhone: resData.user.mobilePhone,
          email: resData.user.email,
          job: resData.user.job,
        }
        window.sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
        this.open();
        this.realName = res.data.obj.realName
        comment.$emit('val', this.realName)

      }else{
        this.open2();
      }
     })
    }

  },
  computed: {

  }
}
</script>

<style scoped>


  #login{
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #232323;


  }
  .form-input{
    width: 100%;
    height: 80%;
    position: absolute;
    padding-top:100px;
    white-space:nowrap; 
    min-width:700px;

  }


  .inputs{
    width: 50%;
    margin: 15px auto;
    white-space:nowrap; 

  }

  form>img{
    margin: 0 auto;
    width: 70%;
    min-width: 360px;
    max-width: 700px;
  }

  .my-input{
    display: block;
    height: 40px;
    width: 274px;
    min-width: 211px;
    max-width: 280px;
    margin: 15px auto;
    border: 2px solid #fffa7f;
    border-radius: 5px;
    white-space:nowrap; 
  }

  .my-input>img{

    vertical-align: middle;
    margin: 0 5px;

  }

  .my-input>input{

    height: 100%;
    width: 80%;
    border: none;
    vertical-align: middle;
    padding-left: 5px;
    border-left: 2px solid #fffa7f;
    background-color: transparent;
    color: #f3f3f3;
  }

  .btn-div{
    align-content: center;
    width: 50%;
    margin: 0 auto;
  }

  .btn-div>input{
    height: 35px;
    min-width: 110px;
    background-color: #fffa7f;
    border-radius: 5px;
    padding: 5px 10px;
    border: none;
    font-size: 15px;
    font-weight: bold;
    margin: 15px 15px;
  }

  .login_scss{
    cursor:pointer;
    outline:none;

  }
</style>
