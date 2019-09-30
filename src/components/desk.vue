<template>
<div>
    <div class="left-side_desk">
        <div class="menu-item_desk">
          <span class="item-title_desk">监督管理</span>
        </div>
         <div class="menu-item-2_desk">
          <span class="item-title_desk">辅助办案</span>
        </div>
         <div class="menu-item-2_desk">
          <span class="item-title_desk">取证分析</span>
        </div>
         <div class="menu-item-2_desk">
          <span class="item-title_desk">办案指南</span>
        </div>
    </div>
    <div class="right-content_desk">
      <div class="user-manage_desk">
        <div v-for="(item,index) in userMgrBtns" :key="index">
          <img :src="item.imgUrl">
          <p>{{ item.title }}</p>
        </div>
      </div>
      <div class="other-manage_desk">
        <div  v-for="(item,index) in otherMgrBtns" :key="index">
          <img :src="item.imgUrl">
          <p>{{ item.title }}</p>
        </div>
      </div>
       <div class="other-manage_desk">
        <div v-for="(item,index) in otherMgrBtns2" :key="index">
          <img :src="item.imgUrl">
          <p>{{ item.title }}</p>
        </div>
      </div>
       <div class="other-manage_desk">
        <div v-for="(item,index) in otherMgrBtns3" :key="index">
          <img :src="item.imgUrl">
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
    	<div ref='right_message_desk' class = 'right-message_desk'>
    		<div class="message-top_desk">
    			<div class="top-content_desk"><span class ="center_desk">接案中心（共<span class='point_desk'>{{point}}</span>条）</span>
    				<div class = "button_desk">
    					<span class= "minx_desk" >最小化</span>
    					<span class= "active_desk new_desk"  @click =clickfun($event)>最 新</span>
    					<span class="old_desk" @click =clickfun($event)>历 史</span>
    				</div>
    				</div>
    				
    			<div class="bottom-content_desk">
    				<ul >
    					<li  class = 'content-li' v-for="(item,index) in content_msg" :key="index">
    						{{content_msgs}}
    					</li>
    				</ul>
    			</div>

    		</div>
    		<div class="message-bottom_desk">
    			<div class="top-content-two_desk"><span class ="center_desk">办案中心（共<span class='point_desk'>{{point}}</span>条）</span>
    				<div class = "button_desk">
    					<span class= "active_desk new_desk">最 新</span>
    					<span class="old_desk">历 史</span>
    				</div>
    			</div>
    			<div class="bottom-content-two_desk">
    				
    			</div>
    		</div>
    		</div>
    	</div>
    	</div>
</template>

<script>
	export default {
        data () {
          return {
          	point: 0,
          	name:'高级用户X',
  			    job:'',
  			    department:'案件检察管理室',
  		    	part:'高级用户',
  			content_msgs:'',
            userMgrBtns: [
              {
                imgUrl: require('./../assets/管理.png'),
                title: '问题线索管理',
                toUrl: 'quesMgr'
              },
              {
                imgUrl: require('./../assets/监督.png'),
                title: '办案过程监督',
                toUrl: 'caseMgr'
              }
            ],
             otherMgrBtns: [
              {
                imgUrl: require('./../assets/追踪.png'),
                title: '追逃追赃信息'
              },
              {
                imgUrl: require('./../assets/icon_3_3.png'),
                title: '扣押物品信息管理'
              },
              {
                imgUrl: require('./../assets/电子案卷.png'),
                title: '电子案卷'
              },

              {
                imgUrl: require('./../assets/处理.png'),
                title: '文书管理',
                toUrl: 'numMgr'
              },
              {
                imgUrl: require('./../assets/bilu_manage.png'),
                title: '笔录管理',
                toUrl: 'operationLog'
              },
              {
                imgUrl: require('./../assets/icon_3.png'),
                title: '同步录音录像',
                toUrl: 'systemBackup'
              },
              {
                imgUrl: require('./../assets/yucheng.png'),
                title: '审讯指挥',
                toUrl: 'systemLevelup'
              }
            ],
             otherMgrBtns2: [
              {
                imgUrl: require('./../assets/fenxi_1.png'),
                title: '人员综合分析'
              },
              {
                imgUrl: require('./../assets/iconV_3.jpg'),
                title: '电子取证'
              },
              {
                imgUrl: require('./../assets/iconV_11.jpg'),
                title: '银行账户分析'
              },
              {
                imgUrl: require('./../assets/iconV_7.jpg'),
                title: '话单分析'
              },
              {
                imgUrl: require('./../assets/iconV_9.jpg'),
                title: '邮件分析'
              },
              {
                imgUrl: require('./../assets/iconV_13.jpg'),
                title: '活动分析'
              }

            ],
             otherMgrBtns3: [
              {
                imgUrl: require('./../assets/guide_2.png'),
                title: '法规库'
              },
              {
                imgUrl: require('./../assets/guide_1.png'),
                title: '工作规范'
              },
              {
                imgUrl: require('./../assets/guide_6.png'),
                title: '案例库'
              },
              {
                imgUrl: require('./../assets/guide_4.png'),
                title: '证据规格'
              },
              {
                imgUrl: require('./../assets/智能办案系统.png'),
                title: '个人办案助手'
              }
              
            ],
            content_msg:[

            {
            	content_msgs:"案件1"
            },
             {
            	content_msgs:"案件1"
            },
             {
            	content_msgs:"案件1"
            },
             {
            	content_msgs:"案件1"
            }

            ]
          }
        },
      methods: {
          // runPage (name) {
          //   // this.$router.push({name: name});
          //   console.log(name)
          // },

          clickfun(e){
          this.content_msgs = '新的案件';
          e.target.class = "active_desk new_desk"
          }

         
      },

    	}

</script>

<style scoped>
 .box_desk{
    background-color: #f3f3f3;
  }

  .left-side_desk {
    width: 58px;
    height: auto;
    background: linear-gradient(to right,#336CA2 , #4E85B9);
    float: left;
    position: absolute;
    /*margin-top: 0px;*/
    margin-top:148px;
    top: -2px;
  }

  .left-side_desk>div{
    height: 150px;
    padding-top: 50px;
    color: white;
    width: 25px;
    margin: 0 auto;
  }

  .left-side_desk .menu-item-2_desk{
    border-top: solid 2px #fff;
  }


  .right-content_desk{
    height: auto;
    float: left;
    background-color: white;
    width: auto;
    margin-left: 80px;
    width: auto;
    /* border-top :2px solid #B8B8B0; */
    
  }

  .right-content_desk .user-manage_desk{
    width: 1200px;
    min-width: 930px;
    margin-top: 40px;
    height: 150px;
  }

  .right-content_desk .other-manage_desk{
    width: 100%;
    min-width: 930px;
    height: 150px;
    padding-top: 50px;
    

  }
  .right-content_desk .user-manage_desk>div{
    float: left;
    margin-left: 20px;
    padding: 15px;
    padding-top: 10px;
    width: 110px;
  }
.right-content_desk .other-manage_desk>div{
    float: left;
    margin-left: 20px;
    padding: 10px 15px 0px 15px;
    width: 110px
    
  }

  .right-content_desk .other-manage_desk>div>img{
    width: 75px;
    padding:3px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
  }

	.right-content_desk .user-manage_desk>div>img{
    width: 75px;
    padding:3px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
  }
  .right-content_desk .user-manage_desk>div>p,.right-content_desk .other-manage_desk>div>p{
    margin-top: 0px;
    font-size: 14px;
  }
	 .right-message_desk{
	 	width:350px;
	 	height:700px;
	 	position:fixed;
	 	right:0px;
	 	top:146px;
	 	border :2px solid #B8B8B0;
	 	border-right:0px;
	 	border-bottom:0px;
	 	background-color:#fff;
	 	
	 }

	 .message-top_desk{
	 	height:205px;
	 	font-size:14px;
	 	color:#333;

	 }

	
   	
	.old_desk{
   		border-radius:0px 3px 3px 0px;
   		width:40px;
   		font-size:12px;
   		border:1px solid #333;
   		border-left:0px;
   		margin-left:-5px;
   		display:inline-block;
   		height:18px;
   		line-height:18px;
   		font-family:'幼圆';
   		cursor:pointer
   	}

   	.new_desk{
   		border-radius:3px 0px 0px 3px;
   		width:40px;
   		font-size:12px;
   		border:1px solid #333;
   		border-right:0px;
   		display:inline-block;
   		height:18px;
   		line-height:18px;
   		font-family:'幼圆';
   		cursor:pointer

   	  	}
   	
   	.active_desk{
   		background-color:green;
   		color:#fff;
   	}
   	.button_desk{
   		padding-right:10px;
   		margin-top:1px;
   		float:right;
   		
   	}

   	.top-content_desk{
   		border-bottom :2px solid #B8B8B0;
   		height:25px;
   	}

	.center_desk{
   		padding-right:90px;
   		font-family:"宋体"
   	}
   	.bottom-content_desk{
   		height:300px;
   	}
     .content-li{
       list-style-type: none;
       text-align: left;
       padding-left:15px;
       padding-top:5px; 
       
     }

   	.top-content-two_desk{
   		float:left;
   		border-bottom :2px solid #B8B8B0;
   		border-top :2px solid #B8B8B0;
   		height:25px;
   		width:100%;
   		font-size:14px;
   	}
   	.poin_desk{
   		color:red;
   	}

   	.bottom-content-two_desk{
   		padding-top:29px;
   		height:572px;

   	}

   	.login-message_desk{
   		float: right;
   	}

   	.login-left_desk{
   		width: 90px;
   		height: 110px;
   		background:url(../assets/work2.png)  no-repeat;
   		background-size: cover ;
   		float: left;
   		margin-top:15px;
   	   		

   	}

   	.login-right_desk>p{
   		text-align:left;
   		font-size: 14px;
   		font-weight: 600;
   		margin-left: 100px;
   		margin-right: 80px;
   	}
   .menu-item_desk{
     width:auto;
     height: 2px;
   }

  .item-title_desk{
    display: inline-block;
     width:20px;
     height: 2px;
     font-size:15px;
  }
</style>