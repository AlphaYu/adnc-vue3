import { page } from '../pageModel';
/**
 * 新建订单[要求]
 * @returns
 */
export interface postOrdOrdersRequest {
  customerId: number;
  remark: string;
  deliveryInformation: {
    name: string;
    phone: string;
    address: string;
  };
  items: {
    productId: number;
    count: number;
  }[];
}

/**
 * 新建订单[响应]
 * @returns
 */
export type postOrdOrdersResponse = getOrdOrdersIdResponse;

/**
 * 订单详情[响应]
 * @returns
 */
export interface getOrdOrdersIdResponse {
  id: number;
  createBy: number;
  createTime: string;
  customerId: number;
  amount: number;
  remark: string;
  statusCode: number;
  statusName: string;
  statusChangesReason: string;
  receiverName: string;
  receiverPhone: string;
  receiverAddress: string;
  items: {
    id: number;
    orderId: string;
    count: number;
    productId: number;
    productName: string;
    productPrice: number;
  }[];
}

/**
 * 订单分页列表[要求]
 * @returns
 */
export interface getOrdOrdersPageParams {
  Id: number;
  PageIndex: number;
  PageSize: number;
}
/**
 * 订单分页列表[响应]
 * @returns
 */
export interface getOrdOrdersPageResponse extends page<string> {
  data: Order[];
  rowsCount: number;
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  pageCount: number;
  xData: string;
}

interface OrderItem {
  id: number;
  orderId: string;
  count: number;
  productId: number;
  productName: string;
  productPrice: number;
}

interface Order {
  id: number;
  createBy: number;
  createTime: string;
  customerId: number;
  amount: number;
  remark: string;
  statusCode: number;
  statusName: string;
  statusChangesReason: string;
  receiverName: string;
  receiverPhone: string;
  receiverAddress: string;
  items: OrderItem[];
}
