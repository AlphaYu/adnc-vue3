import { defineStore } from 'pinia';
import { TOKEN_NAME } from '@/config/global';
import { store } from '@/store';
import { postAuthSessionRequest } from '@/api/model/usr/accountModel';
import { postAuthSession } from '@/api/services/usr/account';

export const useUserStore = defineStore({
  id: 'user endpoint',
  state: () => ({
    token: localStorage.getItem(TOKEN_NAME) || 'main_token',
  }),
  actions: {
    async login(request: postAuthSessionRequest) {
      const response = await postAuthSession(request);
      if (response.status === 200) {
        this.token = response.data;
        localStorage.setItem(TOKEN_NAME, response.data.token);
      } else {
        throw response;
      }
    },
    async logout() {
      localStorage.removeItem(TOKEN_NAME);
      this.token = '';
    },
  },
});

export function getUserStore() {
  return useUserStore(store);
}
