import {
  DataCollection,
  DataEvents,
  DragEvents,
  IDataEventsHandlersMap,
  IDataItem,
  IDragEventsHandlersMap,
} from '../../ts-data';
import { VNode } from '../../ts-common/dom';
import { IEventSystem } from '../../ts-common/events';
import { IKeyManager } from '../../ts-common/KeyManager';
import { IHandlers, Id } from '../../ts-common/types';
import { View } from '../../ts-common/view';
import {
  IList,
  IListConfig,
  IListEventHandlersMap,
  IListItem,
  ISelection,
  ListEvents,
} from './types';

// eslint-disable-next-line import/prefer-default-export
export declare class List extends View implements IList<IDataItem> {
  config: IListConfig;

  data: DataCollection;

  events: IEventSystem<
    DataEvents | ListEvents | DragEvents,
    IListEventHandlersMap & IDataEventsHandlersMap & IDragEventsHandlersMap
  >;

  selection: ISelection;

  keyManager: IKeyManager;

  protected _handlers: IHandlers;

  protected _edited: Id;

  protected _events: IHandlers;

  private _touch;

  constructor(node: HTMLElement | string, config?: IListConfig);

  private _clearTouchTimer;

  /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
  disableSelection(): void;
  /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
  enableSelection(): void;
  editItem(id: Id): void;
  editEnd(value: never, id?: Id): void;
  getFocusItem(): never;
  setFocus(id: Id): void;
  getFocus(): Id;
  destructor(): void;
  showItem(id: Id): void;
  // eslint-disable-next-line no-underscore-dangle
  protected _renderItem(item: IListItem, index: number): VNode;
  // eslint-disable-next-line no-underscore-dangle
  moveFocus(mode: number, step?: number): void;
  // eslint-disable-next-line no-underscore-dangle
  // eslint-disable-next-line no-underscore-dangle
  protected _getHotkeys(): IHandlers;
}
