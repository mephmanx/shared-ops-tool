export interface IView {
  getRootView(): never;
  paint(): void;
  mount(container: never, vnode?: never): void;
}
export interface IViewLike {
  mount?(container: never, vnode?: never): void;
  getRootView(): never;
}
export declare class View {
  config: unknown;

  protected _container: never;

  protected _uid: never;

  private _view;
  constructor(_container: never, config: never);
  mount(container: never, vnode?: never): void;
  unmount(): void;
  getRootView(): never;
  getRootNode(): HTMLElement;
  paint(): void;
}
