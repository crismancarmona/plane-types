import { PlaneStats } from "./plane-stats";
import { PlaneState } from "./plane-state";
import { PlaneIntervals } from "./plane-intervals";

export class Plane {
  stats: Partial<PlaneStats> = {
    x: 0,
    y: 0,
    z: 0,
    state: PlaneState.OFF,
  };
  isOn?: boolean = false;
  intervals?: Map<PlaneIntervals, NodeJS.Timeout> = new Map<
    PlaneIntervals,
    NodeJS.Timeout
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
    delete dto.intervals;

    return dto;
  }
}

export class PlaneDto implements Partial<Plane> {}
