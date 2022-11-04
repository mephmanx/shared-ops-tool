import { IEventSystem } from '../../ts-common/events';
import { TreeCollection } from './treecollection';
import { anyFunction, IAnyObj, Id } from '../../ts-common/types';
import { ISortMode } from './datacollection/sort';

export interface IDataProxy {
  url: string;
  config?: unknown;
  updateUrl?: (url?: string, params?: never) => void;
  load?: () => Promise<never[]>;
  save?: (data: never, mode: string) => Promise<never>;
}
export interface ILazyDataProxy extends IDataProxy {
  config: ILazyConfig;
}
export interface ILazyConfig {
  from?: number;
  limit?: number;
  delay?: number;
  prepare?: number;
}
export declare type IFilterCallback = (obj: never) => boolean;
export interface IFilterMode {
  by?: Id;
  match?: string | number | boolean;
  compare?: (
    value: never,
    match: never,
    obj: never,
    multi?: boolean
  ) => boolean;
  multi?: never;
}
export interface IFilterComplexMode {
  [key: string]: IFilterMode;
}
export interface IFilterConfig {
  add?: boolean;
  smartFilter?: boolean;
}
export interface ISortConfig {
  smartSorting?: boolean;
}
export interface ITreeFilterConfig extends IFilterConfig {
  type?: TreeFilterType;
  level?: number;
}
export interface IUpdateObject {
  [key: string]: never;
}
export interface IApproximate {
  value: never;
  maxNum: number;
}
export interface IDataConfig {
  prep?: anyFunction;
  init?: anyFunction;
  update?: anyFunction;
  approximate?: IApproximate;
  autoload?: boolean;
}
export interface IDataCollection<T extends IDataItem = IDataItem> {
  config: IDataConfig;
  events: IEventSystem<DataEvents>;
  dataProxy: IDataProxy;
  loadData: Promise<never>;
  saveData: Promise<never>;
  load(
    url: IDataProxy | string,
    driver?: IDataDriver | DataDriver
  ): Promise<never>;
  parse(data: T[], driver?: DataDriver | IDataDriver): void;
  add(newItem: IDataItem, index?: number): Id;
  add(newItem: IDataItem[], index?: number): Id[];
  add(newItem: IDataItem | IDataItem[], index?: number): Id | Id[];
  remove(id: Id | Id[]): void;
  removeAll(): void;
  update(id: Id, newItem: IUpdateObject, silent?: boolean): void;
  exists(id: Id): boolean;
  getInitialData(): T[];
  getItem(id: Id): T;
  getIndex(id: Id): number;
  getLength(): number;
  isDataLoaded(from?: number, to?: number): boolean;
  getId(index: number): Id;
  filter(rule?: IFilterMode | IFilterCallback, config?: IFilterConfig): void;
  find(rule: IFilterMode): T;
  reduce<A>(callback: ReduceCallBack<T, A>, acc: A): A;
  findAll(rule: IFilterMode): T[];
  map(callback: DataCallback<T>): T[];
  mapRange(from: number, to: number, callback: DataCallback<T>): T[];
  sort(rule?: ISortMode, config?: ISortConfig): void;
  serialize(driver?: DataDriver): T[];
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
    targetId?: Id
  ): Id | Id[];
  changeId(id: Id, newId?: Id, silent?: boolean): void;
  forEach(callback: DataCallback<T>): void;
  save(url: IDataProxy | string): void;
  isSaved(): boolean;
  getRawData(from: number, to: number, order?: T[], mode?: number): T[];
}
export interface IDataChangeStack {
  order: IDataChange[];
}
export declare type Statuses = 'add' | 'update' | 'remove' | string;
export interface IDataChange {
  id: Id;
  status: Statuses;
  obj: never;
  saving: boolean;
  promise?: Promise<never>;
  pending?: boolean;
  error?: boolean;
}
export interface IDataDriver {
  toJsonArray(data: never): never[];
  serialize(data: IAnyObj[]): IAnyObj;
  getRows(data: string): never[];
  getFields(row: never): {
    [key: string]: never;
  };
}
export interface ICsvDriverConfig {
  skipHeader?: number;
  nameByHeader?: boolean;
  names?: string[];
  rowDelimiter?: string;
  columnDelimiter?: string;
}
export declare enum TreeFilterType {
  all = 'all',
  level = 'level',
  leafs = 'leafs',
}
export declare type DataCallback<T> = (
  item: T,
  index?: number,
  array?: T[]
) => never;
export declare type ReduceCallBack<T, A> = (
  acc: A,
  item: T,
  index?: number
) => A;
export interface ITreeCollection<T extends IDataItem = IDataItem>
  extends IDataCollection<T> {
  add(newItem: IDataItem, index?: number, parent?: Id): Id;
  add(newItem: IDataItem[], index?: number, parent?: Id): Id[];
  add(newItem: IDataItem | IDataItem[], index?: number, parent?: Id): Id | Id[];
  getRoot(): Id;
  getParent(id: Id): Id;
  removeAll(id?: Id): void;
  getLength(id?: Id): number;
  getIndex(id: Id): number;
  getItems(id: Id): T[];
  sort(rule?: ISortMode): void;
  map(callback: DataCallback<T>, parent?: Id, direct?: boolean): never;
  filter(
    rule?: IFilterMode | IFilterCallback,
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
  copy(
    id: Id | Id[],
    index: number,
    target?: IDataCollection | ITreeCollection,
    targetId?: Id
  ): Id | Id[];
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
  move(
    id: Id | Id[],
    index: number,
    target?: ITreeCollection | IDataCollection,
    targetId?: Id
  ): Id | Id[];
  eachChild(
    id: Id,
    callback: DataCallback<T>,
    direct?: boolean,
    checkItem?: (item: IDataItem) => boolean
  ): void;
  eachParent(id: Id, callback: DataCallback<T>, self?: boolean): void;
  loadItems(id: Id, driver?: IDataDriver | DataDriver): void;
  refreshItems(id: Id, driver?: IDataDriver | DataDriver): void;
  haveItems(id: Id): boolean;
  canCopy(id: Id, target: Id): boolean;
  forEach(callback: DataCallback<T>, parent?: Id, level?: number): void;
}
export interface IDataItem {
  id?: Id;
  [key: string]: any;
}
export declare type DropPosition = 'top' | 'bottom' | 'in';
export interface IDragConfig {
  dragCopy?: boolean;
  dropBehaviour?: DropBehaviour;
  dragMode?: DragMode;
}
export declare enum DataEvents {
  afterAdd = 'afteradd',
  beforeAdd = 'beforeadd',
  removeAll = 'removeall',
  beforeRemove = 'beforeremove',
  afterRemove = 'afterremove',
  change = 'change',
  load = 'load',
  loadError = 'loaderror',
  beforeLazyLoad = 'beforelazyload',
  afterLazyLoad = 'afterlazyload',
  dataRequest = 'dataRequest',
}
type DataEventsStrings = keyof typeof DataEvents;
export type IDataEventsHandlersMap = {
  [key in DataEventsStrings]: (...args: never[]) => never;
} & {
  [DataEvents.change]: (
    id?: Id,
    status?: Statuses,
    updatedItem?: never
  ) => void;
  [DataEvents.afterAdd]: (newItem: never) => void;
  [DataEvents.afterRemove]: (removedItem: never) => void;
  [DataEvents.beforeAdd]: (newItem: never) => boolean | void;
  [DataEvents.beforeRemove]: (removedItem: never) => boolean | void;
  [DataEvents.load]: () => void;
  [DataEvents.removeAll]: () => void;
  [DataEvents.loadError]: (response: never) => void;
  [DataEvents.beforeLazyLoad]: () => boolean | void;
  [DataEvents.afterLazyLoad]: (from: number, count: number) => void;
  [DataEvents.dataRequest]: (from: number, to: number) => void;
};
export declare enum DragEvents {
  beforeDrag = 'beforeDrag',
  dragStart = 'dragStart',
  dragOut = 'dragOut',
  dragIn = 'dragIn',
  canDrop = 'canDrop',
  cancelDrop = 'cancelDrop',
  beforeDrop = 'beforeDrop',
  afterDrop = 'afterDrop',
  afterDrag = 'afterDrag',
}
export interface IDragInfo {
  start: Id;
  source: Id[];
  target: Id;
  dropPosition?: DropPosition;
}
export declare type DragMode = 'target' | 'both' | 'source';
export declare type DropBehaviour = 'child' | 'sibling' | 'complex';
type DragEventsStrings = keyof typeof DragEvents;
export type IDragEventsHandlersMap = {
  [key in DragEventsStrings]: (...args: never[]) => never;
} & {
  [DragEvents.beforeDrag]: (
    data: IDragInfo,
    events: MouseEvent,
    ghost: HTMLElement
  ) => void | boolean;
  [DragEvents.dragStart]: (data: IDragInfo, events: MouseEvent) => void;
  [DragEvents.dragOut]: (data: IDragInfo, events: MouseEvent) => void;
  [DragEvents.dragIn]: (data: IDragInfo, events: MouseEvent) => void | boolean;
  [DragEvents.canDrop]: (data: IDragInfo, events: MouseEvent) => void;
  [DragEvents.cancelDrop]: (data: IDragInfo, events: MouseEvent) => void;
  [DragEvents.beforeDrop]: (
    data: IDragInfo,
    events: MouseEvent
  ) => void | boolean;
  [DragEvents.afterDrop]: (data: IDragInfo, events: MouseEvent) => never;
  [DragEvents.afterDrag]: (data: IDragInfo, events: MouseEvent) => never;
};
export declare enum DataDriver {
  json = 'json',
  csv = 'csv',
  xml = 'xml',
}
export declare type AjaxResponseType = 'json' | 'xml' | 'text' | 'raw';
export interface IAjaxHelperConfig {
  headers: {
    [key: string]: string;
  };
  responseType: AjaxResponseType;
}
export interface IAjaxHelper {
  get<T>(
    url: string,
    data?:
      | {
          [key: string]: never;
        }
      | string,
    config?: Partial<IAjaxHelperConfig>
  ): Promise<T>;
  post<T>(
    url: string,
    data?:
      | {
          [key: string]: never;
        }
      | string,
    config?: Partial<IAjaxHelperConfig>
  ): Promise<T>;
  put<T>(
    url: string,
    data?:
      | {
          [key: string]: never;
        }
      | string,
    config?: Partial<IAjaxHelperConfig>
  ): Promise<T>;
  delete<T>(
    url: string,
    data?:
      | {
          [key: string]: never;
        }
      | string,
    config?: Partial<IAjaxHelperConfig>
  ): Promise<T>;
}
