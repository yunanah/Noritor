import React from "react";
import "./ResumeView.scss";
import useEventStore from "../../stores/event";
import { WorkItem } from "../../types/event";
import { dateFormat, PhotoImgComponent } from "../../utils";

function ResumeView() {
  const { works } = useEventStore();

  const loadImage = (path: string) => {
    return `${process.env.PUBLIC_URL}/assets/icons/skill/${path}`;
  };

  const checkNeedPadding = (name: string) => {
    return name === "slack.png" || name === "jira.svg" ? "need-padding" : "";
  };

  return (
    <>
      <section className="resume-container">
        <article className="intro">
          <h1>Yura | 도메인을 이해하는 개발자</h1>
          <p>
            빠른 실행력과 사용자 관점의 문제 해결을 지향하는 3년 차 프론트엔드
            개발자 백유라입니다.
          </p>
        </article>
        <article className="contact">
          <h2>Contact.</h2>
          <p>
            <strong>Email.</strong> bbyl6319@gmail.com
            <br />
            <br />
            <strong>Phone.</strong> 010-4512-9080
          </p>
        </article>
        <article className="channel">
          <h2>Channel.</h2>
          <p>
            <strong>Github.</strong>
            <a
              title="깃허브 구경하기"
              href="https://github.com/yunanah"
              target="blank"
            >
              깃허브 구경하기
            </a>
            <br />
            <br />
            <strong>Blog.</strong>
            <a
              title="블로그 구경하기"
              href="https://yunanah.tistory.com/"
              target="blank"
            >
              블로그 구경하기
            </a>
          </p>
        </article>
        <article className="introduction">
          <h2>Introduce.</h2>
          <p>
            사용자의 일상에 실제로 도움이 되는 제품을 만드는 일에 보람을 느끼는,
            3년 차 프론트엔드 개발자입니다. 빠른 개발과 배포 역량을 바탕으로,
            사용자와 서비스 도메인을 깊이 이해하며 의미 있는 제품을 만드는
            개발을 지향해왔습니다. 특히 다양한 팀과의 협업 속에서 적극적으로
            소통하고, 함께 성장하며 만들어가는 과정을 좋아합니다.
          </p>
        </article>
        <br />
        <h2>Work Experience.</h2>
        <article className="work-experience">
          {works.map((work: WorkItem, index: number) => (
            <div className="work-item">
              <h3>{work.companyName}</h3>
              <i>{work.companyDesc}</i>

              <i className="date">
                {dateFormat(work.startDate)} <br />~
                {work.endDate ? dateFormat(work.endDate) : "현재"}
              </i>
              <br />
              <br />
              <strong>
                {work.role} (🧑‍🤝‍🧑: {work.team}인 팀)
              </strong>
              <br />

              {work.projects.map((project) => (
                <div className="detail">
                  <strong>{project.projName}</strong>
                  <ul>
                    {project.projConts.map((content) => (
                      <li>{content}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="skill-box">
                {work.skillSet.map((skill, idx) =>
                  skill.imgName ? (
                    <PhotoImgComponent
                      imageUrl={loadImage(skill.imgName)}
                      className={checkNeedPadding(skill.name)}
                      key={idx}
                    />
                  ) : (
                    <></>
                  )
                )}
              </div>
            </div>
          ))}
        </article>
        <article className="other-experience">
          <h2>Other Experience.</h2>
          <br />
          <strong>수상 및 자격증</strong>
          <ul>
            <li>정보처리기사 취득 (2021.06 / 한국산업인력공단)</li>

            <li>
              숙명 WIC 해커톤 장려상 수상 (2019.11 / 숙명여자대학교 캠퍼스타운)
            </li>
          </ul>
          <br />
          <strong>ETC</strong>
          <ul>
            <li>
              위즈라이브 JavaScript 온라인 강의 튜터 → 기초 개념 설명 및 학습자
              질문 응답을 통해 전달력과 문제 해결력 향상 (2020.12-2021.03)
            </li>
            <li>
              Raspberry Pi 초등학교 방과후교실 보조 강사 (2019.03-2019.06)
            </li>
          </ul>
        </article>
        <article className="education">
          <h2>Education.</h2>
          <p>
            <span>2017.03-2023.02</span> 숙명여자대학교 컴퓨터과학과 졸업
            <br />
            <br />
            <span>2013.03-2016.02</span> 인천국제고등학교 졸업 <br />
          </p>
        </article>
      </section>
      {/* <button>PDF 다운로드</button> */}
    </>
  );
}

export default ResumeView;
