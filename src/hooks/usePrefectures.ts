"use client";
import { useEffect, useState } from "react";

export const usePrefectures = () => {
  const [checkedPrefectures, setCheckedPrefectures] = useState<number[]>([]);
  const handleCheckedPrefectures = (prefCode: number) => {
    if (checkedPrefectures.includes(prefCode)) {
      setCheckedPrefectures(checkedPrefectures.filter((i) => i !== prefCode));
    } else {
      setCheckedPrefectures([...checkedPrefectures, prefCode]);
    }
  };
  useEffect(() => {}, [checkedPrefectures]);
  return { checkedPrefectures, handleCheckedPrefectures };
};