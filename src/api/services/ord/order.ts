import { AxiosResponse } from 'axios';
import { request } from '@/utils/request';
import { UriString, toQueryFormat } from '@/utils/string';
import {
  getOrdOrdersIdResponse,
  getOrdOrdersPageParams,
  getOrdOrdersPageResponse,
  postOrdOrdersRequest,
  postOrdOrdersResponse,
} from '@/api/model/ord/ords';

// 订单管理
const Api = {
  PostOrdOrders: new UriString('post-ord-orders'),

  PutOrdOrdersIdPayment: (id: number) => new UriString(`put-ord-orders-${id}-payment`),
  PutOrdOrdersIdStatusCanceler: (id: number) => new UriString(`put-ord-orders-${id}-status-canceler`),
  DeleteOrdOrdersId: (id: number) => new UriString(`delete-ord-orders-${id}`),
  GetOrdOrdersId: (id: number) => new UriString(`get-ord-orders-${id}`),
  GetOrdOrdersPage: (param: string) => new UriString(`get-ord-orders-page${param}`),
};
/**
 * 新建订单
 * @returns
 */
export function postOrdOrders(param: postOrdOrdersRequest) {
  return request.post<AxiosResponse<postOrdOrdersResponse>>({
    uri: Api.PostOrdOrders,
    data: param,
  });
}

/**
 * 订单付款
 * @returns
 */
export function putOrdOrdersIdPayment(id: number) {
  return request.post<AxiosResponse<void>>({
    uri: Api.PutOrdOrdersIdPayment(id),
  });
}

/**
 * 订单取消
 * @returns
 */
export function putOrdOrdersIdStatusCanceler(id: number) {
  return request.post<AxiosResponse<void>>({
    uri: Api.PutOrdOrdersIdStatusCanceler(id),
  });
}

/**
 * 订单删除
 * @returns
 */
export function deleteOrdOrdersId(id: number) {
  return request.post<AxiosResponse<void>>({
    uri: Api.DeleteOrdOrdersId(id),
  });
}

/**
 * 订单详情
 * @returns
 */
export function getOrdOrdersId(id: number) {
  return request.post<AxiosResponse<getOrdOrdersIdResponse>>({
    uri: Api.GetOrdOrdersId(id),
  });
}

/**
 * 订单分页列表
 * @returns
 */
export function getOrdOrdersPage(param: getOrdOrdersPageParams) {
  return request.post<AxiosResponse<getOrdOrdersPageResponse>>({
    uri: Api.GetOrdOrdersPage(toQueryFormat(param)),
  });
}
