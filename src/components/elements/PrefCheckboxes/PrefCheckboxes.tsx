"use client";

import { setPrefColors } from "@/types/prefectures/setPrefColors";
import { PrefecturesResponse } from "@/types/prefectures/prefectures";

export function PrefCheckboxes(data: {
  prefs: PrefecturesResponse;
  handleFunc(prefCode: number): void;
}) {
  return (
    <div>
      <form className="flex flex-wrap w-full ">
        {data.prefs?.result.map((pref) => {
          return (
            <label key={pref.prefCode} className="p-1 flex flex-row w-1/3  sm:w-1/4 xl:w-1/5">
              <input
                type="checkbox"
                value={pref.prefCode}
                onChange={() => data.handleFunc(pref.prefCode)}
              />
              <span
                className="border-b-4"
                style={{
                  borderBottomColor: setPrefColors[pref.prefCode - 1]
                }}
              >
                {pref.prefName}
              </span>
            </label>
          );
        })}
      </form>
    </div>
  );
}
