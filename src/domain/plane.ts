export class Plane {
  currentPosition?: { x: number; y: number; z: number } = { x: 0, y: 0, z: 0 };
  isOn?: boolean = false;
  intervals?: NodeJS.Timeout[] = [];
  port?: string;

  constructor(readonly id: string, readonly numberId: number) {}
}

export class PlaneDto implements Partial<Plane> {}
