import { Action } from "./action";

export class ProcessActionDto {
  planeId!: string;
  action!: Action;
  params?: Record<string, string>;
}
