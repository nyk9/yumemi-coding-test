export interface PopulationResponse {
  message: null;
  result: Populaiton;
}

export interface Populaiton {
  boundaryYear: number;
  data: PopulationTypeData[];
}

interface PopulationTypeData {
  label: string;
  data: PopulationBaseData[];
}

interface PopulationBaseData {
  year: number;
  value: number;
  rate?: number;
}
