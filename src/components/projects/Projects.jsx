import React from 'react'
import "./Projects.css"
import Inspector from '../../assets/inspector.png'
import Watchdog from '../../assets/watchdog.png'
import Project1Img from '../../assets/project1.png'
import Project2Img from '../../assets/project2.png'
import Project3Img from '../../assets/project3.png'
import Project4Img from '../../assets/project4.png'
import Project5Img from '../../assets/project5.jpg'

const Projects = () => {
  return (
    <section id='Projects'>
      <h2>Projects</h2>
      <div className="container project__container">
      <article className='projects'>
          <div className='project__image'><img src={Watchdog} alt="Portfolio Website" /></div>
          <div className="project__head"><h3>Log Watchdog</h3></div>
          <div className="project__org"><small>ConverseNow AI.</small></div>
          <div className="project__desc"><small>An internal tool to check and maintain P.C.I compliance of company logs.</small></div>
        </article>
      <article className='projects'>
          <div className='project__image'><img src={Inspector} alt="Portfolio Website" /></div>
          <div className="project__head"><h3>Menu Inspector</h3></div>
          <div className="project__org"><small>ConverseNow AI.</small></div>
          <div className="project__desc"><small>An internal tool to compare internal menus, menu functions , translations, translation rules and items.</small></div>
        </article>
        <article className='projects'>
          <div className='project__image'><img src={Project1Img} alt="Portfolio Website" /></div>
          <div className="project__head"><h3>Portfolio Website</h3></div>
          <div className="project__desc"><small>My personal portfolio built with ReactJS. Reactive and compatible with a variety of device sizes.</small></div>
          <div className="project__cta">
            <a href="https://github.com/D0T7/Portfolio" className='btn'  target='_blank' rel="noreferrer">GitHub</a>
          </div>
        </article>
        <article className='projects'>
          <div className='project__image'><img src={Project2Img} alt="AI-Enabled Fintech B2B Invoice Management Application" /></div>
          <div className="project__head"><h3>AI-Enabled Fintech B2B Invoice Management Application</h3></div>
          <div className="project__org"><small>HighRadius.</small></div>
          <div className="project__desc"><small>A webapp with a React front-end, JDBC for the backend, and MySQL for the database management system. 
            HTTPS requests were handled by Axios.
            To predict the clear_date for invoices, an AI prediction model was constructed and 
            Flask was used to connect it to the front end.
          </small></div>
        </article>
        <article className='projects'>
          <div className='project__image'><img src={Project5Img} alt="Instagram Logo" /></div>
          <div className="project__head"><h3>Instagram Redirector</h3></div>
          <div className="project__desc"><small>A JS script that redirects Instagram to any anonymous Instagram front-end, allowing 
            users to browse public Instagram accounts and posts without having to register or login. </small></div>
          <div className="project__cta"><a href="https://github.com/D0T7/Instagram-Redirect" className='btn' target='_blank' rel="noreferrer">GitHub</a></div>
        </article>
        <article className='projects'>
          <div className='project__image'><img src={Project3Img} alt="" /></div>
          <div className="project__head"><h3>Age and Gender Predection</h3></div>
          <div className="project__desc"><small>A Python application that uses visual cues(facial features) to predict a person's age and gender. </small></div>
          <div className="project__cta"><a href="https://github.com/D0T7/Age-and-Gender-Predection" className='btn' target='_blank' rel="noreferrer">GitHub</a></div>
        </article>
        <article className='projects'>
          <div className='project__image'><img src={Project4Img} alt="" /></div>
          <div className="project__head"><h3>Face Detection and Recognition</h3></div>
          <div className="project__desc"><small>A Python program that can be trained to detect faces and recognize people. </small></div>
          <div className="project__cta"><a href="https://github.com/D0T7/Face-Detection-and-Recognition" className='btn' target='_blank' rel="noreferrer">GitHub</a></div>
        </article>

      </div>

    </section>
  )
}

export default Projects