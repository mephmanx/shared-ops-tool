import { IViewLike, View } from '../../ts-common/view';
import {
  ICell,
  ICellConfig,
  ILayout,
  LayoutEvents,
  ILayoutEventHandlersMap,
} from './types';
import { IEventSystem } from '../../ts-common/events';
import { ScrollView } from '../../ts-common/ScrollView';

// eslint-disable-next-line import/prefer-default-export
export declare class Cell extends View implements ICell {
  id: string;

  config: ICellConfig;

  events: IEventSystem<LayoutEvents, ILayoutEventHandlersMap>;

  scrollView: ScrollView;

  protected _handlers: {
    [key: string]: (...args: never) => never;
  };

  protected _parent: ILayout;

  constructor(parent: string | HTMLElement | ILayout, config: ICellConfig);
  paint(): void;
  isVisible(): boolean;
  hide(): void;
  show(): void;
  expand(): void;
  collapse(): void;
  toggle(): void;
  // eslint-disable-next-line no-underscore-dangle
  protected _checkNextSize(cell?: ICell): never;
  getParent(): ILayout;
  destructor(): void;
  getWidget(): IViewLike;
  getCellView(): never;
  attach(name: never, config?: never): IViewLike;
  attachHTML(html: string): void;
  toVDOM(nodes?: never[]): never;
  // eslint-disable-next-line no-underscore-dangle
  protected _getCss(_content?: boolean): string;
  // eslint-disable-next-line no-underscore-dangle
  protected _initHandlers(): void;
}
