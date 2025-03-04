export type PhotoAlbumViewProp = {
  events: EventItem[];
};

export interface EventItem {
  title: string;
  importance: number; // 중요도 (1~5)
  repImgFileName: string;
  repImgFileType: string;
  description: string; //long
  category: number; // 개발/활동 영역  ( 1: 개발언어, 2: 응용지식, 3: 프로젝트, 4: 개발자 협업, 5: 개발 환경 , 6: 도메인)
  eventType: number; // 활동분류
  startDate: string;
  endDate: string;
  descImagesList: ImageDescItem[];
  descImaegsList: ImageDescItem[];
  keyWord: string;
  pathKey: string;
}

export interface ImageDescItem {
  fileName: string;
  fileType: string;
  desc: string;
}

export interface WorkItem {
  companyName: string;
  companyDesc: string;
  startDate: string;
  endDate?: string;
  role?: string;
  team?: string;
  skillSet: SkillDataItem[];
  projects: ProjectDescDataItem[];
}

export interface SkillDataItem {
  name: string;
  imgName: string;
  kind?: string;
}

export interface ProjectDescDataItem {
  projName: string;
  startDt: string;
  endDt?: string;
  projConts: string[];
}
