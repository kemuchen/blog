export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
      {
        component: '404',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    // Routes: ['src/pages/Authorized'],
    routes: [
      // home
      { path: '/', redirect: '/home'},
      {
        path: '/home',
        name: 'home',
        component: './Home/Home',
      },
      // blog
      {
        path: '/blog',
        icon: 'form',
        component: './Forms/AdvancedForm',
      },
      // www
      {
        path: '/website',
        name: 'website',
        routes: [
          {
            path: '/website/Java',
            name: 'Java',
            component: './List/TableList',
          },
          {
            path: '/website/CSS3|HTML5',
            name: 'css3',
            component: './List/BasicList',
          },
          {
            path: '/website/ant design',
            name: 'ant design',
            component: './List/CardList',
          }
        ],
      },
      {
        path: '/read',
        name: 'read',
        component: './Profile/AdvancedProfile',
      },
      {
        name: 'about',
        path: '/about',
        component: './Result/Success',
      },
      {
        name: 'timeline',
        path: '/timeline',
        component: './Dashboard/Monitor',
      },
      {
        name: 'guid',
        path: '/guid',
        component: './Dashboard/Workplace',
      },
      {
        name: 'message',
        path: '/message',
        component: './NewPage/NewPage',
      },
      {
        path: '/account',
        routes: [
          {
            path: '/account/center',
            name: 'center',
            component: './Account/Center/Center',
            routes: [
              {
                path: '/account/center',
                redirect: '/account/center/articles',
              },
              {
                path: '/account/center/articles',
                component: './Account/Center/Articles',
              },
              {
                path: '/account/center/applications',
                component: './Account/Center/Applications',
              },
              {
                path: '/account/center/projects',
                component: './Account/Center/Projects',
              },
            ],
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: './Account/Settings/Info',
            routes: [
              {
                path: '/account/settings',
                redirect: '/account/settings/base',
              },
              {
                path: '/account/settings/base',
                component: './Account/Settings/BaseView',
              },
              {
                path: '/account/settings/security',
                component: './Account/Settings/SecurityView',
              },
              {
                path: '/account/settings/binding',
                component: './Account/Settings/BindingView',
              },
              {
                path: '/account/settings/notification',
                component: './Account/Settings/NotificationView',
              },
            ],
          },
        ],
      },
      {
        component: '404',
      }
    ],
  },
];
