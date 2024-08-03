import { PlaneStats } from "./plane-stats";
import { PlaneState } from "./plane-state";
import { PlaneFunction } from "./plane-function";

export class Plane {
  stats: Partial<PlaneStats> = {
    x: 0,
    y: 0,
    z: 0,
    state: PlaneState.OFF,
  };
  isOn?: boolean = false;
  functions?: Map<PlaneFunction, (plane: Plane) => void> = new Map<
    PlaneFunction,
    (plane: Plane) => void
  >();
  updatedAt?: Date;

  constructor(
    readonly id: string,
    readonly numberId: number,
    readonly port: string
  ) {}

  update() {
    this.updatedAt = new Date();
  }

  getDTO(): PlaneDto {
    const dto = { ...this };
    delete dto.functions;

    return dto;
  }
}

export class PlaneDto implements Partial<Plane> {}
