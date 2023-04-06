import { defineStore } from 'pinia';

export const useMenuStore = defineStore({
  id: 'menu endpoint',
  state: () => ({
    menu: null,
  }),
  actions: {
    async fetchMenu() {
      const mockMenu = async () => {
        return {
          name: 'td_dev',
          roles: ['1', '2', '3'],
        };
      };
      this.menu = await mockMenu();
    },
  },
});
