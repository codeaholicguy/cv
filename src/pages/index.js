import React from 'react'
import PropTypes from 'prop-types'

const IndexPage = ({}, context) => {
  const {info, summary, awards, history, educations} = context.data

  return (
    <div>
      <div>
        <h1>{info.name}</h1>
        <p>
          <span>{info.location}</span>
          <span> · </span>
          <span>{info.mobile}</span>
          <span> · </span>
          <span>
            <a href={info.email}>{info.email}</a>
          </span>
        </p>
        <p>
          <span>
            <a href={info.linkedin}>{info.linkedin}</a>
          </span>
          <span> · </span>
          <span>
            <a href={info.github}>{info.github}</a>
          </span>
          <span> · </span>
          <span>
            <a href={info.blog}>{info.blog}</a>
          </span>
        </p>
      </div>
      <div>
        <h2>Career summary</h2>
        <ul>
          {summary.map((item, index) => {
            return <li key={`summary-${index}`}>{item}</li>
          })}
        </ul>
      </div>
      <div>
        <h2>Awards</h2>
        <ul>
          {awards.map((item, index) => {
            return (
              <li key={`award-${index}`}>
                <span>{item.year}</span>
                <span> – </span>
                <span>{item.detail}</span>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <h2>Work history</h2>
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
                        <p>{project.description}</p>
                        <ul>
                          {project.responsibilities.map(
                            (responsibility, index) => {
                              return (
                                <li key={`responsibility-${index}`}>
                                  {responsibility}
                                </li>
                              )
                            }
                          )}
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <h2>Education</h2>
        <div>
          {educations.map((education, index) => {
            return (
              <div>
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
                    return <li key={`achievement-${index}`}>{achievement}</li>
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

IndexPage.contextTypes = {
  data: PropTypes.object
}

export default IndexPage
