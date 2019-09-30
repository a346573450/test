<template>
  <div class="box">
    <div class="left-side">
        <div class="menu-item">
          <span class="item-title">用户管理</span>
        </div>
        <div class="menu-item-2">
          <span class="item-title">其他管理</span>
        </div>
    </div>
    <div class="right-content">
      <div class="user-manage">
        <div v-for="(item,index) in userMgrBtns" @click="runPage(item.toUrl)" :key="index">
          <img :src="item.imgUrl">
          <p>{{ item.title }}</p>
        </div>
      </div>
      <div class="other-manage">
        <div v-for="(item,index) in otherMgrBtns" :key="index">
          <img :src="item.imgUrl">
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SysConfig",
        data () {
          return {
            userMgrBtns: [
              {
                imgUrl: require('./../assets/sysconfig3.png'),
                title: '用户综合管理',
                toUrl: '/management'
              },
              {
                imgUrl: require('./../assets/sysconfig4.png'),
                title: '角色管理',
                toUrl: '/usermanagement'
           
              },
              {
                imgUrl: require('./../assets/xitongIcon_03.png'),
                title: '数字证书管理',
               
              },
              {
                imgUrl: require('./../assets/sysconfig1.png'),
                title: '操作日志',
              
              },
              {
                imgUrl: require('./../assets/system_backup.png'),
                title: '系统备份',
               
              },
              {
                imgUrl: require('./../assets/system_upgrade.png'),
                title: '系统升级',
              
              }
            ],
            otherMgrBtns: [
              {
                imgUrl: require('./../assets/指南针.png'),
                title: '办案指南配置'
              },
              {
                imgUrl: require('./../assets/个人信息.png'),
                title: '个人信息修改'
              },
              {
                imgUrl: require('./../assets/版本.png'),
                title: '系统版本信息'
              }
            ]
          }
        },
      methods: {
          runPage (toUrl) {
            this.$router.push(toUrl);
          }
      }
    }
</script>

<style scoped>

  .box{
    background-color: #f3f3f3;
  }

  .left-side {
    width: 58px;
    height: 100%;
    background: linear-gradient(to right,#336CA2 , #4E85B9);
    float: left;
    position: absolute;
    margin-top: 148px;
    top: -2px;
  }

  .left-side>div{
    height: 150px;
    padding-top: 50px;
    color: white;
    width: 25px;
    margin: 0 auto;
  }
  .item-title{
    display: inline-block;
    width:15px;
    font-size: 15px;
  }
  .left-side .menu-item-2{
    border-top: solid 2px white;
  }

  .right-content{
   
    background-color: white;
    margin-left: 54px;
    /* margin-top: 148px; */

  }

  .right-content .user-manage{
    width: 100%;
    min-width: 1000px;
    padding-top: 51px;
    height: 138px;
  }
  .right-content .other-manage{
    width: 100%;
    min-width: 930px;
    margin-top: 63px;
    height: 138px;
  }
  .right-content .user-manage>div,.right-content .other-manage>div{
    float: left;
    margin-left: 19px;
    padding-left: 47px;
    padding-top:2px;
    width: 100px

  }

  .right-content .other-manage>div>img{
    width: 53px;
    background: #89d28b;
    padding:12px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    
  }
  .user-manage>div>img{
     width: 75px;
  }

 

  .right-content .user-manage>div>p,.right-content .other-manage>div>p{
    margin-top: 0px;
    font-size: 14px;
  }

</style>
