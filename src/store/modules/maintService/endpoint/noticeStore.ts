import { defineStore } from 'pinia';

export const useNoticeStore = defineStore({
  id: 'notice endpoint',
  state: () => ({
    notices: null,
  }),
  actions: {
    async fetchNotice() {
      const mockNotice = async () => {
        return {};
      };
      this.notices = await mockNotice();
    },
  },
});
