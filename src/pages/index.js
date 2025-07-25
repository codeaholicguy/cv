import React from "react";

import Layout from "../components/layout";
import ContentContext from "../context/content";

const styles = {
  intro: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    paddingBottom: 10,
    borderBottom: "solid 1px",
  },
};

const IndexPage = () => {
  return (
    <ContentContext.Consumer>
      {(content) => {
        const { info, summary, awards, history, educations } = content;

        return (
          <Layout>
            <div>
              <div>
                <div style={styles.intro}>
                  <h1>{info.name}</h1>
                  {process.env.GATSBY_DOWNLOAD_ENABLE && (
                    <a
                      className="btn-cv-download"
                      href="/cv_nguyennhathoang.pdf"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Download
                    </a>
                  )}
                </div>
                <p>
                  <span>{info.location}</span>
                  <span> · </span>
                  {info.mobile && (
                    <>
                      <span>{info.mobile}</span>
                      <span> · </span>
                    </>
                  )}
                  <span>
                    <a
                      href={info.email}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {info.email}
                    </a>
                  </span>
                </p>
                <p>
                  {info.links &&
                    info.links.length > 0 &&
                    info.links.map((link, index) => {
                      return (
                        <span key={`link-${index}`}>
                          <a
                            href={link}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {link}
                          </a>
                          {index < info.links.length - 1 && <span> · </span>}
                        </span>
                      );
                    })}
                </p>
              </div>
              <div>
                <h2 style={styles.header}>Career summary</h2>
                <ul>
                  {summary.map((item, index) => {
                    return (
                      <li key={`summary-${index}`}>
                        {<div dangerouslySetInnerHTML={{ __html: item }}></div>}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h2 style={styles.header}>Awards</h2>
                <ul>
                  {awards.map((item, index) => {
                    return (
                      <li key={`award-${index}`}>
                        <span>{item.year}</span>
                        <span> – </span>
                        <span>{item.detail}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h2 style={styles.header}>Work history</h2>
                <div>
                  {history.map((item, index) => {
                    return (
                      <div key={`history-${index}`}>
                        <h3>
                          <span>{item.title}</span>
                          <span>, </span>
                          <span>{item.company}</span>
                        </h3>
                        <p>
                          <span>
                            <i>{item.time}</i>
                          </span>
                        </p>
                        <p>
                          <span>
                            <strong>Skill: </strong>
                          </span>
                          <span>
                            <i>{item.skills}</i>
                          </span>
                        </p>
                        <div>
                          {item.projects.map((project, index) => {
                            return (
                              <div key={`project-${index}`}>
                                <p>
                                  <span>
                                    <strong>{project.name}</strong>
                                  </span>
                                  {!!project.link && (
                                    <span>
                                      <span> (</span>
                                      <span>
                                        <a
                                          href={project.link}
                                          rel="noopener noreferrer"
                                          target="_blank"
                                        >
                                          {project.link}
                                        </a>
                                      </span>
                                      <span>)</span>
                                    </span>
                                  )}
                                  <span>: </span>
                                  <span>{project.description}</span>
                                </p>
                                <ul>
                                  {project.responsibilities.map(
                                    (responsibility, index) => {
                                      return (
                                        <li key={`responsibility-${index}`}>
                                          {responsibility}
                                        </li>
                                      );
                                    },
                                  )}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <h2 style={styles.header}>Education</h2>
                <div>
                  {educations.map((education, index) => {
                    return (
                      <div key={`education-${index}`}>
                        <h3>
                          <span>{education.major}</span>
                          <span>, </span>
                          <span>{education.school}</span>
                        </h3>
                        <p>
                          <i>{education.time}</i>
                        </p>
                        <ul>
                          {education.achievements.map((achievement, index) => {
                            return (
                              <li key={`achievement-${index}`}>
                                {achievement}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Layout>
        );
      }}
    </ContentContext.Consumer>
  );
};

export default IndexPage;
