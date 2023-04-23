import { AxiosResponse } from 'axios';
import { request } from '@/utils/request';
import { UriString, toQueryFormat } from '@/utils/string';
import {
  getMaintCfgsIdResponse,
  getMaintCfgsPageParams,
  getMaintCfgsPageResponse,
  postMaintCfgsRequest,
  putMaintCfgsIdRequest,
} from '@/api/model/maint/cfgModel';

// 配置管理
const Api = {
  PostMaintCfgs: new UriString('post-maint-api-cfgs'),

  PutMaintCfgsId: (id: number) => new UriString(`put-maint-api-cfgs-${id}`),
  DeleteMaintCfgsId: (id: number) => new UriString(`delete-maint-api-cfgs-${id}`),
  GetMaintCfgsId: (id: number) => new UriString(`get-maint-api-cfgs-${id}`),
  GetMaintCfgsPage: (params: string) => new UriString(`get-maint-api-cfgs-page${params}`),
};

/**
 * 新增配置
 * @returns
 */
export function postMaintCfgs(param: postMaintCfgsRequest) {
  return request.post<AxiosResponse<void>>({
    uri: Api.PostMaintCfgs,
    data: param,
  });
}

/**
 * 更新配置
 * @returns
 */
export function putMaintCfgsId(id: number, param: putMaintCfgsIdRequest) {
  return request.put<AxiosResponse<void>>({
    uri: Api.PutMaintCfgsId(id),
    data: param,
  });
}

/**
 * 删除配置节点
 * @returns
 */
export function deleteMaintCfgsId(id: number) {
  return request.delete<AxiosResponse<void>>({
    uri: Api.DeleteMaintCfgsId(id),
  });
}

/**
 * 获取单个配置节点
 * @returns
 */
export function getMaintCfgsId(id: number) {
  return request.get<AxiosResponse<getMaintCfgsIdResponse>>({
    uri: Api.GetMaintCfgsId(id),
  });
}

/**
 * 获取配置列表
 * @returns
 */
export function getMaintCfgsPage(params: getMaintCfgsPageParams) {
  return request.get<AxiosResponse<getMaintCfgsPageResponse>>({
    uri: Api.GetMaintCfgsPage(toQueryFormat(params)),
  });
}
