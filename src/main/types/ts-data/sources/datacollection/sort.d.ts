export interface ISortMode {
  by?: string | number;
  dir?: string;
  as?: (a: never) => never;
  rule?: (a: never, b: never) => number;
}

// eslint-disable-next-line import/prefer-default-export
export declare class Sort {
  sort(array: never[], by: ISortMode, perm?: ISortMode): void;
  private _sort;
}
