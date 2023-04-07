import { defineStore } from 'pinia';

export const useCfgStore = defineStore({
  id: 'cfg endpoint',
  state: () => ({
    cfgs: null,
  }),
  actions: {
    async fetchCfgs() {
      const mockCfgs = async () => {
        return {};
      };
      this.cfgs = await mockCfgs();
    },
  },
});
