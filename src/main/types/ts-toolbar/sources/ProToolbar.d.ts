import { Toolbar, IToolbar } from './Toolbar';
import { ScrollView } from '../../ts-common/ScrollView';

export interface IProToolbar extends IToolbar {
  scrollView: ScrollView;
}
export declare class ProToolbar extends Toolbar implements IProToolbar {
  scrollView: ScrollView;
  constructor(element?: string | HTMLElement, config?: never);
  // eslint-disable-next-line no-underscore-dangle
  protected _draw(element: never): never;
}
