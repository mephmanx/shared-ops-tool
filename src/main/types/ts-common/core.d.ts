// eslint-disable-next-line @typescript-eslint/naming-convention
declare type fn<T extends never[], K> = (...args: T) => K;
// eslint-disable-next-line @typescript-eslint/naming-convention
declare type anyFunction = fn<never[], never>;
export declare function uid(): string;
export declare function extend(
  target: never,
  source: never,
  deep?: boolean
): never;
interface IOBj {
  [key: string]: never;
}
export declare function copy(source: IOBj, withoutInner?: boolean): IOBj;
export declare function findIndex<T = never>(
  arr: T[],
  predicate: (obj: T) => boolean
): number;

export declare function range(from: number, to: number): number[];
export declare function downloadFile(
  data: string,
  filename: string,
  mimeType?: string
): void;
export declare function debounce(
  func: anyFunction,
  wait: number,
  immediate?: boolean
): (...args: never[]) => void;
export declare function compare(obj1: never, obj2: never): boolean;
export declare const isType: (value: never) => string;
export interface IContainerConfig {
  lineHeight?: number;
  font?: string;
}
export {};
