import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import fangdong from '@/views/modules/fangdong/list'
    import fangwu from '@/views/modules/fangwu/list'
    import fangwuCollection from '@/views/modules/fangwuCollection/list'
    import fangwuCommentback from '@/views/modules/fangwuCommentback/list'
    import fangwuOrder from '@/views/modules/fangwuOrder/list'
    import forum from '@/views/modules/forum/list'
    import gonggao from '@/views/modules/gonggao/list'
    import gongsi from '@/views/modules/gongsi/list'
    import jianli from '@/views/modules/jianli/list'
    import toudi from '@/views/modules/toudi/list'
    import yonghu from '@/views/modules/yonghu/list'
    import zhaopin from '@/views/modules/zhaopin/list'
    import zhaopinCollection from '@/views/modules/zhaopinCollection/list'
    import zhaopinLiuyan from '@/views/modules/zhaopinLiuyan/list'
    import config from '@/views/modules/config/list'
    import dictionaryFangwu from '@/views/modules/dictionaryFangwu/list'
    import dictionaryFangwuCollection from '@/views/modules/dictionaryFangwuCollection/list'
    import dictionaryFangwuOrder from '@/views/modules/dictionaryFangwuOrder/list'
    import dictionaryForum from '@/views/modules/dictionaryForum/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryGongsi from '@/views/modules/dictionaryGongsi/list'
    import dictionaryJianli from '@/views/modules/dictionaryJianli/list'
    import dictionaryLeixing from '@/views/modules/dictionaryLeixing/list'
    import dictionaryMianshiYesno from '@/views/modules/dictionaryMianshiYesno/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryZhaopin from '@/views/modules/dictionaryZhaopin/list'
    import dictionaryZhaopinCollection from '@/views/modules/dictionaryZhaopinCollection/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryFangwu',
        name: '房屋类型',
        component: dictionaryFangwu
    }
    ,{
        path: '/dictionaryFangwuCollection',
        name: '收藏表类型',
        component: dictionaryFangwuCollection
    }
    ,{
        path: '/dictionaryFangwuOrder',
        name: '订单类型',
        component: dictionaryFangwuOrder
    }
    ,{
        path: '/dictionaryForum',
        name: '帖子类型',
        component: dictionaryForum
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryGonggao',
        name: '平台资讯类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryGongsi',
        name: '企业类型',
        component: dictionaryGongsi
    }
    ,{
        path: '/dictionaryJianli',
        name: '求职意向',
        component: dictionaryJianli
    }
    ,{
        path: '/dictionaryLeixing',
        name: '招聘类型',
        component: dictionaryLeixing
    }
    ,{
        path: '/dictionaryMianshiYesno',
        name: '投递状态',
        component: dictionaryMianshiYesno
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryZhaopin',
        name: '招聘岗位',
        component: dictionaryZhaopin
    }
    ,{
        path: '/dictionaryZhaopinCollection',
        name: '收藏表类型',
        component: dictionaryZhaopinCollection
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/fangdong',
        name: '房东',
        component: fangdong
      }
    ,{
        path: '/fangwu',
        name: '房屋',
        component: fangwu
      }
    ,{
        path: '/fangwuCollection',
        name: '房屋收藏',
        component: fangwuCollection
      }
    ,{
        path: '/fangwuCommentback',
        name: '房屋评价',
        component: fangwuCommentback
      }
    ,{
        path: '/fangwuOrder',
        name: '房屋订单',
        component: fangwuOrder
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/gonggao',
        name: '平台资讯',
        component: gonggao
      }
    ,{
        path: '/gongsi',
        name: '企业',
        component: gongsi
      }
    ,{
        path: '/jianli',
        name: '简历',
        component: jianli
      }
    ,{
        path: '/toudi',
        name: '简历投递',
        component: toudi
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/zhaopin',
        name: '职位招聘',
        component: zhaopin
      }
    ,{
        path: '/zhaopinCollection',
        name: '职位收藏',
        component: zhaopinCollection
      }
    ,{
        path: '/zhaopinLiuyan',
        name: '职位留言',
        component: zhaopinLiuyan
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
