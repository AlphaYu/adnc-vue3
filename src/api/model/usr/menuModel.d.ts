/**
 * 新增菜单[要求]
 * @returns
 */
export interface postUsrMenusRequest {
  code: string;
  component: string;
  hidden: boolean;
  icon: string;
  isMenu: boolean;
  isOpen: boolean;
  levels: number;
  name: string;
  ordinal: number;
  pCode: string;
  pCodes: string;
  status: boolean;
  tips: string;
  url: string;
}

/**
 * 获取菜单树接口的返回值为数组，可以使用 Request[] 或 Array&lt;Request&gt;
 * @returns
 */
export interface getUsrMenusResponse {
  id: number;
  parentId: number;
  name: string;
  levels: number;
  isMenu: boolean;
  isMenuName: string;
  status: number;
  statusName: string;
  ordinal: number;
  url: string;
  path: string;
  icon: string;
  code: string;
  pCode: string;
  component: string;
  hidden: boolean;
  children?: string[] | getUsrMenusResponse[];
}

/**
 * 修改菜单[要求]
 * @returns
 */
export interface putUsrMenusByIdRequest {
  code: string;
  component: string;
  hidden: boolean;
  icon: string;
  isMenu: boolean;
  isOpen?: boolean;
  levels: number;
  name: string;
  ordinal: number;
  pCode: string;
  pCodes: string;
  status: boolean;
  tips?: string;
  url: string;
}

/**
 * 获取侧边栏路由菜单[响应] 返回值为数组，可以使用 Request[] 或 Array&lt;Request&gt;
 * @returns
 */
export interface getUsrMenusRoutersResponse {
  id: number;
  parentId: number;
  code: string;
  pCode: string;
  path: string;
  component: string;
  name: string;
  ordinal: number;
  hidden: boolean;
  meta: {
    title: string;
    icon: string;
  };
  children?: string[] | getUsrMenusRoutersResponse[];
}

/**
 * 根据角色获取菜单树[响应]
 * @returns
 */
export interface getUsrMenusMenutreeByRoleIdResponse {
  id: number;
  pid: number;
  name: string;
  checked: boolean;
  children?: string[] | roleMenuTreeData[];
}
interface roleMenuTreeData {
  treeData: MyObject[];
  checkedIds: number[];
}
