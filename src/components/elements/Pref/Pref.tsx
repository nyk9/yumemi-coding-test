"use client";

import { usePrefectures } from "@/hooks/usePrefectures";
import { PrefCheckboxes } from "../PrefChecboxes/PrefCheckboxes";
import { PopulationResponse } from "@/types/populations/populations";
import { PrefecturesResponse } from "@/types/prefectures/prefectures";
import PopulationLine from "../PopulationLine/PopulationLine";
import { useState } from "react";
import HandlePopul from "../HandlePopul/HandlePopul";

export default function Pref(params: {
  prefs: PrefecturesResponse;
  populations: PopulationResponse[];
}) {
  const { checkedPrefectures, handleCheckedPrefectures } = usePrefectures();
  const [selectedPopulType, setSelectedPopulType] = useState(0);
  return (
    <>
      <PrefCheckboxes
        prefs={params.prefs}
        handleFunc={(prefCode: number) => handleCheckedPrefectures(prefCode)}
      />
      <HandlePopul setState={setSelectedPopulType} />
      <PopulationLine
        populations={params.populations}
        prefectures={params.prefs}
        checkedPrefectures={checkedPrefectures}
        selectedPopulType={selectedPopulType}
      />
    </>
  );
}
