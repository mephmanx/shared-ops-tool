import { IEventSystem } from '../../ts-common/events';
import {
  DataCollection,
  DataEvents,
  IDataEventsHandlersMap,
  IDataItem,
} from '../../ts-data';

export interface IVault {
  config: IVaultConfig;
  data: DataCollection<IFileWrapper>;
  events: IVaultEventSystem;
  uploader: IUploader;
  paint(): void;
  destructor(): void;
}
export declare type IVaultEventSystem = IEventSystem<
  DataEvents | UploaderEvents | ProgressBarEvents,
  IDataEventsHandlersMap &
    IUploaderEventHandlersMap &
    IProgressBarEventHandlersMap
>;
export interface IVaultConfig {
  mode?: VaultMode;
  modeControls?: boolean;
  customScroll?: boolean;
  toolbar?: boolean;
  scaleFactor?: number;
  uploader?: IUploaderConfig;
  downloadURL?: string;
  progressBar?: IProgressBarConfig<IVaultProgressData>;
  data?: DataCollection<IFileWrapper>;
  disablePreview?: boolean;
  editable?: boolean;
}
export interface IUploader {
  config: IUploaderConfig;
  data: DataCollection<IFileWrapper>;
  events: IUploaderEventSystem;
  isActive: boolean;
  selectFile(): void;
  abort(id?: string): void;
  linkDropArea(el: HTMLElement | string): void;
  unlinkDropArea(el?: HTMLElement | string): void;
  send(params?: IParams): void;
  parseFiles(dataTransfer: DataTransfer): void;
}
export declare type IUploaderEventSystem = IEventSystem<
  DataEvents | UploaderEvents,
  IDataEventsHandlersMap & IUploaderEventHandlersMap
>;
export interface IUploaderConfig {
  autosend?: boolean;
  target?: string;
  params?: IParams;
  singleRequest?: boolean;
  fieldName?: string;
  updateFromResponse?: boolean;
  headerParams?: IParams;
}
export interface IProgressBarConfig<T> {
  template?: (percent: number, extra: T) => string;
}
export interface IScrollView {
  config: IScrollViewConfig;
}
export interface IScrollViewConfig {
  speed: number;
  render(element: never): void;
}
export declare enum UploaderEvents {
  uploadBegin = 'uploadbegin',
  beforeUploadFile = 'beforeuploadfile',
  uploadFile = 'uploadfile',
  uploadFail = 'uploadfail',
  uploadComplete = 'uploadcomplete',
  uploadProgress = 'uploadprogress',
}
export declare type UploaderEventsStrings = keyof typeof UploaderEvents;
export type IUploaderEventHandlersMap = {
  [key in UploaderEventsStrings]: (...args: never[]) => never;
} & {
  [UploaderEvents.uploadBegin]: (files?: IFileWrapper[]) => void;
  [UploaderEvents.beforeUploadFile]: (file: IFileWrapper) => boolean | void;
  [UploaderEvents.uploadFile]: (
    file: IFileWrapper,
    extra?: {
      [key: string]: string;
    }
  ) => void;
  [UploaderEvents.uploadFail]: (file: IFileWrapper) => void;
  [UploaderEvents.uploadComplete]: (files?: IFileWrapper[]) => void;
  [UploaderEvents.uploadProgress]: (
    progress: number,
    current?: number,
    total?: number
  ) => void;
};
export declare enum ProgressBarEvents {
  cancel = 'cancel',
}
type ProgressBarEventsStrings = keyof typeof ProgressBarEvents;
export type IProgressBarEventHandlersMap = {
  [key in ProgressBarEventsStrings]: (...args: never[]) => never;
} & {
  [ProgressBarEvents.cancel]: () => void;
};
export declare enum FileStatus {
  queue = 'queue',
  uploaded = 'uploaded',
  failed = 'failed',
  inprogress = 'inprogress',
}
export interface IParams {
  [key: string]: never;
}
export declare enum VaultMode {
  grid = 'grid',
  list = 'list',
}
export interface IVaultProgressData {
  total: number;
  current: number;
}
export interface IFileWrapper extends IDataItem {
  file: File;
  status: FileStatus;
  progress: number;
  link?: string;
  image?: HTMLImageElement;
  request?: XMLHttpRequest;
  path?: string;
  name?: string;
  size?: number;
  preview?: string;
  $toRemove?: boolean;
}
