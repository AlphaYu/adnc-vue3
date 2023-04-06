import { AxiosResponse } from 'axios';
import { request } from '@/utils/request';
import { UriString } from '@/utils/string';

// 配置管理
const Api = {
  PostMaintCfgs: new UriString('post-maint-cfgs'),
  PutMaintCfgsId: new UriString('put-maint-cfgs-id'),
  DeleteMaintCfgsId: new UriString('delete-maint-cfgs-id'),
  GetMaintCfgsId: new UriString('get-maint-cfgs-id'),
  GetMaintCfgsPage: new UriString('get-maint-cfgs-page'),
};
/**
 * 新增配置
 * @returns
 */
export function postMaintCfgs() {
  return request.post<AxiosResponse<object>>({
    uri: Api.PostMaintCfgs,
  });
}
/**
 * 更新配置
 * @returns
 */
export function putMaintCfgsId() {
  return request.put<AxiosResponse<object>>({
    uri: Api.PutMaintCfgsId,
  });
}
/**
 * 删除配置节点
 * @returns
 */
export function deleteMaintCfgsId() {
  return request.delete<AxiosResponse<object>>({
    uri: Api.DeleteMaintCfgsId,
  });
}
/**
 * 获取单个配置节点
 * @returns
 */
export function getMaintCfgsId() {
  return request.get<AxiosResponse<object>>({
    uri: Api.GetMaintCfgsId,
  });
}
/**
 * 获取配置列表
 * @returns
 */
export function getMaintCfgsPage() {
  return request.get<AxiosResponse<object>>({
    uri: Api.GetMaintCfgsPage,
  });
}
