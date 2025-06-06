import { EventItem, WorkItem } from "../types/event";

// "~하게 개선된 환경에서 개발하며 역량을 업그레이드.",
export const DefaultWorkData: WorkItem[] = [
  {
    companyName: "롯데카드",
    companyDesc:
      "금융 무료 앱 인기차트 30위권, 일간 앱/웹 접속 사용자 수 수십만명 규모 서비스 운영",
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
          "필터 기능 등 주요기능 개발에 참여",
          "React-Query, Mobx-state-tree 등을 활용한 프로젝트 구조 설계에 참여.",
        ],
        startDt: "20220501",
        endDt: "20220902",
      },
      {
        projName: "프리미엄체크 웹 개발 담당",
        projConts: [
          "앱개발 프로젝트와 컴포넌트 구조 설계를 동일시하여 개발 시간 단축",
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
          "알고리즘 교육 프로그램의 기획과 문제 개발 및 자료 제작에 참여",
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
      "반드시 어려운 과탐2 과목을 시험보겠다며 고집하던 나는 결국 재수 끝에 신설학과였던 숙대 (자율)기초공학부라는 곳에 입학하게 된다. (불만 없음)^ 성별이 반쪽밖에 없는 곳에서 어떻게 자유로운 공학 공부를 할지 의문이었다. (취소선 넣을까 이말은.. 아님. 그냥빼던가)^ 대학에 입학하면 놀겠다고 다짐했으나 우리 학부는 다른 공대 학생들이 듣는 공학이론 전 과목을 모두 배워야했다;^ 오호라, 약대 진학(안정적인 루트)만 꿈꾸던 내가 컴퓨터과학 세상에 처음 눈을 떴다. (물론 성적은 눈을 감았다)^ 파이썬 몇줄 만으로 데이터 쪼가리에서 대단한 논문 근거가 되는 데이터과학과 개발 언어에 급 관심을 생겼다.^ 그렇게 2학년 전공 선택 때 컴퓨터과학을 선택하는 꽤나 큰 인생의 전환점을 맞이한다 (?)",
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
      "궁금한 것은 제대로 부딪혀 봐야 하는 나는 데이터 분석을 지독하게 하는 연합 금융데이터 학회에 컴퓨터과학 전공생 특혜로 쉽게(보통은 잘 안들여보내줌) 들어갔다.^ 학회 답게 응용지식보다는 데이터로 원하는 결과값을 도출하는데 뒷받침이 되는 수학/통계적 이론을 “강의도 없는 방학에” 참 열심히 들여다봤다.^ 시간이 지날수록 내 주변엔 컴퓨터 전공생들만 남아가고, 그래도 Kaggle (데이터분석 경진대회 사이트)에서 가장 흔히들 연습용으로 도전하는 타이타닉 생존자 문제를 함께 풀어내고 학회활동을 졸업했다. (ㅎ)^ 학회 활동을 통해 나는 좀 더 당장의 변화를 필요로 하는 서비스 산업에서 사용하는 개발 언어를 배우고싶다 생각했다. ",
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
      "나는 “내가 빠르게 정보를 습득할 수 있는” 자료를 잘 찾는다. ^ 그 중에 하나는 선생님이다. 사실 선생님에 매료되서 프론트엔드 개발자의 길로 들어섰다..^ (사실상 사용자를 가장 가까이 만나는 화면의 모든 상태를 책임진다는 것이 멋있다..)^ HTML, CSS 강의가 너무 재밌기도 했지만 실무에서 태그와 속성들이 어떻게 활용되고 왜 중요한지 나름대로 포인트를 많이 잡았다(고 스스로 생각한다).^ 그 기조를 몰고가서 진짜 잘가르치는 Javascript 프레임워크 선생님들을 찾아나섰고, 그렇게 선생님들의 카리스마에 치이며 그저 내겐 훈련뿐이 살길이라는 자세로 반년을 보낸것 같다. (주로 React, Vue를 공부)",
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
      "휴학기간 동안 열심히 공부한 만큼, 이제 활용해볼 때라 생각했다.^ 하지만 아직 한번도 나의 실력을 검증해본 적이 없기 때문에 바로 회사로 갈 수도 없었지만, 먼저 우연한 기회로 학교 스타트업 팀에 프론트엔드 개발로 합류했다.^ 피그마를 조금 다룰줄 알아서 기획이 바뀌고 할때마다 바로 화면을 만들어서 보여줬다. (디자인 감각도 있는 듯함-ㅎ)^ 멘땅에 헤딩을 하듯 로그인/회원가입 로직 부터 상품 추천 서비스의 사용자 취향 테스트와 분석 등의 프로세스 로직 등 정말 한땀한땀 개발했다.^ 지금 코드를 보면 정말 개판오분전이지만,, 기획, 백엔드 개발, 서비스 모든 관점에서 고민하면서 처음으로 서비스를 세상에 배포하는 경험을 했다.^ (사용 : Vue3, HTML5, CSS3, SCSS)",
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
      "React-Native , React, TypeScript^ 처음 서비스의 운영업무는 업무 자체는 요청 받은 부분에 대해서 확인해서 다루는 일이라 적응하기 어렵지 않았다. ^ 하지만 하나의 레포지토리를 다른 개발자와 협업해서 개발해본 경험이 없었던 지라 Git 활용에 미숙했다.^ 업무를 하면서 최신 Javascript 사양이나 코딩 컨벤션, Git 문법 등을 많이 접하고 사용하면서 업무적인 스킬이 빨리 향상했다.",
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
      "새로운 앱을 개발하면서 상태관리 라이브러리 후보들을 비교하여 어떤것을 적용할지 고민하는 기회를 얻었다.^ 고민 대상은 React-Query와 MobX, Redux였는데 비동기적인 상태관리의 규격화된 방식을 제공하는 React-Query라는 신기술을 공부하면서 개발환경에 적용할 수 있는 여유가 있다면 사용하지 않을 이유가 없어보였다..^ 부동산 거래 목록에서 자주 바뀔 가능성이 높은 필터 기능에 리액트쿼리를 사용해서 작업 시간 단축과 캐싱 기능 등을 통해 사용성을 개선했다.",
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
      "앱내에서 웹뷰를 여러개 띄워 동작하는 서비스이기 때문에 앱과 웹뷰간 통신이 자주 발생한다.^ 아찔한 경우는 네이티브 쪽에서 변경된 내용이 웹뷰와 통신하는 로직에 영향이 있을 경우인데, 발견이 어려울 수 있어 영향범위 파악이 중요하다.",
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
      "카드는 심사를 통해 발급되고 사용 실적 및 혜택 등이 개별적으로, 다양한 케이스에 의해 발생해서 비즈니스 로직이 매우 민감하다.^ 신청자와 카드 특성에 따라 신청 프로세스가 상이하고, 약관이나 심사 결과, 개인정보 등을 다루기 때문에 개발 및 테스트 비용 부담이 큰 편이다.^ 이 도메인의 개발 업무를 하면서 도메인과 개발 건의 비즈니스 적인 이해관계에 대한 파악이 개발 효율에 큰 영향을 준다는 것을 알았다. ^ 자주 수정하거나 단계별로 특정 서비스 노출 요청이 잦아서 유동성을 높이기 위해 하드 코딩된 부분들을 컴포넌트화 했다.",
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
      "메인으로 사용하는 도메인이 있고 다른 도메인을 사용하는 서비스가 있는데 메인 도메인에서 사용하는 로그인 정보를 가지고 두 도메인 로그인을 통합해서 사용하게 수정했다.^ 베트남 개발센터에서 함께 개발하고 있는 서비스라 개발 하는 과정 동안 서로 영향범위 내에서 방해되지 않게 소통하면서 개발을 진행했다.",
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
      "스테틱(이미지)서버, 셀리 서비스 등의 배포 준비를 담당했다.^ 반영하는 티켓의 승인 결재 상태 체크 및 코드 리뷰 진행^ 반영 스케줄에 맞춰 production 브랜치 빌드 & 배포 진행",
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
      "tailwindCss 를 사용한 서비스 전용 디자인 시스템 도입^ 함축 클래스로 스타일 적용이 가능해지면서 불필요하고 중복되는 스타일 코드의 대폭 감소 (약  50% 이상) ",
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
