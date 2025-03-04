import React from "react";
import "./ResumeView.scss";
import useEventStore from "../../stores/event";
import { WorkItem } from "../../types/event";
import { dateFormat } from "../../utils";

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
                    <img
                      src={loadImage(skill.imgName)}
                      className={checkNeedPadding(skill.name)}
                      alt={skill.name}
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
      </section>
      <button>PDF 다운로드</button>
    </>
  );
}

export default ResumeView;
