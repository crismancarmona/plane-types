import { Action } from "./Action";

export class ProcessActionDto {
  action!: Action;
  params?: Record<string, string>;
}
