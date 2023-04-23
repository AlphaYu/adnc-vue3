export interface page<T> {
  pageIndex: number;
  pageSize: number;
  rowsCount?: number;
  totalCount?: number;
  pageCount?: number;
  xData?: T | string;
}
