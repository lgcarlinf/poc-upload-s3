export interface IEnv {
  getOrThrow(key: string): string;
}
