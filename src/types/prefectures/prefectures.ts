export interface Prefectures {
    prefCode: number;
    prefName: string;
}

export interface PrefecturesResponse {
    massage: null;
    result: Prefectures[];
}