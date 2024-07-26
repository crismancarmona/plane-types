export class Plane {
  currentPosition?: { x: number; y: number; z: number } = { x: 0, y: 0, z: 0 };
  isOn?: boolean = false;
  intervals?: NodeJS.Timeout[] = [];
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
