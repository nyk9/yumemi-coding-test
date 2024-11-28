export interface data {
  labels: string[];
  datasets: datasets[];
}

export interface datasets {
  label: string;
  data: number[];
  borderColor?: string;
  borderDash?: number[];
  pointStyle?:
    | "circle"
    | "cross"
    | "crossRot"
    | "dash"
    | "line"
    | "rect"
    | "rectRounded"
    | "rectRol"
    | "star"
    | "triangle"
    | false;
}
