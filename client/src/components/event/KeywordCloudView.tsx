import React, { useCallback, useEffect, useMemo, useState } from "react";
import { PhotoAlbumViewProp } from "../../types/event";
import WordCloud from "../../components/WordCloud/index";
import "./KeywordCloudView.scss";

const NotUsedWords = ["등", "및", "내"];

export interface SortedArrayItem {
  text: string;
  value: number;
}

function KeywordCloudView({ events }: PhotoAlbumViewProp) {
  const [cleanedData, setCleanedData] = useState<SortedArrayItem[]>([]);
  const eventsData = useMemo(() => events, []);

  useEffect(() => {
    setCleanedData(cleanData);
    console.log(cleanData);
  }, [events?.[0].category]);

  const sortedWords = useCallback(
    (arr: SortedArrayItem[][]): SortedArrayItem[] => {
      return arr.reduce((acc, curr) => {
        return [...acc, ...curr];
      }, []);
    },
    []
  );

  const cleanData = useMemo(() => {
    const tempData = eventsData.map((event, index) => {
      const words = event.title
        .split(" ")
        .map((word) =>
          // 특수문자 제거
          word.replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g, "")
        )
        .filter((word) => word !== "" && !NotUsedWords.includes(word))
        .map((word) => {
          const newObj = { text: "", value: 0 };
          newObj.text = word;
          newObj.value = event.importance * 10;

          return newObj as SortedArrayItem;
        });

      // 각 배열 요소 : Event별 title을 text, value 속성의 오브젝트로 구성된 배열로 변환
      return words;
    });

    return sortedWords(tempData);
  }, []);

  return (
    <section className="cloud-container">
      <WordCloud words={cleanData} />
    </section>
  );
}

export default KeywordCloudView;
