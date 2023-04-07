import { UriExtension } from '@/api/model/uriModel';
// export const toUri = (str: string): UriExtension => {};

export class UriString {
  private value: string;

  constructor(value: string) {
    this.value = value;
  }

  toUriFormat(): UriExtension {
    const segments = this.value.split('-');
    const uriType = segments.shift() || '';
    const value = segments.join('/').replace(/-/g, '/');
    return {
      _uriType: uriType,
      value,
      toString() {
        return this.value;
      },
    };
  }

  toString(): string {
    return this.value;
  }
}
/**
 * 将对象转换为查询字符串
 * @param obj 对象
 * @returns
 */
export function toQueryFormat(obj: object): string {
  const keyValuePairs = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        for (const subValue of value) {
          keyValuePairs.push(`${key}=${encodeURIComponent(subValue)}`);
        }
      } else {
        keyValuePairs.push(`${key}=${encodeURIComponent(value)}`);
      }
    }
  }
  return `?${keyValuePairs.join('&')}`;
}
