import { defineStore } from 'pinia';
import { RouteRecordRaw } from 'vue-router';
import router, { fixedRouterList, homepageRouterList } from '@/router';
import { store } from '@/store';
import { getUsrMenus } from '@/api/services/usr/menu';
import { transformObjectToRoute } from '@/utils/route';
import { getUsrMenusResponse } from '@/api/model/usr/menuModel';

export const usePermissionStore = defineStore('permission', {
  state: () => ({
    whiteListRouters: ['/login'],
    routers: [],
    removeRoutes: [],
    asyncRoutes: [],
  }),
  actions: {
    async initRoutes() {
      const accessedRouters = this.asyncRoutes;

      // 在菜单展示全部路由
      this.routers = [...homepageRouterList, ...accessedRouters, ...fixedRouterList];
      // 在菜单只展示动态路由和首页
      // this.routers = [...homepageRouterList, ...accessedRouters];
      // 在菜单只展示动态路由
      // this.routers = [...accessedRouters];
    },
    async buildAsyncRoutes() {
      try {
        // 发起菜单权限请求 获取菜单列表
        const asyncRoutes: Array<getUsrMenusResponse> = (await getUsrMenus()).data;
        this.asyncRoutes = transformObjectToRoute(asyncRoutes);
        console.log(asyncRoutes, 'asyncRoutes');
        await this.initRoutes();
        return this.asyncRoutes;
      } catch (error) {
        throw new Error("Can't build routes");
      }
    },
    async restoreRoutes() {
      this.removeRoutes.forEach((item: RouteRecordRaw) => {
        router.addRoute(item);
      });
    },
  },
});

export function getPermissionStore() {
  return usePermissionStore(store);
}
