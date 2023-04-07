import { AxiosResponse } from 'axios';
import { request } from '@/utils/request';
import {
  getUsrRolesPageRequest,
  getUsrRolesPageResponse,
  getUsrRolesUserIdRolestreeResponse,
  postUsrRolesRequest,
  putUsrRolesIdPermissionsResponse,
  putUsrRolesIdRequest,
} from '../../model/usr/roleModel';
import { UriString } from '@/utils/string';

// 角色管理
const Api = {
  PostUsrRoles: new UriString('post-usr-roles'),
  GetUsrRolesPage: new UriString('get-usr-roles-page'),

  PutUsrRolesId: (id: number) => new UriString(`put-usr-roles-${id}`),
  DeleteUsrRolesId: (id: number) => new UriString(`delete-usr-roles-${id}`),
  PutUsrRolesIdPermissions: (id: number) => new UriString(`put-usr-roles-${id}-permissons`),
  GetUsrRolesUserIdRolestree: (userId: number) => new UriString(`get-usr-roles-${userId}-rolestree`),
};

/**
 * 查询角色
 * @returns
 */
export function getUsrRolesPage(param: getUsrRolesPageRequest) {
  return request.get<AxiosResponse<getUsrRolesPageResponse>>({
    uri: Api.GetUsrRolesPage,
    data: param,
  });
}
/**
 * 根据用户ID获取角色树
 * @returns
 */
export function getUsrRolesUserIdRolestree(userId: number) {
  return request.get<AxiosResponse<getUsrRolesUserIdRolestreeResponse>>({
    uri: Api.GetUsrRolesUserIdRolestree(userId),
  });
}
/**
 * 删除角色
 * @returns
 */
export function deleteUsrRolesId(id: number) {
  return request.delete<void>({
    uri: Api.DeleteUsrRolesId(id),
  });
}
/**
 * 修改角色
 * @returns
 */
export function putUsrRolesId(id: number, param: putUsrRolesIdRequest) {
  return request.put<void>({
    uri: Api.PutUsrRolesId(id),
    data: param,
  });
}
/**
 * 保存角色权限
 * @returns
 */
export function putUsrRolesIdPermissions(id: number) {
  return request.put<AxiosResponse<putUsrRolesIdPermissionsResponse>>({
    uri: Api.PutUsrRolesIdPermissions(id),
  });
}
/**
 * 新增角色
 * @returns
 */
export function postUsrRoles(param: postUsrRolesRequest) {
  return request.post<void>({
    uri: Api.PostUsrRoles,
    data: param,
  });
}
