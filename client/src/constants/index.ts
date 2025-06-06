import { EventItem, WorkItem } from "../types/event";

// "~하게 개선된 환경에서 개발하며 역량을 업그레이드.",
export const DefaultWorkData: WorkItem[] = [
  {
    companyName: "롯데카드",
    companyDesc: "금융 무료 앱 인기차트 30위권 서비스",
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
          "일간 사용자 수십만 명 규모의 앱 및 웹 서비스 유지보수 및 기능 개선",
          "디카드 신청, 혜택·실적 페이지 등 마케팅과 민감한 로직이 얽힌 핵심 화면 담당",
          "빠른 개발, 검증, 배포 환경을 구축하여 반복적인 UI/UX 수정에 유연하게 대응",
          "도메인이 다른 가맹점주 전용 웹과의 회원가입/로그인 통합 아키텍처 개선에 참여(API 구조에 대한 오해로 중복 가입 이슈 발생 → 명세 재검토 및 공통 예외 처리 방식 개선)",
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
        projName: "프리미엄체크 웹, 앱 개발 참여",
        projConts: [
          "[프리미엄체크 앱] React-Query 및 Mobx-state-tree 도입해 필터 조건 상태 공유 구조 개선",
          "팀 내 러닝 커브 완화를 위해 상태 설계 및 사용법 문서화 및 공유",
          "[프리미엄체크 웹] Next.js 기반 SSR 사이트로 검색 노출, 초기 로딩 성능 개선",
          "앱과 웹의 컴포넌트 구조 통일을 통해 개발 속도 향상",
          "Google Analytics 연동, SEO 메타 정보 구성으로 마케팅 데이터 분석 기반 마련",
        ],
        startDt: "20220501",
        endDt: "20220902",
      },
      // {
      //   projName: "프리미엄체크 웹 개발 담당",
      //   projConts: [
      //     "앱개발 프로젝트와 컴포넌트 구조 설계를 동일시하여 개발 시간 단축",
      //     "SEO 최적화와 Google Analytics 설정을 통해 웹 내 이용 분석에 도움",
      //     "Next.js와 Netlify 배포 환경을 이용한 서비스 유도 및 마케팅 목적의 웹 페이지 개발",
      //   ],
      //   startDt: "20220501",
      //   endDt: "20220602",
      // },
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
          "Figma 기반 UI 전면 설계 및 사용자 흐름 중심 컴포넌트 구조 설계",
          "상태 관리 라이브러리 도입으로 사용자 입력·추천 결과 상태 관리 개선",
          "Webpack 최적화로 로딩 속도 개선",
          "기능 개선 이후 MAU 10% 증가, 개발 목표 15% 초과 달성",
        ],
        startDt: "20221001",
        endDt: "20220331",
      },
    ],
  },
  {
    companyName: "엘리스",
    companyDesc:
      "AI 기반 코딩 교육 서비스, AI 기반 프로그래밍 교육에 특화된 자체 IDE 제공",
    startDate: "20210302",
    endDate: "20210618",
    role: "Content Developer - Intern",
    team: "1~10",
    skillSet: [
      { name: "Python", imgName: "python.svg", kind: "language" },
      { name: "Slack", imgName: "slack.svg", kind: "tool" },
    ],
    projects: [
      {
        projName: "알고리즘 교육 자료 기획 및 문제 개발",
        projConts: [
          "초중등 대상 알고리즘 교육 콘텐츠 및 문제 개발 참여",
          "프로그래밍 교육 커리큘럼 구성 및 피드백을 기반으로 자료 개선",
        ],
        startDt: "20210302",
        endDt: "20210618",
      },
    ],
  },
];

export const defaultEventsData: EventItem[] = [
  {
    id: "67b48ad5318ec1fe0b684037",
    title: "컴퓨터과학 전공을 선택한 이유..",
    importance: 2,
    description:
      "처음에는 과탐2 고집하다가 결국 재수를 했고, 운명처럼 신설 학과(자율전공+공학부)에 입학했다. 공학과 자유로움이 공존할 수 있을까 반신반의했지만, 오히려 공학이 너무 재미있어서 놀겠다는 다짐은 사라졌고, 전공 선택 때 컴퓨터과학을 택하는 인생의 전환점을 맞이했다.",
    category: 1,
    eventType: 2,
    startDate: "20180304",
    endDate: "20230215",
    descImaegsList: [
      {
        fileName: "t2_c1_majorWandering_1.webp",
        desc: "데이터사이언스 강의 시간",
        fileType: "IMG",
      },
      {
        fileName: "t2_c1_majorWandering_2.webp",
        desc: "해커톤 대회",
        fileType: "IMG",
      },
      {
        fileName: "t2_c1_majorWandering_3.webp",
        desc: "해커톤 대회 밤샘 현장",
        fileType: "IMG",
      },
      {
        fileName: "t2_c1_majorWandering_4.webp",
        desc: "해커톤 서비스 소개",
        fileType: "IMG",
      },
      {
        fileName: "t2_c1_majorWandering_5.webp",
        desc: "해커톤 장려상 수상 기념",
        fileType: "IMG",
      },
      {
        fileName: "t2_c1_majorWandering_6.webp",
        desc: "교내 AWS 수료증",
        fileType: "IMG",
      },
      {
        fileName: "t2_c1_majorWandering_7.webp",
        desc: "알고리즘 강의",
        fileType: "IMG",
      },
      {
        fileName: "t2_c1_majorWandering_8.webp",
        desc: "시스템 디자인 강의시간",
        fileType: "IMG",
      },
      {
        fileName: "t2_c1_majorWandering_9.webp",
        desc: "어려운 컴공 강의 속에서..",
        fileType: "IMG",
      },
    ],
    repImgFileName: "t2_c1_majorWandering_1.webp",
    repImgFileType: "IMG",
    keyWord: "전공방황",
    descImagesList: [],
  },
  {
    id: "67b48c7d318ec1fe0b684038",
    title: "데이터 분석으로 시작된 개발자로의 한걸음~",
    importance: 1,
    description:
      "데이터 분석을 진지하게 해보고 싶어서 연합 금융데이터 학회에 들어갔다. 방학에도 매주 모여 수학/통계 공부를 하고, 캐글 타이타닉 문제까지 풀면서 실력을 쌓았다. 그런데 이론만 깊어가는 게 답답해서, 직접 눈에 보이는 뭔가를 만들고 싶다는 생각이 들었다. 그때부터 개발 공부를 시작하게 됐다.",
    category: 2,
    eventType: 2,
    startDate: "20191201",
    endDate: "20200801",
    descImaegsList: [
      {
        fileName: "t2_c2_lifeOfAcademy_1.webp",
        desc: "데이터분석 학회에서 만든 그래프",
        fileType: "IMG",
      },
      {
        fileName: "t2_c2_lifeOfAcademy_2.webp",
        desc: "내가 들어간 금융 데이터 학회 포스터",
        fileType: "IMG",
      },
      {
        fileName: "t2_c2_lifeOfAcademy_3.webp",
        desc: "토요일 아침마다 모여서 공부하는 학회원들",
        fileType: "IMG",
      },
      {
        fileName: "t2_c2_lifeOfAcademy_4.webp",
        desc: "통계학 수업까지 신청하는 경지..",
        fileType: "IMG",
      },
      {
        fileName: "t2_c2_lifeOfAcademy_5.webp",
        desc: "통계학 공부에 빠진(?) 나",
        fileType: "IMG",
      },
    ],
    repImgFileName: "t2_c2_lifeOfAcademy_1.webp",
    repImgFileType: "IMG",
    keyWord: "데이터학회",
    descImagesList: [],
  },
  {
    id: "67b48e48318ec1fe0b684039",
    title: "개발자가 되어서 돌아오겠다 (말하고 휴학이라 쓴다)",
    importance: 3,
    description:
      "휴학하고 진짜 제대로 공부하자고 결심했다. 나한테 잘 맞는 자료를 고르는 안목은 있었고, 강의 선생님들의 포인트를 잡아가며 실력을 키웠다. React와 Vue를 번갈아 공부하면서, 프론트엔드의 매력에 빠져들었던 시기였다.",
    category: 1,
    eventType: 2,
    startDate: "20200901",
    endDate: "20210228",
    descImaegsList: [
      {
        fileName: "t2_c1_absence_1.webp",
        desc: "개발하다 보니 맥북에 이름을 붙여준다",
        fileType: "IMG",
      },
      {
        fileName: "t2_c1_absence_2.webp",
        desc: "내가 자바스크립트 책을 읽다니..",
        fileType: "IMG",
      },
      {
        fileName: "t2_c1_absence_3.webp",
        desc: "학기 때보다 더 열심히 공부했다",
        fileType: "IMG",
      },
      {
        fileName: "t2_c1_absence_4.webp",
        desc: "아침 루틴까지 섭렵한 개발 공부",
        fileType: "IMG",
      },
    ],
    repImgFileName: "t2_c1_absence_1.webp",
    repImgFileType: "IMG",
    keyWord: "휴학",
    descImagesList: [],
  },
  {
    id: "67b48fe2318ec1fe0b68403a",
    title: "프론트엔드 개발자 어깨뽕 달렸잖아",
    importance: 4,
    description:
      "공부만으로는 부족하다 싶어서, 학교 스타트업 팀에 합류하게 됐다. 처음으로 로그인/회원가입, 추천 서비스 로직 등을 직접 개발했고, 정말 내 손으로 하나하나 만들어가는 재미를 느꼈다. 지금 보면 허술한 코드지만, 그땐 진심이었다.",
    category: 3,
    eventType: 2,
    startDate: "20211006",
    endDate: "20220401",
    descImaegsList: [
      {
        fileName: "t2_c3_startup_1.webp",
        desc: "개발 많이 할 각오로 장만한 기계식 키보드",
        fileType: "IMG",
      },
      {
        fileName: "t2_c3_startup_2.webp",
        desc: "밤늦게까지 강의 들으며 공부함",
        fileType: "IMG",
      },
      {
        fileName: "t2_c3_startup_3.webp",
        desc: "나야~ ",
        fileType: "IMG",
      },
      {
        fileName: "t2_c3_startup_4.webp",
        desc: "초보들끼리 로직 고민고민...",
        fileType: "IMG",
      },
      {
        fileName: "t2_c3_startup_5.webp",
        desc: "첫 서비슨데 벌써 분석 서비스를 ",
        fileType: "IMG",
      },
      {
        fileName: "t2_c3_startup_6.webp",
        desc: "한땀한땀 디자인하고 개발한 화면들",
        fileType: "IMG",
      },
    ],
    repImgFileName: "t2_c3_startup_1.webp",
    repImgFileType: "IMG",
    keyWord: "스타트업",
    descImagesList: [],
  },
  {
    id: "67b4916f318ec1fe0b68403b",
    title:
      "특수부동산 매물 관리 및 거래 어플리케이션 & 어드민 서비스 운영 및 유지보수",
    importance: 3,
    description:
      "점프컴퍼니에서는 팀 개발을 처음 경험했다. Git도 실전에서 제대로 써본 건 처음이었고, 프로젝트 구조나 컨벤션도 익숙하지 않았지만, 매일 부딪히며 업무 스킬이 빠르게 늘었다. 실무에 발을 딛는다는 게 이런 느낌이구나 싶었다.",
    category: 1,
    eventType: 3,
    startDate: "20220425",
    endDate: "20220902",
    descImaegsList: [
      {
        fileName: "t3_c1_git_1.JPG",
        desc: "Git을 이전까지 안써본 나.. 아니 못써본..",
        fileType: "IMG",
      },
    ],
    repImgFileName: "t3_c1_git_1.JPG",
    repImgFileType: "IMG",
    keyWord: "GIT",
    descImagesList: [],
  },
  {
    id: "67b4925e318ec1fe0b68403c",
    title: "상태관리 라이브러리 적용을 통한 앱 사용성 개선",
    importance: 2,
    description:
      "또, 필터 기능이 많은 앱에서 React-Query를 적용해보기로 했다. 캐싱과 상태 동기화가 필요했던 상황에서 꽤 효과적이었고, 상태 관리 도구들을 직접 비교하고 적용해본 경험이 스스로 성장했다는 걸 느끼게 해줬다.",
    category: 2,
    eventType: 3,
    startDate: "20220425",
    endDate: "20220902",
    descImaegsList: [
      {
        fileName: "t3_c2_statusManagement_1.webp",
        desc: "신기한 최신 라이브러리 기술의 발전 속도에 감탄하다",
        fileType: "IMG",
      },
    ],
    repImgFileName: "t3_c2_statusManagement_1.webp",
    repImgFileType: "IMG",
    keyWord: "React-Query",
    descImagesList: [],
  },
  {
    id: "67b492eb318ec1fe0b68403d",
    title:
      "검색하면 안 나오는 우리 서비스… (SEO 최적화된 신규 앱 홍보사이트 개발)",
    importance: 1,
    description:
      "아무리 검색해도, 우리가 만든 서비스는 안 보였다. 문제는 기술적인 거였다. CSR로 만든 페이지는 검색 엔진이 읽지 못한다는 걸 그때 처음 알았다. 그래서 Next.js로 구조를 바꿨다. SSR 방식으로 다시 만들고, meta 태그랑 sitemap, robots.txt도 하나하나 손봤다. 처음엔 생소했지만, 해보니까 구조가 보였다. 검색에 노출되기 시작한 걸 보고 괜히 뿌듯했다. 누군가는 이걸 보고 클릭할지도 모르니까. 내가 만든 웹이 누군가에게 처음 발견되는 방식. 그게 조금은 좋아졌다.",
    category: 1,
    eventType: 3,
    startDate: "20220425",
    endDate: "20220902",
    descImaegsList: [
      {
        fileName: "t3_c1_ssr_1.JPG",
        desc: "입사 1개월 차에 사이트를 통으로 만들라뇨...?",
        fileType: "IMG",
      },
    ],
    repImgFileName: "t3_c1_ssr_1.JPG",
    repImgFileType: "IMG",
    keyWord: "SSR",
    descImagesList: [],
  },
  {
    id: "67b49386318ec1fe0b68403e",
    title: "앱내 웹뷰 서비스 운영 및 유지보수",
    importance: 3,
    description:
      "앱 안에 웹뷰가 여러 개 뜨는 구조라, 자연스럽게 앱과 웹뷰 사이에 통신도 자주 오가게 된다. 그러다 보니 아찔한 순간들이 생긴다. 네이티브 쪽에서 무심코 바꾼 게 웹뷰 쪽 통신 로직에 영향을 줄 수도 있어서, 예상치 못한 문제들이 튀어나오기도 한다. 덕분에 ‘변경된 내용이 어디까지 영향을 줄까?’를 항상 먼저 고민하게 됐고, 네이티브 개발자랑 더 밀접하게 대화하게 된 계기가 됐다. 지금은 작은 수정 하나에도 서로 먼저 물어보게 된 관계가 되었다!",
    category: 5,
    eventType: 4,
    startDate: "20221101",
    endDate: "20251231",
    descImaegsList: [
      {
        fileName: "t4_c5_webInApp_1.jpg",
        desc: "네이티브 개발자 vs 프론트엔드 개발자",
        fileType: "IMG",
      },
    ],
    repImgFileName: "t4_c5_webInApp_1.jpg",
    repImgFileType: "IMG",
    keyWord: "앱안의 웹",
    descImagesList: [],
  },
  {
    id: "67b49440318ec1fe0b68403f",
    title: "카드 서비스 담당 개발",
    importance: 3,
    description:
      "카드는 신청만 하면 나오는 게 아니라, 심사를 거쳐 발급되고, 사용 실적이나 혜택도 정말 다양한 조건에 따라 바뀐다. 덕분에 로직이 아주 민감하고, 테스트하는 데도 신중해야 했다. 신청자마다 조건도 다르고, 약관이나 심사 결과, 개인정보 같은 민감한 정보도 다뤄야 해서 개발 부담이 큰 편이었다. 이 업무를 맡으면서 느낀 건, 단순히 기능만 구현해서는 안 된다는 점이었다. 도메인 자체에 대한 이해와 배경지식이 있어야 효율적으로 개발할 수 있었다. 그래서 자주 변경되거나 노출 요청이 많은 UI들은 컴포넌트화해서 유연하게 대응할 수 있도록 정리해뒀다. 꽤 유용하게 쓰이고 있다!",
    category: 6,
    eventType: 4,
    startDate: "20240101",
    endDate: "20251231",
    descImaegsList: [
      {
        fileName: "t4_c6_creditCard_1.jpg",
        desc: "카드금융 비즈니스 이해하기",
        fileType: "IMG",
      },
    ],
    repImgFileName: "t4_c6_creditCard_1.jpg",
    repImgFileType: "IMG",
    keyWord: "카드금융",
    descImagesList: [],
  },
  {
    id: "67b494d2318ec1fe0b684040",
    title: "앱 내 다른 도메인의 서비스의 회원가입 & 로그인 프로세스 통합",
    importance: 2,
    description:
      "롯데카드에서는 훨씬 더 큰 규모의 서비스를 다뤘다. 앱 안의 웹뷰, 도메인이 다른 서비스 간 로그인 통합, 카드 서비스의 복잡한 로직까지. 하나하나가 도전이었지만, 매번 실수와 커뮤니케이션 속에서 배우는 게 많았다. 특히 한 번은 API 명세만 보고 개발했다가 회원가입 중복 이슈가 생겼는데, 그 일을 계기로 서버 동작 방식까지 더 깊이 이해하려 노력하게 됐다.",
    category: 6,
    eventType: 4,
    startDate: "20241001",
    endDate: "20241210",
    descImaegsList: [
      {
        fileName: "t4_c6_domain_1.jpg",
        desc: "카드금융 비즈니스 이해하기",
        fileType: "IMG",
      },
    ],
    repImgFileName: "t4_c6_domain_1.jpg",
    repImgFileType: "IMG",
    keyWord: "도메인",
    descImagesList: [],
  },
  {
    id: "67b4952b318ec1fe0b684041",
    title: "주단위 정기배포 담당",
    importance: 1,
    description:
      "배포 업무를 처음 맡았을 땐 생각보다 떨렸다. 정해진 주기에 따라 스테틱 이미지 서버랑 셀리 서비스 등의 배포를 준비하고, 티켓 승인 상태랑 코드 리뷰도 체크하고... 마지막으로 production 브랜치를 빌드하고 배포까지. 사실 큰 문제 없이 순서대로만 하면 되지만, ‘혹시나’ 하는 마음 때문에 늘 긴장된다. 배포라는 게 작은 실수 하나에도 서비스에 영향이 클 수 있으니까. 그 덕에 지금은 더 꼼꼼하게 확인하는 습관이 생겼다. 책임감을 많이 배운 경험!",
    category: 6,
    eventType: 4,
    startDate: "20241001",
    endDate: "20251231",
    descImaegsList: [
      {
        fileName: "t4_c5_deploy_1.jpg",
        desc: "프로세스대로 하면 되지만 매번 긴장되는 배포",
        fileType: "IMG",
      },
    ],
    repImgFileName: "t4_c5_deploy_1.jpg",
    repImgFileType: "IMG",
    keyWord: "배포",
    descImagesList: [],
  },
  {
    id: "67b495bb318ec1fe0b684042",
    title: "디자인 시스템 도입 및 앱리뉴얼 개발 (vue ,node 버전업 등)",
    importance: 1,
    description:
      "tailwindCSS를 도입해서 기존의 스타일 코드를 정리하기 시작했는데, 처음엔 반신반의했다. 근데 쓰면 쓸수록 편하고 명확해서 점점 빠져들게 됐다. 함축된 클래스 덕분에 불필요하거나 중복된 스타일 코드가 확 줄었고, 실제로 50% 이상 줄인 것 같다. 디자인 시스템 도입은 처음이라 걱정도 많았는데, 점점 손에 익으면서 ‘이게 진짜 가능하네?’라는 생각이 들었다. 덕분에 앱 리뉴얼도 훨씬 수월하게 진행할 수 있었고, 나름 작은 성공 체험이었다 :)",
    category: 5,
    eventType: 4,
    startDate: "20240601",
    endDate: "20240731",
    descImaegsList: [
      {
        fileName: "t4_c5_renewal_1.jpg",
        desc: "불가능할 것만 같던 앱 리뉴얼",
        fileType: "IMG",
      },
    ],
    repImgFileName: "t4_c5_renewal_1.jpg",
    repImgFileType: "IMG",
    keyWord: "리뉴얼",
    descImagesList: [],
  },
];
