import Vue from 'vue'
import Router from 'vue-router'
import store from './store';

Vue.use(Router)


let router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [

      {
        path: '/storemanagement',
        name: 'storemanagement',
        component: () => import('@/pages/storemanagement/storemanagement.vue')
      },

      //修改密码
    {
        path: '/changepassword',
        name: 'changepassword',
        component: () => import('@/pages/changepassword/ChangePassword.vue'),
        meta: {
        showFooter: true,
        showHeader:true
      }
    },
    //辅导员管理页面
    {
        path: '/counselormanagementpage',
        name: 'counselormanagementpage',
        component: () => import('@/pages/counselormanagementpage/CounselorManagementPage.vue')
     },
    //项目首页
    {
      path: '/projecthomepage',
      name: 'projecthomepage',
      component: () => import('@/pages/projecthomepage/ProjectHomePage.vue')
    },
    //项目详细
    {
      path: '/projectdetails',
      name: 'projectdetails',
      component: () => import('@/pages/projectdetails/ProjectDetails.vue')
    },
    //项目学习
    {
      path: '/projectlearning',
      name: 'projectlearning',
      component: () => import('@/pages/projectlearning/ProjectLearning.vue')
    },    

    //测试页面
    {
      path: '/test',
      name: 'test',
      component: () => import('@/pages/Test/Test.vue')
    },
    //测试页面
    {
      path: '/city',
      name: 'city',
      component: () => import('@/pages/City/City.vue')
    },
    //首页
    {
      path: '/',
      name: 'index',
      component: () => import('@/pages/index/Index.vue'),
      meta: {
        showFooter: true,
        showHeader:true
      }
    },
    //购物车页面
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: () => import('@/pages/shoppingcart/ShoppingCart.vue'),
      meta: {
        showFooter: true,
        showHeader:true
      }
    },
    //店铺模块
      {
        path: '/storemodule',
        name: 'storemodule',
        component: () => import('@/pages/storemodule/StoreModule.vue')
      },
    //下单页面
    {
      path: '/pay',
      name: 'pay',
      component: () => import('@/pages/pay/Pay.vue'),
      meta: {
        showFooter: true,
        showHeader:true
      }
    },
    //课程详情页面
    {
      path: '/classdetails',
      name: 'classdetails',
      component: () => import('@/pages/classdetails/ClassDetails.vue'),
      meta: {
        showFooter: true,
        showHeader:true
      }
    },
    //课程搜索页面
    {
      path: '/classsearch',
      name: 'classsearch',
      component: () => import('@/pages/classsearch/ClassSearch.vue'),
      meta: {
        showFooter: true,
        showHeader:true
      }
    },
    // 课程学习页面
    {
      path: '/classstudy',
      name: 'classstudy',
      component: () => import('@/pages/classstudy/ClassStudy.vue'),
      meta: {
        showFooter: true,
        showHeader:true
      }
    },
    //我的历史订单页面
    {
      path: '/myorder',
      name: 'myorder',
      component: () => import('@/pages/myorder/MyOrder.vue'),
      meta: {
        showFooter: true,
        showHeader:true
      }
    },
    //订单详情页面
    {
      path: '/myorderdetails',
      name: 'myorderdetails',
      component: () => import('@/pages/myorderdetails/MyOrderDetails.vue'),
      meta: {
        showFooter: true,
        showHeader:true
      }
    },
    // 个人中心页面
    {
      path: '/personalcenter',
      name: 'personalcenter',
      component: () => import('@/pages/personalcenter/PersonalCenter.vue'),
      meta: {
        showFooter: true,
        showHeader:true
      }
    },
    //支付中心(选择支付方式)
    {
      path: '/paycenter',
      name: 'paycenter',
      component: () => import('@/pages/paycenter/PayCenter.vue'),
      meta: {
        showFooter: true,
        showHeader:true
      }
    },
    // 考试测验
    {
      path: '/classexam',
      name: 'classexam',
      component: () => import('@/pages/classexam/ClassExam.vue'),
      meta: {
        showFooter: true,
        showHeader:true
      }
    },
    // 考试答案
    {
      path: '/classexamanswer',
      name: 'classexamanswer',
      component: () => import('@/pages/classexamanswer/ClassExamAnswer.vue'),
      meta: {
        showFooter: true,
        showHeader:true
      }
    },
    // 底部组件
    {
      path: '/tpfooter',
      name: 'tpfooter',
      component: () => import('@/pages/tpfooter/TpFooter.vue')
    },
    //头部导航组件
    {
      path: '/tpheader',
      name: 'tpheader',
      component: () => import('@/pages/tpheader/TpHeader.vue')
    },
    //视频学习页面
    {
      path: '/learnvideo',
      name: 'learnvideo',
      component: () => import('@/pages/learnvideo/LearnVideo.vue'),
      meta: {
        showFooter: false,
        showHeader:false
      }
    },
    //微信支付
    {
      path: '/wechatpay',
      name: 'wechatpay',
      component: () => import('@/pages/wechatpay/WechatPay.vue'),
      meta: {
        showFooter: true,
        showHeader:true
      }
    },
    //学时证明
    {
      path: '/studyingcertificate',
      name: 'studyingcertificate',
      component: () => import('@/pages/studyingcertificate/StudyingCertificate.vue'),
      meta: {
        showFooter: true,
        showHeader:true
      }
    },
    //编辑个人信息
    {
      path: '/editinfo',
      name: 'editinfo',
      component: () => import('@/pages/editinfo/EditInfo.vue'),
      meta: {
        showFooter: true,
        showHeader:true
      }
    },
    //空白页
    {
      path:'/blank',
      name:'blank',
      component: () => import('@/pages/blank/Blank.vue'),
    },
          
    // {
    //     path: '/learningdetails',
    //     name: 'learningdetails',
    //     component: () => import('@/pages/learningdetails/learningdetails.vue')
    //   }

  ]
})
  //全局守卫
router.beforeEach((to, from, next) => {
  // console.log(sessionStorage.getItem('tpid'));
  let model = document.querySelector('#modal-center');
  if (to.path === '/' || to.path === '/classsearch' || to.path === '/classdetails'||to.path === '/blank') {
    next();
  } else if (sessionStorage.getItem('tpid')||store.state.id) {
    // console.log(12323);
    next();
  } else if (model !== null) {
    // console.log('chufa');
    UIkit.modal(model).show();
  } else {
    next({
      path: '/'
    });
  }
});
export default router;