import { AxiosResponse } from 'axios';
import { request } from '@/utils/request';
import { UriString } from '@/utils/string';

// 日志管理
const Api = {
  GetMaintOpslogs: new UriString('get-maint-opslogs'),
  GetMaintUsersOpslogs: new UriString('get-maint-users-opslogs'),
  GetMaintLoginlogs: new UriString('get-maint-loginlogs'),
  GetMaintNloglogs: new UriString('get-maint-nloglogs'),
};
/**
 * 查询操作日志
 * @returns
 */
export function getMaintOpslogs() {
  return request.get<AxiosResponse<object>>({
    uri: Api.GetMaintOpslogs,
  });
}
/**
 * 查询用户操作日志
 * @returns
 */
export function getMaintUsersOpslogs() {
  return request.get<AxiosResponse<object>>({
    uri: Api.GetMaintUsersOpslogs,
  });
}
/**
 * 查询登录日志
 * @returns
 */
export function getMaintLoginlogs() {
  return request.get<AxiosResponse<object>>({
    uri: Api.GetMaintLoginlogs,
  });
}
/**
 * 查询Nlog日志
 * @returns
 */
export function getMaintNloglogs() {
  return request.get<AxiosResponse<object>>({
    uri: Api.GetMaintNloglogs,
  });
}
