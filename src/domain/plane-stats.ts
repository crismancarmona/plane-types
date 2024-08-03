import { PlaneState } from "./plane-state";

export interface PlaneStats {
  x: number;
  y: number;
  z: number;
  velocity: number;
  direction: number;
  state: PlaneState;
  angle: number;
}
