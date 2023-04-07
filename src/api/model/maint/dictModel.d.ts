/**
 * 新增字典[要求]
 * @returns
 */
export interface postMaintDictsRequest {
  name: string;
  value: string;
  ordinal: number;
  children: string[];
}

/**
 * 获取字典列表[要求]
 * @returns
 */
export interface getMaintDictsParams {
  Ids: number[];
  Name: string;
  Value: string;
}
/**
 * 获取字典列表[响应] 返回值为数组，可以使用 Request[] 或 Array&lt;Request&gt;
 * @returns
 */
export interface getMaintDictsResponse {
  id: number;
  name: string;
  ordinal: number;
  pid: number;
  value: string;
  children: string[];
}

/**
 * 修改字典[要求]
 * @returns
 */
export interface putMaintDictsIdRequest {
  name: string;
  value: string;
  ordinal: number;
  children?: putMaintDictsIdRequest[] | string[];
}

/**
 * 获取单个字典数据[响应]
 * @returns
 */
export interface getMaintDictsIdResponse {
  id: number;
  name: string;
  ordinal: number;
  pid: number;
  value: string;
  children: string[];
}
