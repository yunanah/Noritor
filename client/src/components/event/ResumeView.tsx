import React from "react";
import "./ResumeView.scss";
import useEventStore from "../../stores/event";
import { WorkItem } from "../../types/event";
import { dateFormat, PhotoImgComponent } from "../../utils";

function ResumeView() {
  const { works } = useEventStore();

  const loadImage = (path: string) => {
    return require(`../../assets/icons/skill/${path}`);
  };

  const checkNeedPadding = (name: string) => {
    return name === "slack.png" || name === "jira.svg" ? "need-padding" : "";
  };

  return (
    <>
      <section className="resume-container">
        <article className="intro">
          <h1>Yura | 도메인을 이해하는 개발자</h1>
          <p>만 4년차(== 시간 계산하기) Front-end 개발자 백유라입니다.</p>
        </article>
        <article className="contact">
          <h2>Contact.</h2>
          <p>
            <strong>Email.</strong> bbyl6319@gmail.com (copy기능)
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
            비즈니스 구현을 통해 유저에게 삶 속에 작은 편의를 주고 싶은 3년 차
            프론트엔드 개발자입니다. 이를 위해, 빠르게 개발하고 배포하는 역량을
            활용하여 유저와 서비스 도메인을 이해하는 역량을 쌓고자
            노력해왔습니다. 특히 다른 팀 구성원들과 적극적인 커뮤니케이션을 하는
            협업을 통해 함께 성장하며 만들어가는 것을 좋아합니다.
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
                {work.role} (🧑‍🤝‍🧑: {work.team})
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
              위즈라이브 Javascript 온라인 코딩강의 튜터 활동 (2020.12-2021.03)
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
