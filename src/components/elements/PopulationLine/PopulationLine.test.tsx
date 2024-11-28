import { PopulationResponse } from "@/types/populations/populations";
import { PrefecturesResponse } from "@/types/prefectures/prefectures";
import { render, screen } from "@testing-library/react";
import PopulationLine from "./PopulationLine";

const population: PopulationResponse[] = [
  {
    message: null,
    result: {
      boundaryYear: 2020,
      data: [
        {
          label: "北海道",
          data: [
            {
              year: 1960,
              value: 10000,
              rate: 10
            },
            {
              year: 1965,
              value: 11000,
              rate: 11
            }
          ]
        }
      ]
    }
  },
  {
    message: null,
    result: {
      boundaryYear: 2020,
      data: [
        {
          label: "青森県",
          data: [
            {
              year: 1960,
              value: 11000,
              rate: 11
            },
            {
              year: 1965,
              value: 10000,
              rate: 10
            }
          ]
        }
      ]
    }
  }
];

const prefectures: PrefecturesResponse = {
  massage: null,
  result: [
    {
      prefCode: 1,
      prefName: "北海道"
    },
    {
      prefCode: 2,
      prefName: "青森県"
    }
  ]
};

const checkedPrefectures: number[] = [];

describe("PopulationLine", () => {
  beforeEach(() => {
    render(
      <PopulationLine
        populations={population}
        prefectures={prefectures}
        checkedPrefectures={checkedPrefectures}
      />
    );
  });

  test("グラフが正しくレンダリングされる", () => {
    const chartElement = screen.getByRole("img");
    expect(chartElement).toBeInTheDocument();
  });
});
