import React, { useCallback, useEffect, useMemo, useState } from "react";
import { PhotoAlbumViewProp } from "../../types/event";
import WordCloud, { KeyWordData } from "../../components/WordCloud/index";
import "./KeywordCloudView.scss";

const NotUsedWords = ["등", "및", "내"];

export interface SortedArrayItem {
  text: string;
  value: number;
}

function KeywordCloudView({ events }: PhotoAlbumViewProp) {
  const [cleanedData, setCleanedData] = useState<KeyWordData[]>([]);
  const eventsData = useMemo(() => events, []);

  const sortedWords = useCallback((arr: KeyWordData[][]): KeyWordData[] => {
    return arr.reduce((acc, curr) => {
      return [...acc, ...curr];
    }, []);
  }, []);

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
          const newObj = { text: "", value: 0, keyword: "" };
          newObj.text = word;
          newObj.value = event.importance;
          newObj.keyword = event.keyWord;

          return newObj as KeyWordData;
        });

      // 각 배열 요소 : Event별 title을 text, value 속성의 오브젝트로 구성된 배열로 변환
      return words;
    });

    return sortedWords(tempData);
  }, []);

  useEffect(() => {
    setCleanedData(cleanData);
  }, [events?.[0]?.category, cleanData]);

  return (
    <>
      <section className="cloud-container">
        {/* TODO: 이미 클릭한 단어 표시 (고민해보기) */}
        <WordCloud words={cleanData} />
      </section>
    </>
  );
}

export default KeywordCloudView;
