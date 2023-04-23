import { AxiosResponse } from 'axios';
import { request } from '@/utils/request';
import {
  getUsrMenusMenutreeByRoleIdResponse,
  getUsrMenusResponse,
  getUsrMenusRoutersResponse,
  postUsrMenusRequest,
} from '../../model/usr/menuModel';
import { UriString } from '@/utils/string';

// 菜单管理
const Api = {
  PostUsrMenus: new UriString('post-usr-api-menus'),
  GetUsrMenus: new UriString('get-usr-api-menus'),
  GetUsrMenusRouters: new UriString('get-usr-api-menus-routers'),

  PutUsrMenusById: (id: number) => new UriString(`put-usr-api-menus-${id}`),
  DeleteUsrMenusById: (id: number) => new UriString(`delete-usr-api-menus-${id}`),
  GetUsrMenusMenutreeByRoleId: (roleId: number) => new UriString(`get-usr-api-menus-${roleId}-menutree`),
};

/**
 * 新增菜单
 * @returns
 */
export function postUsrMenus(param: postUsrMenusRequest) {
  return request.post<void>({
    uri: Api.PostUsrMenus,
    data: param,
  });
}
/**
 * 获取菜单树
 * @returns
 */
export function getUsrMenus() {
  return request.get<AxiosResponse<Array<getUsrMenusResponse>>>({
    uri: Api.GetUsrMenus,
  });
}
/**
 * 修改菜单
 * @returns
 */
export function putUsrMenusById(id: number, param: postUsrMenusRequest) {
  return request.put<void>({
    uri: Api.PutUsrMenusById(id),
    data: param,
  });
}
/**
 * 删除菜单
 * @returns
 */
export function deleteUsrMenusById(id: number) {
  return request.delete<void>({
    uri: Api.DeleteUsrMenusById(id),
  });
}
/**
 * 获取侧边栏路由菜单
 * @returns
 */
export function getUsrMenusRouters() {
  return request.get<AxiosResponse<Array<getUsrMenusRoutersResponse>>>({
    uri: Api.GetUsrMenusRouters,
  });
}
/**
 * 根据角色获取菜单树
 * @returns
 */
export function getUsrMenusMenutreeByRoleId(roleId: number) {
  return request.get<AxiosResponse<getUsrMenusMenutreeByRoleIdResponse>>({
    uri: Api.GetUsrMenusMenutreeByRoleId(roleId),
  });
}
