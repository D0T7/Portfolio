import React from 'react'
import "./Projects.css"
import Inspector from '../../assets/inspector.png'
import Watchdog from '../../assets/watchdog.png'
import Project1Img from '../../assets/project1.png'
import Project2Img from '../../assets/project2.png'
import Project3Img from '../../assets/project3.png'
import Project4Img from '../../assets/project4.png'
import Project5Img from '../../assets/project5.jpg'
import gollum from '../../assets/gollum.png'

const Projects = () => {
  return (
    <section id='Projects'>
      <h2>Projects</h2>
      <div className="container project__container">
        <article className='projects'>
          <div className='project__image'><img src={gollum} alt="Gollum." className='oversized_project_image' /></div>
          <div className="project__head"><h3>Gollum</h3></div>
          <div className="project__org"><small>ConverseNow AI.</small></div>
          <div className="project__desc"><small>I designed and implemented optimized APIs for customer facing tools using python.
            Enhanced the UX by effectively fixing bugs and optimizing the overall performance.</small></div>
        </article>
        <article className='projects'>
          <div className='project__image'><img src={Watchdog} alt="Log Watchdog." className='oversized_project_image' /></div>
          <div className="project__head"><h3>Log Watchdog</h3></div>
          <div className="project__org"><small>ConverseNow AI.</small></div>
          <div className="project__desc"><small>I designed and developed an internal tool to check and maintain P.C.I compliance of company logs
            automatically. Wrote an algorithm to detect credit cards in logs. The algorithm works by using multiple techniques and
            algorithms like Luhn's algorithm and finite state machines. Automated CI/CD pipline with GitHub Actions and deployed on GCP as a Docker image.</small></div>
        </article>
        <article className='projects'>
          <div className='project__image'><img src={Inspector} alt="Menu Inspector." className='oversized_project_image' /></div>
          <div className="project__head"><h3>Menu Inspector</h3></div>
          <div className="project__org"><small>ConverseNow AI.</small></div>
          <div className="project__desc"><small>I designed and developed an internal tool to compare different menus and the different versions of a
            particular internal menus, menu functions , translations, translation rules and items. The tool is basically an amalgamation of diff and git but for menus.</small></div>
        </article>
        <article className='projects'>
          <div className='project__image'><img src={Project1Img} alt="Portfolio Website" /></div>
          <div className="project__head"><h3>Portfolio Website</h3></div>
          <div className="project__desc"><small>My personal portfolio built with ReactJS. Reactive and compatible with a variety of device sizes.</small></div>
          <div className="project__cta">
            <a href="https://github.com/D0T7/Portfolio" className='btn' target='_blank' rel="noreferrer">GitHub</a>
          </div>
        </article>
        <article className='projects'>
          <div className='project__image'><img src={Project2Img} alt="AI-Enabled Fintech B2B Invoice Management Application" /></div>
          <div className="project__head"><h3>AI-Enabled Fintech B2B Invoice Management Application</h3></div>
          <div className="project__org"><small>HighRadius.</small></div>
          <div className="project__desc"><small>A webapp with a React front-end, JDBC for the backend, and MySQL for the database management system.
            HTTPS requests were handled by Axios. To predict the clear_date for invoices, an AI prediction model was constructed and Flask was used to connect it to the front end.
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