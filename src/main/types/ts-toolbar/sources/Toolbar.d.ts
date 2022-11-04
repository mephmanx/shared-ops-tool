import { Id } from '../../ts-common/types';
import { TreeCollection } from '../../ts-data';
import {
  IState,
  Navbar,
  INavbar,
  IButton,
  IImageButton,
  ISelectButton,
  IInput,
  ISeparator,
  ISpacer,
  ITitle,
  ICustomHTML,
  INavItem,
  IMenuItem,
  IDatePicker,
  INavbarConfig,
} from '../../ts-navbar';

export interface IToolbarConfig {
  css?: string;
  menuCss?: string;
  data?: never[] | TreeCollection<IToolbarElement>;
}
export interface IToolbar extends INavbar {
  data: TreeCollection<INavItem>;
  config: INavbarConfig;
  getState(id?: Id): IState;
  setState(state: IState): void;
}
export declare type IToolbarElement =
  | IButton
  | IImageButton
  | ISelectButton
  | IInput
  | ISeparator
  | ISpacer
  | ITitle
  | ICustomHTML
  | INavItem
  | IMenuItem
  | IDatePicker;
export declare class Toolbar extends Navbar<INavItem> implements IToolbar {
  data: TreeCollection<INavItem>;

  config: INavbarConfig;
  constructor(element?: string | HTMLElement, config?: never);
  getState(id?: Id): IState;
  setState(state: IState): void;
  // eslint-disable-next-line no-underscore-dangle
  protected _customHandlers(): {
    input: (e: Event) => void;
    tooltip: (e: MouseEvent) => void;
  };
  // eslint-disable-next-line no-underscore-dangle
  protected _getFactory(): never;
  // eslint-disable-next-line no-underscore-dangle
  protected _draw(element: never): never;
  // eslint-disable-next-line no-underscore-dangle
  protected _getMode(item: never, root: never): 'right' | 'bottom';
  // eslint-disable-next-line no-underscore-dangle
  protected _close(e: MouseEvent): void;
  // eslint-disable-next-line no-underscore-dangle
  protected _setRoot(id: Id): void;
}
