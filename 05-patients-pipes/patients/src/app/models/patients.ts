export interface Patient {
  id?: number,
  name: string,
  sex?: string,
  age?: number,
  diagnostics?: Array<string>,
  fee?: number,
  releaseDate?: Date
}
