// eslint-disable-next-line import/prefer-default-export
export declare class KeyListener {
  private _isActive;

  private _sequence;

  constructor();
  startNewListen(action: (seq: string) => never): void;
  endListen(): void;
  reset(): void;
}
