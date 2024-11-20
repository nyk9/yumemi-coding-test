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
}) {
  const [lineData, setLineData] = useState<data>({ labels: [], datasets: [] });
  const options = {
    responsive: true,
    plugins: {
      legened: {
        position: "buttom"
      },
      title: {
        display: true,
        text: ""
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
      props.populations[0].result.data[0].data.map((populData) => {
        label.push(String(populData.year));
      });
      const newDataSets = props.checkedPrefectures.map((pref) => {
        const data: number[] = [];
        const prefName = getPrefName(props.prefectures.result, pref);
        props.populations[pref - 1].result.data[0].data.map((populData) => {
          data.push(populData.value);
        });
        return { label: prefName, data, borderColor: setPrefColors[pref - 1] };
      });
      setLineData({ labels: label, datasets: newDataSets });
    }
  }, [props.checkedPrefectures, props.populations, props.prefectures]);

  return (
    <div className="bg-blue-50 min-w-full">
      <Line options={options} data={lineData} />
    </div>
  );
}
