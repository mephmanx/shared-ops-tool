import { IEventSystem } from '../../ts-common/events';
import { View } from '../../ts-common/view';
import {
  DataCollection,
  DataEvents,
  IDataEventsHandlersMap,
} from '../../ts-data';
import { List } from '../../ts-list';
import { Popup } from '../../ts-popup';
import { Id, IHandlers } from '../../ts-common/types';
import {
  ComboboxEvents,
  ICombobox,
  IComboboxConfig,
  IComboboxEventHandlersMap,
  State,
} from './types';

// eslint-disable-next-line import/prefer-default-export
export declare class Combobox extends View implements ICombobox {
  data: DataCollection;

  config: IComboboxConfig;

  events: IEventSystem<
    DataEvents | ComboboxEvents,
    IComboboxEventHandlersMap | IDataEventsHandlersMap
  >;

  list: List;

  popup: Popup;

  private _state;

  protected _handlers: IHandlers;

  constructor(element: HTMLElement | string, config: IComboboxConfig);
  focus(): void | boolean;
  blur(): void | boolean;
  enable(): void;
  disable(): void;
  isDisabled(): boolean;
  clear(): void | boolean;
  getValue<T extends boolean = false>(
    asArray?: T
  ): T extends true ? string[] : string;
  setValue(ids: Id[] | Id): void | boolean;
  addOption(value: string): void;
  destructor(): void;
  /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
  setState(state: State): void;

  private _initHandlers;

  private _filter;
}
