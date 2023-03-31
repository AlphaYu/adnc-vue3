import { request } from '@/utils/request';
import {
  getUsrUsersCurrentResponse,
  getUsrUsersIdPermissionsRequest,
  getUsrUsersIdPermissionsResponse,
  getUsrUsersPageRequest,
  getUsrUsersPageResponse,
  postUsrUsersRequest,
  putUsrUsersBatchStatusRequest,
  putUsrUsersIdRequest,
  putUsrUsersIdRolesRequest,
  putUsrUsersIdStatusRequest,
} from '../model/usr/userModel';

// 用户管理
const Api = {
  PostUsrUsers: 'post-usr-users',

  PutUsrUsersId: (id: number) => `put-usr-users-${id}`,
  DeleteUsrUsersId: (id: number) => `delete-usr-users-${id}`,
  PutUsrUsersIdRoles: (id: number) => `put-usr-users-${id}-roles`,
  PutUsrUsersIdStatus: (id: number) => `put-usr-users-${id}-status`,
  GetUsrUsersIdPermissions: (id: number) => `get-usr-users-${id}-permissions`,

  PutUsrUsersBatchStatus: 'put-usr-users-batch-status',
  GetUsrUsersPage: 'get-usr-users-page',
  GetUsrUsersCurrent: 'get-usr-users-current',
};

/**
 * 新增用户
 * @returns
 */
export function postUsrUsers(param: postUsrUsersRequest) {
  return request.get<void>({
    url: Api.PostUsrUsers,
    data: param,
  });
}
/**
 * 修改用户
 * @returns
 */
export function putUsrUsersId(id: number, param: putUsrUsersIdRequest) {
  return request.get<object>({
    url: Api.PutUsrUsersId(id),
    data: param,
  });
}
/**
 * 删除用户
 * @returns
 */
export function deleteUsrUsersId(id: number) {
  return request.get<void>({
    url: Api.DeleteUsrUsersId(id),
  });
}
/**
 * 设置用户角色
 * @returns
 */
export function putUsrUsersIdRoles(id: number, param: putUsrUsersIdRolesRequest) {
  return request.get<void>({
    url: Api.PutUsrUsersIdRoles(id),
    data: param,
  });
}
/**
 * 变更用户状态
 * @returns
 */
export function putUsrUsersIdStatus(id: number, param: putUsrUsersIdStatusRequest) {
  return request.get<void>({
    url: Api.PutUsrUsersIdStatus(id),
    data: param,
  });
}
/**
 * 批量变更用户状态
 * @returns
 */
export function putUsrUsersBatchStatus(param: putUsrUsersBatchStatusRequest) {
  return request.get<void>({
    url: Api.PutUsrUsersBatchStatus,
    data: param,
  });
}
/**
 * 获取当前用户是否拥有指定权限
 * @returns
 */
export function getUsrUsersIdPermissions(id: number, param: getUsrUsersIdPermissionsRequest) {
  return request.get<getUsrUsersIdPermissionsResponse>({
    url: Api.GetUsrUsersIdPermissions(id),
    data: param,
  });
}
/**
 * 获取用户分页列表
 * @returns
 */
export function getUsrUsersPage(param: getUsrUsersPageRequest) {
  return request.get<getUsrUsersPageResponse>({
    url: Api.GetUsrUsersPage,
    params: param,
  });
}
/**
 * 获取登录用户个人信息
 * @returns
 */
export function getUsrUsersCurrent() {
  return request.get<getUsrUsersCurrentResponse>({
    url: Api.GetUsrUsersCurrent,
  });
}
