import { IDataDriver, ICsvDriverConfig } from '../types';
import { IAnyObj } from '../../../ts-common/types';

export interface ICsvDriver extends IDataDriver {
  getFields(
    data: never,
    headers?: string[]
  ): {
    [key: string]: never;
  };
}
export declare class CsvDriver implements ICsvDriver {
  config: ICsvDriverConfig;

  constructor(config?: ICsvDriverConfig);
  getFields(
    row: never,
    headers?: string[]
  ): {
    [key: string]: never;
  };
  getRows(data: string): never[];
  toJsonArray(data: string): never[];
  serialize(data: IAnyObj[], withoutHeader?: boolean): never;
}
