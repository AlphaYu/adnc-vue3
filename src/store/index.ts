import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';

const store = createPinia();
store.use(createPersistedState());

export { store };

export * from './modules/notification';
export * from './modules/permission';
export * from './modules/setting';
export * from './modules/tabs-router';

// service
export * from './modules/usrService/usrStore';
export default store;
