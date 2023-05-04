import { MessagePlugin } from 'tdesign-vue-next';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

import { RouteRecordRaw } from 'vue-router';
import { getPermissionStore, useUsrStore } from '@/store';
import router from '@/router';
import { PAGE_NOT_FOUND_ROUTE } from '@/utils/route/constant';

NProgress.configure({ showSpinner: false });

router.beforeEach(async (to, from, next) => {
  NProgress.start();

  const permissionStore = getPermissionStore();
  const { whiteListRouters } = permissionStore;
  const userStore = useUsrStore().user;
  const { token } = userStore;

  if (token) {
    if (to.path === '/login') {
      next();
      return;
    }
    console.log(token, 'token');

    const { asyncRoutes } = permissionStore;

    if (asyncRoutes && asyncRoutes.length === 0) {
      const routeList = await permissionStore.buildAsyncRoutes();
      console.log(routeList, 'itemitem');

      routeList.forEach((item: RouteRecordRaw) => {
        const route = {
          path: item.path ?? '/',
          redirect: item.redirect ?? '/index',
          name: item.name ?? 'index',
          component: () => item.component,
        } as RouteRecordRaw;
        console.log(route, 'itemitem');
        router.addRoute(route);
      });

      if (to.name === PAGE_NOT_FOUND_ROUTE.name) {
        // 动态添加路由后，此处应当重定向到fullPath，否则会加载404页面内容
        next({ path: to.fullPath, replace: true, query: to.query });
      } else {
        const redirect = decodeURIComponent((from.query.redirect || to.path) as string);
        next(to.path === redirect ? { ...to, replace: true } : { path: redirect });
        return;
      }
    }

    try {
      await userStore.getUserInfo();

      if (router.hasRoute(to.name)) {
        next();
      } else {
        next(`/`);
      }
    } catch (error) {
      MessagePlugin.error(error);
      next({
        path: '/login',
        query: { redirect: encodeURIComponent(to.fullPath) },
      });
      NProgress.done();
    }
  } else {
    /* white list router */
    if (whiteListRouters.indexOf(to.path) !== -1) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: encodeURIComponent(to.fullPath) },
      });
    }
    NProgress.done();
  }
});

router.afterEach((to) => {
  if (to.path === '/login') {
    const userStore = useUsrStore().user;
    const permissionStore = getPermissionStore();

    userStore.logout();
    permissionStore.restoreRoutes();
  }
  NProgress.done();
});
