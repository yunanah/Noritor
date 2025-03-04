import { WorkItem } from "../types/event";

export const DefaultWorkData: WorkItem[] = [
  {
    companyName: "롯데카드",
    companyDesc:
      "금융 무료 앱 인기차트 30위권 , 일간 앱/  웹서비스 사용자. 000명 서비스 ",
    startDate: "20221101",
    endDate: undefined,
    role: "Front-end Developer",
    team: "10~20",
    skillSet: [
      { name: "Vue.js", imgName: "vuejs.svg", kind: "Framework" },
      { name: "Nuxt.js", imgName: "nuxt.svg", kind: "Framework" },
      { name: "Javascript", imgName: "javascript.svg", kind: "language" },
      { name: "typescript", imgName: "typescript.svg", kind: "language" },
      { name: "HTML", imgName: "html.svg", kind: "language" },
      { name: "CSS", imgName: "css.svg", kind: "language" },
      { name: "SASS", imgName: "sass.svg", kind: "language" },
      { name: "Git", imgName: "git.svg", kind: "tool" },
      { name: "Bitbucket", imgName: "bitbucket.svg", kind: "tool" },
      { name: "Jira", imgName: "jira.svg", kind: "tool" },
    ],
    projects: [
      {
        projName: "롯데카드 앱, 웹 서비스 운영 및 유지 보수",
        projConts: [
          "~하게 개선된 환경에서 개발하며 역량을 업그레이드.",
          "매주 정기배포 요일까지의 1주일이 배포 주기로 이미지 및 정적 파일 서버, 가맹점주 전용 서비스의 배포를 담당.",
          "디지로카 앱은 변경도가 적은 서비스를 제외한 나머지 복잡한 비즈니스 프로세스를 대부분 웹뷰로 제공. 유저에게 매끄러운 UX를 제공하기 위해, 단순히 웹 내의 로직뿐만 아니라 네이티브 관점에서도 함께 고민. ",
          "앱 사용 유도의 핵심 창구인 카드 서비스 담당(2024.01-현재). 마케팅 요소들이 카드 신청이나 혜택/실적 서비스 내에 민감한 이해관계를 가진채로 녹아들어 있어 UI 및 비즈니스 로직의 변동성이 큼. 담당업무로 맡아오면서 빠른 개발과 검증, 배포 환경을 제공. ",
          "메인 웹과 도메인이 다른 가맹점주 전용 웹의 회원가입/로그인 통합 아키텍처 개선건의 설계부터 개발에 참여. 하지만 서버 담당자와 서버의 대응 방식에 대한 불충분한 이해로 테스트중 회원가입 중복이 발생. 양쪽의 프로세스를 반드시 정확히 이해하는것이 매우 중요하다는 것을 깨달음.",
        ],
        startDt: "20221101",
        endDt: undefined,
      },
    ],
  },
  {
    companyName: "점프컴퍼니(주)",
    companyDesc:
      "소프트웨어 개발/공급, 부동산 분양대행 등 응용 소프트웨어 개발 및 공급업체",
    startDate: "20220425",
    endDate: "20220902",
    role: "Front-end Developer",
    team: "5~10",
    skillSet: [
      { name: "React", imgName: "react.svg", kind: "Framework" },
      { name: "React-Native", imgName: "react-native.svg", kind: "Framework" },
      { name: "Next.js", imgName: "nextjs.svg", kind: "Framework" },
      { name: "Javascript", imgName: "javascript.svg", kind: "language" },
      { name: "typescript", imgName: "typescript.svg", kind: "language" },
      { name: "HTML", imgName: "html.svg", kind: "language" },
      { name: "CSS", imgName: "css.svg", kind: "language" },
      { name: "Git", imgName: "git.svg", kind: "tool" },
      { name: "Bitbucket", imgName: "", kind: "tool" },
      { name: "Jira", imgName: "jira.svg", kind: "tool" },
    ],
    projects: [
      {
        projName: "프리미엄체크 앱 개발 참여",
        projConts: [
          "필터기능등주요기능개발에참여",
          "React-Query, Mobx-state-tree 등을 활용한 프로젝트 구조 설계에 참여.",
        ],
        startDt: "20220501",
        endDt: "20220902",
      },
      {
        projName: "프리미엄체크 웹 개발 담당",
        projConts: [
          "앱개발프로젝트와컴포넌트구조설계를동일시하여개발시간단축",
          "SEO 최적화와 Google Analytics 설정을 통해 웹 내 이용 분석에 도움",
          "Next.js와 Netlify 배포 환경을 이용한 서비스 유도 및 마케팅 목적의 웹 페이지 개발",
        ],
        startDt: "20220501",
        endDt: "20220602",
      },
    ],
  },
  {
    companyName: "스무슬리",
    companyDesc:
      "Smoosly하게 추천하는 여성 신체사이즈 분석 및 제품 추천 서비스. 대학생 스타트업 팀 MVP 개발 단계 첫 개발자 멤버로 기획/디자인/개발/배포 참여",
    startDate: "20211006",
    endDate: "20220401",
    role: "Front-end Developer",
    team: "1~5",
    skillSet: [
      { name: "Vue.js", imgName: "vuejs.svg", kind: "Framework" },
      { name: "Javascript", imgName: "javascript.svg", kind: "language" },
      { name: "HTML", imgName: "html.svg", kind: "language" },
      { name: "CSS", imgName: "css.svg", kind: "language" },
      { name: "SASS", imgName: "sass.svg", kind: "language" },
      { name: "Figma", imgName: "figma.svg", kind: "tool" },
      { name: "Slack", imgName: "slack.svg", kind: "tool" },
    ],
    projects: [
      {
        projName: "3차 MVP 배포용 웹사이트 프론트엔드 개발 담당",
        projConts: [
          "Figma로 UI 디자인 전체 직접 작업",
          "smoosly.com 사이트 프론트엔드 전체 개발 담당",
          "상태관리 라이브러리를 추가하여 props 복잡도를 개선",
          "반응형 디자인, 비즈니스로직 기획 등의 개발 전반에 참여",
          "모듈 번들러(webpack)를 활용해 페이지 로딩에 걸리는 시간 단축",
          "사용자 관점으로 기능 및 비즈니스 로직을 추가하여 10% MAU 증가",
          "팀원들과 애자일을 적용하여 같은 기간 내에 개발 목표보다 15%를 더 완료",
        ],
        startDt: "20221001",
        endDt: "20220331",
      },
    ],
  },
  {
    companyName: "엘리스",
    companyDesc:
      "AI 기반 코딩 교육 서비스, 자체 웹 IDE를 통한 프로그래밍 특화 강의 제공",
    startDate: "20210302",
    endDate: "20210618",
    role: "Content Developer",
    team: "1~10",
    skillSet: [
      { name: "Python", imgName: "python.svg", kind: "language" },
      { name: "Slack", imgName: "slack.svg", kind: "tool" },
    ],
    projects: [
      {
        projName: "알고리즘 교육 자료 기획 및 문제 개발",
        projConts: [
          "알고리즘 교육 프로그램의 기획과 문제 개발 및 자료 제작에 참여",
        ],
        startDt: "20210302",
        endDt: "20210618",
      },
    ],
  },
];
