export class UpdateSprite implements ISystem {
  faceMappingsX = 0
  faceMappingsY = 1
  currentInterval = 0
  frameSizeX: number
  frameSizeY: number
  interval: number
  plane: PlaneShape
  constructor(
    rows: number,
    columns: number,
    interval: number,
    plane: PlaneShape
  ) {
    this.frameSizeX = 1 / rows
    this.frameSizeY = 1 / columns
    this.interval = interval
    this.plane = plane

    this.faceMappingsY = 1 - this.frameSizeY
  }

  update(dt: number) {
    this.currentInterval += dt
    if (this.currentInterval > this.interval) {
      this.currentInterval = 0

      this.faceMappingsX += this.frameSizeX
      if (this.faceMappingsX >= 1) {
        this.faceMappingsX = 0
        this.faceMappingsY += this.frameSizeY
        if (this.faceMappingsY >= 1) {
          this.faceMappingsY = 0
        }
      }

      this.plane.uvs = [
        this.faceMappingsX,
        this.faceMappingsY,
        this.faceMappingsX + this.frameSizeX,
        this.faceMappingsY,
        this.faceMappingsX + this.frameSizeX,
        this.faceMappingsY + this.frameSizeY,
        this.faceMappingsX,
        this.faceMappingsY + this.frameSizeY,
        this.faceMappingsX,
        this.faceMappingsY,
        this.faceMappingsX + this.frameSizeX,
        this.faceMappingsY,
        this.faceMappingsX + this.frameSizeX,
        this.faceMappingsY + this.frameSizeY,
        this.faceMappingsX,
        this.faceMappingsY + this.frameSizeY
      ]
    }
  }
}
