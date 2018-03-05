import React from 'react'
import PropTypes from 'prop-types'

const IndexPage = ({}, context) => {
  const {info, summary, awards, history} = context.data

  return (
    <div>
      <div>
        <h1>{info.name}</h1>
        <p>
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
              <div>
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
                      <div>
                        <p>{project.description}</p>
                        <ul>
                          {project.responsibilities.map(
                            (responsibility, index) => {
                              return <li>{responsibility}</li>
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
        <h3>Education</h3>
        <ul>
          {summary.map((item, index) => {
            return <li key={`summary-${index}`}>{item}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

IndexPage.contextTypes = {
  data: PropTypes.object
}

export default IndexPage
