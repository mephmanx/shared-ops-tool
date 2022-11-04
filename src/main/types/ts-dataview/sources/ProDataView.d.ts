import { ScrollView } from '../../ts-common/ScrollView';
import { IProDataView, IDataViewConfig, IDataView } from './types';
import { DataView } from './DataView';
import { VNode } from '../../ts-common/dom';

// eslint-disable-next-line import/prefer-default-export
export declare class ProDataView extends DataView implements IProDataView {
  scrollView: ScrollView;
  constructor(node: HTMLElement | IDataView<any>, config?: IDataViewConfig);
  destructor(): void;
  showItem(id: string): void;
  // eslint-disable-next-line no-underscore-dangle
  protected _renderList(): VNode;
}
