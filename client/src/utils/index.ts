// date를 yyyy.mm 형태로 변환
const dateFormat = (date: string) => {
  let timeData = new Date(
    Number(date.substring(0, 4)),
    Number(date.substring(4, 6))
  );

  return `${timeData.getFullYear()}.${String(timeData.getMonth()).padStart(
    2,
    "0"
  )}`;
};

export { dateFormat };
