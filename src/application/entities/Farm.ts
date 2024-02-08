export class Farm {
  id: string;
  name: string;
  city: string;
  state: string;
  total_area: number;
  arable_area: number;
  vegetation_area: number;
  crops: string[];

  constructor(
    id: string,
    name: string,
    city: string,
    state: string,
    total_area: number,
    arable_area: number,
    vegetation_area: number,
    crops: string[],
    producer: string
  ) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.state = state;
    this.total_area = total_area;
    this.arable_area = arable_area;
    this.vegetation_area = vegetation_area;
    this.crops = crops;
  }
}
