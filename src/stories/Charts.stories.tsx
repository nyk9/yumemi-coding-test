import { Meta, StoryObj } from "@storybook/react";
import PopulationLine from "@/components/elements/PopulationLine/PopulationLine";
import { PopulationResponse } from "@/types/populations/populations";
import { Prefectures, PrefecturesResponse } from "@/types/prefectures/prefectures";

const meta: Meta<typeof PopulationLine> = {
  title: "PopulationLine",
  component: PopulationLine
};
export default meta;

type Story = StoryObj<typeof PopulationLine>;

const generatePrefs = (len: number): PrefecturesResponse => {
  const result = new Array<Prefectures>(len);
  for (let i = 0; i < len; i++) {
    result[i] = {
      prefCode: i + 1,
      prefName: "ダミー" + String(i + 1)
    };
  }
  return {
    massage: null,
    result: result
  };
};
const prefectures = generatePrefs(47);

const generatePoplus = (len: number): PopulationResponse[] => {
  const result = new Array<PopulationResponse>(len);
  for (let i = 0; i < len; i++) {
    result[i] = {
      message: null,
      result: {
        boundaryYear: 2020,
        data: [
          {
            label: "総人口",
            data: [
              {
                year: 1900,
                value: Math.random() * 1000000,
                rate: 0
              },
              {
                year: 2000,
                value: Math.random() * 1000000,
                rate: 0
              },
              {
                year: 2010,
                value: Math.random() * 1000000,
                rate: 0
              }
            ]
          }
        ]
      }
    };
  }
  return result;
};

const populations = generatePoplus(47);

export const Line: Story = {
  args: {
    checkedPrefectures: new Array<number>(47).fill(0).map((_, i) => i + 1),
    prefectures,
    populations
  }
};

export const Tohoku: Story = {
  args: {
    checkedPrefectures: [1, 2, 3, 4, 5, 6, 7],
    prefectures,
    populations
  }
};

export const Kanto: Story = {
  args: {
    checkedPrefectures: [8, 9, 10, 11, 12, 13, 14],
    prefectures,
    populations
  }
};

export const Chubu: Story = {
  args: {
    checkedPrefectures: [15, 16, 17, 18, 19, 20, 21, 22, 23],
    prefectures,
    populations
  }
};

export const Kansai: Story = {
  args: {
    checkedPrefectures: [24, 25, 26, 27, 28, 29, 30],
    prefectures,
    populations
  }
};

export const Chugoku: Story = {
  args: {
    checkedPrefectures: [31, 32, 33, 34, 35],
    prefectures,
    populations
  }
};

export const Shikoku: Story = {
  args: {
    checkedPrefectures: [36, 37, 38, 39],
    prefectures,
    populations
  }
};

export const Kyushu: Story = {
  args: {
    checkedPrefectures: [40, 41, 42, 43, 44, 45, 46, 47],
    prefectures,
    populations
  }
};
