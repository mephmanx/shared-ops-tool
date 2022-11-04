import { IGrid, IDirection } from '../types';

export declare function selectionMove(
  e: KeyboardEvent,
  grid: IGrid,
  dir: IDirection,
  range: number,
  toEnd?: boolean,
  ctrlUp?: boolean,
  shiftUp?: boolean
): void;
export declare function getKeysHandlers(grid: any): {
  enter: (e: any) => void;
  space: (e: any) => void;
  escape: () => void;
  tab: (e: any) => void;
  'shift+tab': (e: any) => void;
  arrowUp: (e: any) => void;
  'ctrl+arrowUp': (e: any) => void;
  'shift+arrowUp': (e: any) => void;
  'ctrl+shift+arrowUp': (e: any) => void;
  arrowDown: (e: any) => void;
  'ctrl+arrowDown': (e: any) => void;
  'shift+arrowDown': (e: any) => void;
  'ctrl+shift+arrowDown': (e: any) => void;
  arrowRight: (e: any) => void;
  'ctrl+arrowRight': (e: any) => void;
  'shift+arrowRight': (e: any) => void;
  'ctrl+shift+arrowRight': (e: any) => void;
  arrowLeft: (e: any) => void;
  'ctrl+arrowLeft': (e: any) => void;
  'shift+arrowLeft': (e: any) => void;
  'ctrl+shift+arrowLeft': (e: any) => void;
};
