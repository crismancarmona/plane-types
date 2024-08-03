import { Action } from "./action";

export class ProcessActionDto {
  action!: Action;
  params?: Record<string, string>;
}
