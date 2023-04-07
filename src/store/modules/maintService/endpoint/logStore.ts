import { defineStore } from 'pinia';

export const useLogStore = defineStore({
  id: 'log endpoint',
  state: () => ({
    logs: null,
  }),
  actions: {
    async fetchLog() {
      const mockLogs = async () => {
        return {};
      };
      this.menu = await mockLogs();
    },
  },
});
