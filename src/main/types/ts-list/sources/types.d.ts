import {
  IDataItem,
  DataCollection,
  DataEvents,
  DragEvents,
  IDataEventsHandlersMap,
  IDragEventsHandlersMap,
  IDragConfig,
} from '../../ts-data';
import { IEventSystem } from '../../ts-common/events';
import {
  IHandlers,
  SelectionEvents,
  ISelectionEventsHandlersMap,
  Id,
} from '../../ts-common/types';
import { IKeyManager } from '../../ts-common/KeyManager';
import { ScrollView } from '../../ts-common/ScrollView';

export declare type MultiselectionMode = 'click' | 'ctrlClick';
export interface IListConfig extends IDragConfig {
  template?: (obj: IDataItem) => IDataItem;
  data?: DataCollection | IDataItem[];
  virtual?: boolean;
  itemHeight?: number | string;
  css?: string;
  height?: number | string;
  selection?: boolean;
  multiselection?: boolean | MultiselectionMode;
  keyNavigation?: boolean | (() => boolean);
  editable?: boolean;
  hotkeys?: IHandlers;
  eventHandlers?: {
    [key: string]: IDataItem;
  };
  htmlEnable?: boolean;
  /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
  editing?: boolean;
  /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
  multiselectionMode?: MultiselectionMode;
}
export declare enum ListEvents {
  click = 'click',
  doubleClick = 'doubleclick',
  focusChange = 'focuschange',
  beforeEditStart = 'beforeEditStart',
  afterEditStart = 'afterEditStart',
  beforeEditEnd = 'beforeEditEnd',
  afterEditEnd = 'afterEditEnd',
  itemRightClick = 'itemRightClick',
  itemMouseOver = 'itemMouseOver',
  /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
  contextmenu = 'contextmenu',
}
type ListEventsStrings = keyof typeof ListEvents;
export type IListEventHandlersMap = {
  [key in ListEventsStrings]: (...args: never[]) => never;
} & {
  [ListEvents.click]: (id: Id, e: Event) => void;
  [ListEvents.itemMouseOver]: (id: Id, e: Event) => void;
  [ListEvents.doubleClick]: (id: Id, e: Event) => void;
  [ListEvents.itemRightClick]: (id: Id, e: MouseEvent) => void;
  [ListEvents.focusChange]: (focusIndex: number, id: Id) => void;
  [ListEvents.beforeEditStart]: (id: Id) => void | boolean;
  [ListEvents.afterEditStart]: (id: Id) => void;
  [ListEvents.beforeEditEnd]: (value: string, id: Id) => void | boolean;
  [ListEvents.afterEditEnd]: (value: string, id: Id) => void;
  [ListEvents.contextmenu]: (id: Id, e: MouseEvent) => unknown;
};
export interface ISelectionConfig {
  multiselection?: boolean | MultiselectionMode;
  disabled?: boolean;
}
export interface IList<DataItem extends IDataItem> {
  config: IListConfig;
  data: DataCollection<DataItem>;
  events: IEventSystem<
    DataEvents | ListEvents | DragEvents,
    IListEventHandlersMap & IDataEventsHandlersMap & IDragEventsHandlersMap
  >;
  selection: ISelection;
  keyManager: IKeyManager;
  paint(): void;
  destructor(): void;
  editItem(id: Id): void;
  getFocusItem(): DataItem;
  setFocus(id: Id): void;
  getFocus(): Id;
  showItem(id: Id): void;
  /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
  disableSelection(): void;
  /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
  enableSelection(): void;
}
export interface IProList extends IList<never> {
  scrollView: ScrollView;
}
export interface ISelection<T = unknown> {
  config: ISelectionConfig;
  events: IEventSystem<
    SelectionEvents | DataEvents,
    ISelectionEventsHandlersMap & IDataEventsHandlersMap
  >;
  getId(): Id | Id[] | undefined;
  getItem(): T;
  contains(id?: Id): boolean;
  remove(id?: Id): void;
  add(id?: Id, isShift?: boolean, isCtrl?: boolean, silent?: boolean): void;
  enable(): void;
  disable(): void;
  destructor(): void;
}
export interface IListItem {
  [key: string]: unknown;
}
