import { defineStore } from 'pinia';

export const useRoleStore = defineStore({
  id: 'role endpoint',
  state: () => ({
    role: null,
  }),
  actions: {
    async fetchRole() {
      const mockRole = async () => {
        return {
          name: 'td_dev',
          roles: ['UserIndex', 'DashboardBase', 'login'], // 前端权限模型使用 如果使用请配置modules/permission-fe.ts使用
        };
      };
      this.role = await mockRole();
    },
  },
});
