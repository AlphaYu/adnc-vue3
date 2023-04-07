import { AxiosRequestConfig } from 'axios';
import { UriString } from '@/utils/string';

export interface UriExtension {
  _uriType: string;
  value: string;
  toString(): string;
}

export interface VAxiosRequestConfig extends AxiosRequestConfig {
  uri?: UriString;
}
