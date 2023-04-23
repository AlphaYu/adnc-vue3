import { AxiosResponse } from 'axios';
import { request } from '@/utils/request';
import { UriString, toQueryFormat } from '@/utils/string';
import {
  getMaintLoginlogsParams,
  getMaintLoginlogsResponse,
  getMaintNloglogsParams,
  getMaintNloglogsResponse,
  getMaintOpslogsParams,
  getMaintOpslogsResponse,
  getMaintUsersOpslogsParams,
  getMaintUsersOpslogsResponse,
} from '@/api/model/maint/logModel';

// 日志管理
const Api = {
  GetMaintOpslogs: (params: string) => new UriString(`get-maint-api-opslogs${params}`),
  GetMaintUsersOpslogs: (params: string) => new UriString(`get-maint-api-users-opslogs${params}`),
  GetMaintLoginlogs: (params: string) => new UriString(`get-maint-api-loginlogs${params}`),
  GetMaintNloglogs: (params: string) => new UriString(`get-maint-api-nloglogs${params}`),
};
/**
 * 查询操作日志
 * @returns
 */
export function getMaintOpslogs(param: getMaintOpslogsParams) {
  return request.get<AxiosResponse<getMaintOpslogsResponse>>({
    uri: Api.GetMaintOpslogs(toQueryFormat(param)),
  });
}
/**
 * 查询用户操作日志
 * @returns
 */
export function getMaintUsersOpslogs(param: getMaintUsersOpslogsParams) {
  return request.get<AxiosResponse<getMaintUsersOpslogsResponse>>({
    uri: Api.GetMaintUsersOpslogs(toQueryFormat(param)),
  });
}
/**
 * 查询登录日志
 * @returns
 */
export function getMaintLoginlogs(param: getMaintLoginlogsParams) {
  return request.get<AxiosResponse<getMaintLoginlogsResponse>>({
    uri: Api.GetMaintLoginlogs(toQueryFormat(param)),
  });
}
/**
 * 查询Nlog日志
 * @returns
 */
export function getMaintNloglogs(param: getMaintNloglogsParams) {
  return request.get<AxiosResponse<getMaintNloglogsResponse>>({
    uri: Api.GetMaintNloglogs(toQueryFormat(param)),
  });
}
