import {Component} from 'react'

import './index.css'

import {AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'

import {IoIosMail} from 'react-icons/io'

import ProjectItem from '../ProjectItem'

const InitialList = [
  {
    id: 1,
    ProjectName: 'Insta Share',
    ProjectLink: 'https://instaclonepavan.ccbp.tech/login',
    Description:
      'Implemented responsive Streaming Application like Instagram Clone where users can log in and see a list of stories and posts, user can also search posts with post caption, user can be able to like and dislike the post and also view the user specific posts',
    ImageUrl:
      'https://img.freepik.com/free-vector/instagram-icon-collection_1051-1085.jpg?w=740&t=st=1704392699~exp=1704393299~hmac=a05a323cc66de6ea218b65203e1cf3a443ef5a5fcbe4c0e142b628df170793a5',
  },
  {
    id: 2,
    ProjectName: 'Nxt Watch',
    ProjectLink: 'https://ragipavannxt.ccbp.tech/login',
    Description:
      'Implemented Nxt Watch application which is a clone for YouTube where users can log in and can see a list of videos like Trending, Gaming, Saved videos, and also can search videos and view specific video details, and users can toggle the theme (Light/Dark)',
    ImageUrl:
      'https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049567.jpg?w=740&t=st=1704396112~exp=1704396712~hmac=40c8f8e9f06fe4902fca41a5cdf73d09335329f522088584147af873cfb42f45',
  },
  {
    id: 3,
    ProjectName: 'Nxt Trendz',
    ProjectLink: 'https://pavanragiamzn.ccbp.tech/login',
    Description:
      'Created a modern e-commerce experience with a design inspired by Amazon and Flipkart,User can able login and see list of products,sort the product and select the category then add items to cart',
    ImageUrl:
      'https://img.freepik.com/free-vector/ecommerce-web-store-hand-drawn-illustration_107791-10966.jpg?w=900&t=st=1704396385~exp=1704396985~hmac=da03514a86d174f2a990a0d8864a7cb08c04118273375df07a6be61954f809bf',
  },
]

class Protfolio extends Component {
  state = {
    projectsList: InitialList,
    ProjectLink: '',
    ProjectName: '',
    Description: '',
  }

  addProject = event => {
    event.preventDefault()
    const {RandomImgUrls} = this.props
    const {projectsList, ProjectName, ProjectLink, Description} = this.state
    const newObj = {
      id: projectsList.length + 1,
      ProjectName,
      ProjectLink,
      Description,
      ImageUrl: RandomImgUrls[Math.ceil(Math.random() * RandomImgUrls.length)],
    }

    this.setState(prevState => ({
      projectsList: [...prevState.projectsList, newObj],
      ProjectName: '',
      ProjectLink: '',
      Description: '',
    }))
  }

  onChangeProjectLink = event => {
    this.setState({
      ProjectLink: event.target.value,
    })
  }

  onChangeProjectName = event => {
    this.setState({
      ProjectName: event.target.value,
    })
  }

  onChangeProjectDescription = event => {
    this.setState({
      Description: event.target.value,
    })
  }

  render() {
    const {projectsList, ProjectName, ProjectLink, Description} = this.state
    return (
      <div className="main-container">
        <div className="header" id="section1">
          <div className="top-lef-container">
            <h1 className="heading-name">Ragi Pavan</h1>
            <div className="dicription">
              <div className="hello">
                <h2 className="ui_ux">UI/UX DESIGNER</h2>
                <h1 className="l-heading">Hello, my name is Ragi Pavan</h1>
                <p className="short-text">
                  I completed my gradutaion in mechanical Engineering in the at
                  Balaji institute of Technology And Science in year 2022. I am
                  eager to build a strong carrer in IT industry, and continue to
                  learn and grow.
                </p>
                <div>
                  <button type="button" className="project-button">
                    <a href="#section2" className="anchor-button">
                      Projects
                    </a>
                  </button>
                  <button type="button" className="linked-in-button">
                    Linkedin
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="top-right-container">
            <div className="navigation_elements">
              <a href="#section1" className="anchor">
                About
              </a>
              <a href="#section2" className="anchor">
                Projects
              </a>
              <a href="#section3" className="anchor">
                Contacts
              </a>
            </div>
          </div>
        </div>
        <div className="form-container">
          <div>
            <h1 className="add-p-heading">Add Project</h1>
            <hr className="hr" />
          </div>

          <div className="sub-form">
            <form className="form" onSubmit={this.addProject}>
              <label htmlFor="PName" className="label">
                Project Name
              </label>
              <input
                type="text"
                className="input"
                id="PName"
                onChange={this.onChangeProjectName}
                value={ProjectName}
              />
              <label htmlFor="PLink" className="label">
                Project Link
              </label>
              <input
                type="text"
                className="input"
                id="PLink"
                onChange={(this, this.onChangeProjectLink)}
                value={ProjectLink}
              />

              <label htmlFor="discription" className="label">
                Description
              </label>
              <textarea
                rows="7"
                cols="100"
                type="text"
                id="discription"
                className="text-area"
                onChange={this.onChangeProjectDescription}
                value={Description}
              />
              <button type="submit" className="submitButton">
                Add
              </button>
            </form>
          </div>

          <div>
            <img
              className="img"
              src="https://res.cloudinary.com/dytgpb4j5/image/upload/v1704392119/g7gkuelxopm8zqkmfiws.jpg"
              alt="Vector"
            />
          </div>
        </div>
        <div id="section2" className="projects-container">
          <div>
            <h1 className="add-p-heading">Projects</h1>
            <hr className="hr" />
          </div>
          <ul className="ul">
            {projectsList.map(each => (
              <ProjectItem key={each.id} Data={each} />
            ))}
          </ul>
        </div>

        <div id="section3" className="Contact-us">
          <div className="icons-container">
            <div className="ícon">
              <AiFillInstagram className="icon" />
            </div>
            <div className="ícon-1">
              <AiFillLinkedin className="icon-1" />
            </div>
            <div className="ícon-2">
              <IoIosMail className="icon-2" />
            </div>
          </div>
          <p className="cop">Copyright @ 2024. All rights reserved</p>
        </div>
        <div>
          <img
            className="img"
            src="https://res.cloudinary.com/dytgpb4j5/image/upload/v1704392119/g7gkuelxopm8zqkmfiws.jpg"
            alt="Vector"
          />
        </div>
      </div>
    )
  }
}

export default Protfolio
