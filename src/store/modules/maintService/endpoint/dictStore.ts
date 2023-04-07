import { defineStore } from 'pinia';

export const useDictStore = defineStore({
  id: 'dict endpoint',
  state: () => ({
    dicts: null,
  }),
  actions: {
    async fetchDict() {
      const mockDicts = async () => {
        return {};
      };
      this.dicts = await mockDicts();
    },
  },
});
