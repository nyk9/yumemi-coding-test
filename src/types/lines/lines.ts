export interface data {
  labels: string[];
  datasets: datasets[];
}

export interface datasets {
  label: string;
  data: number[];
}
