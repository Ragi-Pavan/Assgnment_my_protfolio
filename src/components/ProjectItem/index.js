import {Component} from 'react'

import './index.css'

class ProjectItem extends Component {
  render() {
    const {Data} = this.props
    const Class = Data.id % 2 !== 0 ? `left-one` : `left-one-1`
    const Class2 = Data.id % 2 !== 0 ? `right-one` : `right-one-1`
    return (
      <li className="list">
        <div className={Class}>
          <h1 className="p-nama">{Data.ProjectName}</h1>
          <p className="p-disc">{Data.Description}</p>
          <button type="button" className="v-butoon">
            <a
              href={Data.ProjectLink}
              target="_blank"
              rel="noreferrer"
              className="anch"
            >
              View Project
            </a>
          </button>
        </div>
        <div className={Class2}>
          <img
            src={Data.ImageUrl}
            alt={`ImageUrl ${Data.ProjectName}`}
            className="p-image"
          />
        </div>
      </li>
    )
  }
}

export default ProjectItem
