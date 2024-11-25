"use client";

import { usePrefectures } from "@/hooks/usePrefectures";
import { PrefCheckboxes } from "../PrefCheckboxes/PrefCheckboxes";
import { PopulationResponse } from "@/types/populations/populations";
import { PrefecturesResponse } from "@/types/prefectures/prefectures";
import PopulationLine from "../PopulationLine/PopulationLine";

export default function PageViewer(params: {
  prefs: PrefecturesResponse;
  populations: PopulationResponse[];
}) {
  const { checkedPrefectures, handleCheckedPrefectures } = usePrefectures();
  return (
    <>
      <PrefCheckboxes
        prefs={params.prefs}
        handleFunc={(prefCode: number) => handleCheckedPrefectures(prefCode)}
      />
      <PopulationLine
        populations={params.populations}
        prefectures={params.prefs}
        checkedPrefectures={checkedPrefectures}
      />
    </>
  );
}
