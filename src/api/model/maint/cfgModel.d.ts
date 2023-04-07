/**
 * 新增配置[要求]
 * @returns
 */
export interface postMaintCfgsRequest {
  description: string;
  name: string;
  value: string;
}

/**
 * 更新配置[要求]
 * @returns
 */
export interface putMaintCfgsIdRequest {
  description: string;
  name: string;
  value: string;
}

/**
 * 获取单个配置节点[响应]
 */
export interface getMaintCfgsIdResponse {
  id: number;
  createBy: number;
  createTime: string;
  modifyBy: number;
  modifyTime: string;
  description: string;
  name: string;
  value: string;
}

/**
 * 获取配置列表[要求]
 */
export interface getMaintCfgsPageParams {
  Name?: string;
  Value?: string;
  PageIndex: number;
  PageSize: number;
}
/**
 * 获取配置列表[响应]
 */
export interface getMaintCfgsPageResponse {
  data: MaintCfgsData[];
  rowsCount: number;
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  pageCount: number;
  xData: string;
}

interface MaintCfgsData {
  id: number;
  createBy: number;
  createTime: string;
  modifyBy: number;
  modifyTime: string;
  description: string;
  name: string;
  value: string;
}
