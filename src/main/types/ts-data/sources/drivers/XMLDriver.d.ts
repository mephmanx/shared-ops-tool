import { IDataDriver } from '../types';
import { IAnyObj } from '../../../ts-common/types';

// eslint-disable-next-line import/prefer-default-export
export declare class XMLDriver implements IDataDriver {
  toJsonArray(data: never): never[];
  toJsonObject(data: string): {
    [key: string]: never;
  };
  serialize(data: IAnyObj[]): IAnyObj;
  getFields(row: never): {
    [key: string]: never;
  };
  getRows(data: Document | string): never[];
}
