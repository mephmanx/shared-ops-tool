import {
  ICell,
  ICellConfig,
  ILayout,
  ILayoutConfig,
  LayoutCallback,
} from './types';
import { Cell } from './Cell';

// eslint-disable-next-line import/prefer-default-export
export declare class Layout extends Cell implements ILayout {
  config: ILayoutConfig;

  protected _all: never;

  protected _cells: ICell[];

  protected _root: ILayout;

  private _xLayout;

  constructor(parent: never, config: ILayoutConfig);
  destructor(): void;
  toVDOM(): never;
  removeCell(id: string): never;
  addCell(config: ICellConfig, index?: number): void;
  getId(index: number): string;
  getRefs(name: string): never;
  getCell(id: string): never;
  forEach(callback: LayoutCallback, parent?: string, level?: number): void;
  /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
  cell(id: string): never;
  // eslint-disable-next-line no-underscore-dangle
  protected _getCss(content?: boolean): string;
}
