"use client";

import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { PopulationResponse } from "@/types/populations/populations";
// import { usePrefectures } from "@/hooks/usePrefectures";
import { data } from "@/types/lines/lines";
import { getPrefName } from "@/lib/getPrefectures";
import { PrefecturesResponse } from "@/types/prefectures/prefectures";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from "chart.js";
import { setPrefColors } from "@/types/prefectures/setPrefColors";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function PopulationLine(props: {
  populations: PopulationResponse[];
  prefectures: PrefecturesResponse;
  checkedPrefectures: number[];
  selectedPopulType: number;
}) {
  const [lineData, setLineData] = useState<data>({ labels: [], datasets: [] });
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legened: {
        position: "buttom"
      },
      title: {
        display: true,
        text: props.populations[0]
          ? props.populations[0].result.data[props.selectedPopulType].label
          : ""
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  useEffect(() => {
    if (props.checkedPrefectures.length >= 1) {
      const label: string[] = [];
      props.populations[0].result.data[props.selectedPopulType].data.map((populData) => {
        label.push(String(populData.year));
      });
      const newDataSets = props.checkedPrefectures.map((pref) => {
        const data: number[] = [];
        const prefName = getPrefName(props.prefectures.result, pref);
        props.populations[pref - 1].result.data[props.selectedPopulType].data.map((populData) => {
          data.push(populData.value);
        });
        return { label: prefName, data, borderColor: setPrefColors[pref - 1] };
      });
      setLineData({ labels: label, datasets: newDataSets });
    } else {
      return setLineData({ labels: [], datasets: [] });
    }
  }, [props.checkedPrefectures, props.populations, props.prefectures, props.selectedPopulType]);
  if (lineData.datasets.length === 0) {
    return <div>都道府県を選択してください</div>;
  }

  return (
    <div className="bg-blue-50 min-w-full max-w-full h-96 max-h-screen">
      <Line
        className="min-w-full max-w-full min-h-full max-h-full"
        options={options}
        data={lineData}
      />
    </div>
  );
}
