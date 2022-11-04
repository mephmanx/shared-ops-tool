import { VNode } from '../../ts-common/dom';
import { List } from '../../ts-list';
import { Id, IHandlers } from '../../ts-common/types';
import { IDataViewConfig, IDataView } from './types';
import { IDataItem } from '../../ts-data';

// eslint-disable-next-line import/prefer-default-export
export declare class DataView extends List implements IDataView<IDataItem> {
  config: IDataViewConfig;
  constructor(node: HTMLElement | unknown, config?: IDataViewConfig);
  showItem(id: Id): void;
  // eslint-disable-next-line no-underscore-dangle
  protected _didRedraw(vm: IDataItem): void;
  // eslint-disable-next-line no-underscore-dangle
  protected _renderItem(item: IDataItem, index: number): VNode;
  // eslint-disable-next-line no-underscore-dangle
  protected _renderList(): VNode;
  // eslint-disable-next-line no-underscore-dangle
  protected _getHotkeys(): IHandlers;
  protected getDataViewItemAriaAttrs(
    context: this,
    item: IDataItem
  ):
    | {
        'aria-roledescription': string;
        'aria-grabbed': string;
        role: string;
        'aria-selected': string;
      }
    | {
        'aria-roledescription'?: undefined;
        'aria-grabbed': string;
        role: string;
        'aria-selected': string;
      }
    | {
        'aria-roledescription': string;
        'aria-grabbed'?: undefined;
        role: string;
        'aria-selected': string;
      }
    | {
        'aria-roledescription'?: undefined;
        'aria-grabbed'?: undefined;
        role: string;
        'aria-selected': string;
      };
  protected getDataViewAriaAttrs(
    config: never,
    itemsCount: never,
    rowsCount: never,
    itemsInRow: never
  ): {
    role: string;
    'aria-label': string;
    'aria-multiselectable': string;
    'aria-readonly': string;
  };
}
