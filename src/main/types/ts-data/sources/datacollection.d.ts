import { IEventSystem } from '../../ts-common/events';
import { Id } from '../../ts-common/types';
import { ISortMode, Sort } from './datacollection/sort';
import {
  DataCallback,
  DataEvents,
  IDataCollection,
  IDataItem,
  IDataProxy,
  IFilterCallback,
  IFilterConfig,
  IFilterMode,
  ITreeCollection,
  IUpdateObject,
  ReduceCallBack,
  IDataEventsHandlersMap,
  DataDriver,
  IDataConfig,
  ISortConfig,
  IDataDriver,
} from './types';
import { TreeCollection } from './treecollection';

// eslint-disable-next-line import/prefer-default-export
export declare class DataCollection<T extends IDataItem = IDataItem>
  implements IDataCollection<T>
{
  loadData: Promise<never>;

  saveData: Promise<never>;

  dataProxy: IDataProxy;

  config: IDataConfig;

  events: IEventSystem<DataEvents, IDataEventsHandlersMap>;

  protected _pull: {
    [id: string]: T;
  };

  protected _sort: Sort;

  protected _filter: never;

  private _changes;

  private _loader;
  constructor(config?: never, events?: IEventSystem<never>);
  // eslint-disable-next-line no-underscore-dangle
  protected _reset(): void;
  add(newItem: IDataItem, index?: number): Id;
  add(newItem: IDataItem[], index?: number): Id[];
  remove(id: Id | Id[]): void;
  removeAll(): void;
  exists(id: Id): boolean;
  getNearId(id: Id): string | number;
  getItem(id: Id): T;
  update(id: Id, newItem: IUpdateObject, silent?: boolean): void;
  getIndex(id: Id): number;
  getId(index: number): Id;
  getLength(): number;
  isDataLoaded(from?: number, to?: number): boolean;
  filter(rule?: IFilterMode | IFilterCallback, config?: IFilterConfig): void;
  find(conf: IFilterMode | DataCallback<T>): never;
  findAll(conf: IFilterMode | DataCallback<T>): never[];
  sort(rule?: ISortMode, config?: ISortConfig): void;
  copy(
    id: Id | Id[],
    index: number,
    target?: IDataCollection | ITreeCollection,
    targetId?: Id
  ): Id | Id[];
  move(
    id: Id | Id[],
    index: number,
    target?: IDataCollection | TreeCollection,
    targetId?: Id,
    newId?: Id
  ): Id | Id[];
  forEach(callback: DataCallback<T>): void;
  load(
    url: IDataProxy | string,
    driver?: IDataDriver | DataDriver
  ): Promise<never>;
  parse(data: T[], driver?: DataDriver | IDataDriver): never;
  $parse(data: never[]): void;
  save(url: IDataProxy | string): void;
  changeId(id: Id, newId?: Id, silent?: boolean): void;
  isSaved(): boolean;
  map(callback: DataCallback<T>): never[];
  mapRange(from: number, to: number, callback: DataCallback<T>): never[];
  reduce<A>(callback: ReduceCallBack<T, A>, acc: A): A;
  serialize(driver?: DataDriver): never;
  getInitialData(): T[];
  setMeta(obj: T, key: string, value: never): void;
  getMeta(obj: T, key: string): never;
  getMetaMap(obj: T): never;
  getRawData(from: number, to: number, order?: T[], mode?: number): T[];
  // eslint-disable-next-line no-underscore-dangle
  protected _add(newItem: IDataItem, index: number): Id;
  // eslint-disable-next-line no-underscore-dangle
  protected _copy(
    id: Id,
    index: number,
    target?: IDataCollection | ITreeCollection,
    targetId?: Id,
    key?: number
  ): Id;

  // eslint-disable-next-line no-underscore-dangle
  protected _addToOrder(array: never[], obj: never, index?: number): void;
}
