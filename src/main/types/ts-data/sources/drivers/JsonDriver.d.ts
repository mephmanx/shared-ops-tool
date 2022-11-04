import { IDataDriver } from '../types';
import { IAnyObj } from '../../../ts-common/types';

// eslint-disable-next-line import/prefer-default-export
export declare class JsonDriver implements IDataDriver {
  toJsonArray(data: never): never[];
  serialize(data: IAnyObj[]): IAnyObj[];
  getFields(row: never): {
    [key: string]: never;
  };
  getRows(data: string): never[];
}
