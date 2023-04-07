/**
 * 查询角色[要求]
 * @returns
 */
export interface getUsrRolesPageRequest {
  RoleName: string;
  PageIndex: number;
  PageSize: number;
}
/**
 * 查询角色[响应]
 * @returns
 */
export interface getUsrRolesPageResponse {
  data: getUsrRolesPageResponseData[];
  rowsCount: number;
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  pageCount: number;
  xData: string;
}
interface getUsrRolesPageResponseData {
  id: number;
  name: string;
  ordinal: number;
  pid: number;
  tips: string;
  permissions: string;
}

/**
 * 根据用户ID获取角色树[响应]
 * @returns
 */
export interface getUsrRolesUserIdRolestreeResponse {
  treeData: getUsrRolesUserIdRolestreeTreeNode[];
  checkedIds: number[];
}
interface getUsrRolesUserIdRolestreeTreeNode {
  id: number;
  pid: number;
  name: string;
  checked: boolean;
  children?: number[] | TreeNode[];
}

/**
 * 修改角色[要求]
 * @returns
 */
export interface putUsrRolesIdRequest {
  name: string;
  tips: string;
  ordinal: number;
}

/**
 * 保存角色权限[响应]
 * @returns
 */
export interface putUsrRolesIdPermissionsResponse {
  [index: number]: number;
}

/**
 * 新增角色[要求]
 * @returns
 */
export interface postUsrRolesRequest {
  name: string;
  tips: string;
  ordinal: number;
}
