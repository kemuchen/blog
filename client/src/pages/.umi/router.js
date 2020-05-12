import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import RendererWrapper0 from 'D:/Program Tools/framework/frameowrk/client/src/pages/.umi/LocaleWrapper.jsx';
import { routerRedux, dynamic as _dvaDynamic } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/user',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__UserLayout" */ '../../layouts/UserLayout'),
          LoadingComponent: require('D:/Program Tools/framework/frameowrk/client/src/components/framework/PageLoading/index')
            .default,
        })
      : require('../../layouts/UserLayout').default,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__framework__login" */ '../framework/login'),
              LoadingComponent: require('D:/Program Tools/framework/frameowrk/client/src/components/framework/PageLoading/index')
                .default,
            })
          : require('../framework/login').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('D:/Program Tools/framework/frameowrk/client/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__SecurityLayout" */ '../../layouts/SecurityLayout'),
          LoadingComponent: require('D:/Program Tools/framework/frameowrk/client/src/components/framework/PageLoading/index')
            .default,
        })
      : require('../../layouts/SecurityLayout').default,
    routes: [
      {
        path: '/',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "layouts__BasicLayout" */ '../../layouts/BasicLayout'),
              LoadingComponent: require('D:/Program Tools/framework/frameowrk/client/src/components/framework/PageLoading/index')
                .default,
            })
          : require('../../layouts/BasicLayout').default,
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/',
            redirect: '/home',
            exact: true,
          },
          {
            path: '/home',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Center__model.js' */ 'D:/Program Tools/framework/frameowrk/client/src/pages/Center/model.js').then(
                      m => {
                        return { namespace: 'model', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Center" */ '../Center'),
                  LoadingComponent: require('D:/Program Tools/framework/frameowrk/client/src/components/framework/PageLoading/index')
                    .default,
                })
              : require('../Center').default,
            exact: true,
          },
          {
            path: '/system/user',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__system__user" */ '../system/user'),
                  LoadingComponent: require('D:/Program Tools/framework/frameowrk/client/src/components/framework/PageLoading/index')
                    .default,
                })
              : require('../system/user').default,
            exact: true,
          },
          {
            path: '/component/draggable',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__component__DraggableTag__model.js' */ 'D:/Program Tools/framework/frameowrk/client/src/pages/component/DraggableTag/model.js').then(
                      m => {
                        return { namespace: 'model', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__component__DraggableTag" */ '../component/DraggableTag'),
                  LoadingComponent: require('D:/Program Tools/framework/frameowrk/client/src/components/framework/PageLoading/index')
                    .default,
                })
              : require('../component/DraggableTag').default,
            exact: true,
          },
          {
            path: '/component/supertree',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__component__SuperTree" */ '../component/SuperTree'),
                  LoadingComponent: require('D:/Program Tools/framework/frameowrk/client/src/components/framework/PageLoading/index')
                    .default,
                })
              : require('../component/SuperTree').default,
            exact: true,
          },
          {
            path: '/component/rightclicktree',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__component__RightClickTree" */ '../component/RightClickTree'),
                  LoadingComponent: require('D:/Program Tools/framework/frameowrk/client/src/components/framework/PageLoading/index')
                    .default,
                })
              : require('../component/RightClickTree').default,
            exact: true,
          },
          {
            path: '/component/searchtree',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__component__SearchTree" */ '../component/SearchTree'),
                  LoadingComponent: require('D:/Program Tools/framework/frameowrk/client/src/components/framework/PageLoading/index')
                    .default,
                })
              : require('../component/SearchTree').default,
            exact: true,
          },
          {
            path: '/component/select',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__component__Select__model.js' */ 'D:/Program Tools/framework/frameowrk/client/src/pages/component/Select/model.js').then(
                      m => {
                        return { namespace: 'model', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__component__Select" */ '../component/Select'),
                  LoadingComponent: require('D:/Program Tools/framework/frameowrk/client/src/components/framework/PageLoading/index')
                    .default,
                })
              : require('../component/Select').default,
            exact: true,
          },
          {
            path: '/component/brafteditor',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__component__BraftEditor" */ '../component/BraftEditor'),
                  LoadingComponent: require('D:/Program Tools/framework/frameowrk/client/src/components/framework/PageLoading/index')
                    .default,
                })
              : require('../component/BraftEditor').default,
            exact: true,
          },
          {
            name: '个人中心',
            icon: 'smile',
            path: '/center',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Center__model.js' */ 'D:/Program Tools/framework/frameowrk/client/src/pages/Center/model.js').then(
                      m => {
                        return { namespace: 'model', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Center" */ '../Center'),
                  LoadingComponent: require('D:/Program Tools/framework/frameowrk/client/src/components/framework/PageLoading/index')
                    .default,
                })
              : require('../Center').default,
            exact: true,
          },
          {
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__framework__404" */ '../framework/404'),
                  LoadingComponent: require('D:/Program Tools/framework/frameowrk/client/src/components/framework/PageLoading/index')
                    .default,
                })
              : require('../framework/404').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('D:/Program Tools/framework/frameowrk/client/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__framework__404" */ '../framework/404'),
              LoadingComponent: require('D:/Program Tools/framework/frameowrk/client/src/components/framework/PageLoading/index')
                .default,
            })
          : require('../framework/404').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('D:/Program Tools/framework/frameowrk/client/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "p__framework__404" */ '../framework/404'),
          LoadingComponent: require('D:/Program Tools/framework/frameowrk/client/src/components/framework/PageLoading/index')
            .default,
        })
      : require('../framework/404').default,
    exact: true,
  },
  {
    component: () =>
      React.createElement(
        require('D:/Program Tools/framework/frameowrk/client/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
