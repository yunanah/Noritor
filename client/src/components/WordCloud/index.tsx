import React, { useCallback, useMemo } from "react";
import WordCloud from "react-d3-cloud";
import { SortedArrayItem } from "../event/KeywordCloudView";
import { useNavigate } from "react-router-dom";

type WordCloudProp = {
  words: KeyWordData[];
};

export type KeyWordData = SortedArrayItem & { keyword: string };

const MAX_FONT_SIZE = 44;
const MIN_FONT_SIZE = 14;
const MAX_FONT_WEIGHT = 700;
const MIN_FONT_WEIGHT = 400;

function WordCloudComponent({ words }: WordCloudProp) {
  const navigate = useNavigate();

  const [minImportance, maxImportance] = useMemo(() => {
    const min = Math.min(...words.map((w) => w.value));
    const max = Math.max(...words.map((w) => w.value));
    return [min, max];
  }, [words]);

  const calculateFontSize = useCallback(
    (wordOccurrences: number) => {
      const normalizedValue =
        (wordOccurrences - minImportance) / (maxImportance - minImportance);
      const fontSize =
        MIN_FONT_SIZE + normalizedValue * (MAX_FONT_SIZE - MIN_FONT_SIZE);
      return Math.round(fontSize);
    },
    [maxImportance, minImportance]
  );

  const calculateFontWeight = useCallback(
    (wordOccurrences: number) => {
      const normalizedValue =
        (wordOccurrences - minImportance) / (maxImportance - minImportance);
      const fontWeight =
        MIN_FONT_WEIGHT + normalizedValue * (MAX_FONT_WEIGHT - MIN_FONT_WEIGHT);
      return Math.round(fontWeight);
    },
    [maxImportance, minImportance]
  );

  const goToDetailPage = (keyword: string) => {
    // 키워드에 해당하는 경험의 상세 페이지로 이동
    navigate(`/event/${keyword?.replace(" ", " ")}`);
  };

  return (
    <section className="">
      <WordCloud
        width={400}
        height={800}
        font={"Poppins"}
        data={words}
        rotate={0}
        padding={1}
        random={() => 0.5}
        fontWeight={(word) => calculateFontWeight(word.value)}
        fontSize={(word) => calculateFontSize(word.value)}
        onWordClick={(e, word) =>
          goToDetailPage((word as KeyWordData)["keyword"])
        }
      />
    </section>
  );
}

export default WordCloudComponent;
