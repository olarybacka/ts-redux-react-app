declare module "calendar" {
  export class Calendar {
    constructor(firstDayOfWeek: number)
    monthDays(year: number, month: number): number[][]
  }
}
