import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from 'D:/Java/workspace/GitHub/blog/client/src/pages/.umi/LocaleWrapper.jsx'
import _dvaDynamic from 'dva/dynamic'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/user",
    "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__UserLayout" */'../../layouts/UserLayout'),
  LoadingComponent: require('D:/Java/workspace/GitHub/blog/client/src/components/PageLoading/index').default,
}),
    "routes": [
      {
        "path": "/user",
        "redirect": "/user/login",
        "exact": true
      },
      {
        "path": "/user/login",
        "name": "login",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__User__models__register.js' */'D:/Java/workspace/GitHub/blog/client/src/pages/User/models/register.js').then(m => { return { namespace: 'register',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__User__Login" */'../User/Login'),
  LoadingComponent: require('D:/Java/workspace/GitHub/blog/client/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/user/register",
        "name": "register",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__User__models__register.js' */'D:/Java/workspace/GitHub/blog/client/src/pages/User/models/register.js').then(m => { return { namespace: 'register',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__User__Register" */'../User/Register'),
  LoadingComponent: require('D:/Java/workspace/GitHub/blog/client/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/user/register-result",
        "name": "register.result",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__User__models__register.js' */'D:/Java/workspace/GitHub/blog/client/src/pages/User/models/register.js').then(m => { return { namespace: 'register',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__User__RegisterResult" */'../User/RegisterResult'),
  LoadingComponent: require('D:/Java/workspace/GitHub/blog/client/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__404" */'../404'),
  LoadingComponent: require('D:/Java/workspace/GitHub/blog/client/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "component": () => React.createElement(require('D:/Java/workspace/GitHub/blog/client/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "path": "/",
    "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../../layouts/BasicLayout'),
  LoadingComponent: require('D:/Java/workspace/GitHub/blog/client/src/components/PageLoading/index').default,
}),
    "Routes": [require('../Authorized').default],
    "routes": [
      {
        "path": "/",
        "redirect": "/home",
        "exact": true
      },
      {
        "path": "/home",
        "name": "home",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Home__models__home.js' */'D:/Java/workspace/GitHub/blog/client/src/pages/Home/models/home.js').then(m => { return { namespace: 'home',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Home__Home" */'../Home/Home'),
  LoadingComponent: require('D:/Java/workspace/GitHub/blog/client/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/blog",
        "name": "blog",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__BlogDiary__models__blogDiary.js' */'D:/Java/workspace/GitHub/blog/client/src/pages/BlogDiary/models/blogDiary.js').then(m => { return { namespace: 'blogDiary',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__BlogDiary__BlogDiary" */'../BlogDiary/BlogDiary'),
  LoadingComponent: require('D:/Java/workspace/GitHub/blog/client/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/read",
        "name": "read",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Read__models__read.js' */'D:/Java/workspace/GitHub/blog/client/src/pages/Read/models/read.js').then(m => { return { namespace: 'read',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Read__Read" */'../Read/Read'),
  LoadingComponent: require('D:/Java/workspace/GitHub/blog/client/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "name": "about",
        "path": "/about",
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__About__About" */'../About/About'),
  LoadingComponent: require('D:/Java/workspace/GitHub/blog/client/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "name": "timeline",
        "path": "/timeline",
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__TimeAxle__TimeAxle" */'../TimeAxle/TimeAxle'),
  LoadingComponent: require('D:/Java/workspace/GitHub/blog/client/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "name": "guid",
        "path": "/guid",
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__Guid__Guid" */'../Guid/Guid'),
  LoadingComponent: require('D:/Java/workspace/GitHub/blog/client/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "name": "message",
        "path": "/message",
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__Message__Message" */'../Message/Message'),
  LoadingComponent: require('D:/Java/workspace/GitHub/blog/client/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__404" */'../404'),
  LoadingComponent: require('D:/Java/workspace/GitHub/blog/client/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "component": () => React.createElement(require('D:/Java/workspace/GitHub/blog/client/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('D:/Java/workspace/GitHub/blog/client/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<RendererWrapper0>
          <Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
  );
}
