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
    Routes: ['src/pages/Authorized'],
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
        name: 'blog',
        component: './BlogDiary/BlogDiary',
      },
      {
        path: '/read',
        name: 'read',
        component: './Read/Read',
      },
      {
        name: 'about',
        path: '/about',
        component: './About/About',
      },
      {
        name: 'timeline',
        path: '/timeline',
        component: './TimeAxle/TimeAxle',
      },
      {
        name: 'guid',
        path: '/guid',
        component: './Guid/Guid',
      },
      {
        name: 'message',
        path: '/message',
        component: './Message/Message',
      },
      {
        component: '404',
      }
    ],
  },
];
