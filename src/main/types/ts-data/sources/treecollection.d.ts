import { IEventSystem } from '../../ts-common/events';
// eslint-disable-next-line import/no-cycle
import { DataCollection } from './datacollection';
import {
  DataCallback,
  DataEvents,
  IDataCollection,
  IDataItem,
  ITreeCollection,
  IFilterCallback,
  IFilterMode,
  IFilterComplexMode,
  ITreeFilterConfig,
  DataDriver,
  IDataDriver,
} from './types';
import { Id } from '../../ts-common/types';
import { ISortMode } from './datacollection/sort';

// eslint-disable-next-line import/prefer-default-export
export declare class TreeCollection<T extends IDataItem = IDataItem>
  extends DataCollection<T>
  implements ITreeCollection<T>
{
  protected _root: Id;

  constructor(config?: never, events?: IEventSystem<DataEvents>);
  add(newItem: IDataItem, index?: number, parent?: Id): Id;
  add(newItem: IDataItem[], index?: number, parent?: Id): Id[];
  getRoot(): Id;
  getParent(id: Id, asObj?: boolean): Id;
  getItems(id: Id): T[];
  getLength(id?: Id): number;
  removeAll(id?: Id): void;
  getIndex(id: Id): number;
  sort(rule?: ISortMode): void;
  filter(
    rule?: IFilterMode | IFilterComplexMode | IFilterCallback,
    config?: ITreeFilterConfig
  ): void;
  restoreOrder(): void;
  copy(
    id: Id,
    index: number,
    target?: IDataCollection | ITreeCollection,
    targetId?: Id
  ): Id;
  copy(
    id: Id[],
    index: number,
    target?: IDataCollection | ITreeCollection,
    targetId?: Id
  ): Id[];
  move(
    id: Id,
    index: number,
    target?: ITreeCollection | IDataCollection,
    targetId?: Id
  ): Id;
  move(
    id: Id[],
    index: number,
    target?: ITreeCollection | IDataCollection,
    targetId?: Id
  ): Id[];
  forEach(callback: DataCallback<never>, parent?: Id, level?: number): void;
  eachChild(
    id: Id,
    callback: DataCallback<T>,
    direct?: boolean,
    checkItem?: (item: IDataItem) => boolean
  ): void;
  getNearId(id: Id): Id;
  loadItems(id: Id, driver?: IDataDriver | DataDriver): void;
  refreshItems(id: Id, driver?: IDataDriver | DataDriver): void;
  eachParent(id: Id, callback: DataCallback<T>, self?: boolean): void;
  haveItems(id: Id): boolean;
  canCopy(id: Id, target: Id): boolean;
  serialize(driver?: DataDriver, checkItem?: (item: never) => never): never;
  getId(index: number, parent?: Id): Id;
  map(callback: DataCallback<T>, parent?: Id, direct?: boolean): never;
  getRawData(
    from: number,
    to: number,
    order?: T[],
    mode?: number,
    parent?: Id
  ): T[];
  protected flatten(input: T[]): T[];
  // eslint-disable-next-line no-underscore-dangle
  protected _add(
    newItem: IDataItem,
    index?: number,
    parent?: Id,
    key?: number
  ): Id;
  // eslint-disable-next-line no-underscore-dangle
  protected _copy(
    id: Id,
    index: number,
    target?: IDataCollection | ITreeCollection,
    targetId?: Id,
    key?: number
  ): Id;
  // eslint-disable-next-line no-underscore-dangle

  // eslint-disable-next-line no-underscore-dangle
  protected _reset(id?: Id): void;
  // eslint-disable-next-line no-underscore-dangle
  // eslint-disable-next-line no-underscore-dangle
  protected _addToOrder(_order: never, obj: never, index: number): void;
  // eslint-disable-next-line no-underscore-dangle
}
