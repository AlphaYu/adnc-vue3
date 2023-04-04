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
