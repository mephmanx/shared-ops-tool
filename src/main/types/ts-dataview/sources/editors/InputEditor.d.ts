import { IDataViewConfig, IDataViewItem } from '../types';
import { DataView } from '../DataView';

// eslint-disable-next-line import/prefer-default-export
export declare class InputEditor {
  protected _handlers: {
    [key: string]: (...args: any[]) => void;
  };

  protected _mode: boolean;

  protected _config: IDataViewConfig;

  protected _dataView: DataView;

  protected _item: IDataViewItem;

  protected _input: HTMLInputElement;
  constructor(item: IDataViewItem, dataView: DataView);
  endEdit(): void;
  toHTML(isLastItemInRow: boolean): any;
  // eslint-disable-next-line no-underscore-dangle
  protected _initHandlers(): void;
}
