import { IDataProxy, ILazyConfig } from './types';

// eslint-disable-next-line import/prefer-default-export
export declare class DataProxy implements IDataProxy {
  url: string;

  config: ILazyConfig;

  protected _url: string;
  constructor(url: string, config?: never);
  updateUrl(url?: string, params?: never): void;
  load<T = string>(): Promise<T>;
  save(data: never, mode: string): Promise<never>;
}
