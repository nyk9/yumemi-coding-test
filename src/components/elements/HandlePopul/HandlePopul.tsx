"use client";

import { Dispatch } from "react";
import { SetStateAction } from "react";

export default function HandlePopul(params: { setState: Dispatch<SetStateAction<number>> }) {
  const handleState = params.setState;
  return (
    <div>
      <button
        className="p-1"
        onClick={() => {
          handleState(0);
        }}
      >
        総人口
      </button>
      <button
        className="p-1"
        onClick={() => {
          handleState(1);
        }}
      >
        年少人口
      </button>
      <button
        className="p-1"
        onClick={() => {
          handleState(2);
        }}
      >
        生産年齢人口
      </button>
      <button
        className="p-1"
        onClick={() => {
          handleState(3);
        }}
      >
        老年人口
      </button>
    </div>
  );
}
