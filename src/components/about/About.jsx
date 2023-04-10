import React from 'react'
import ME from '../../assets/me-about.jpg'
import { MdOutlineWork } from 'react-icons/md'
import { TiInfoLarge } from 'react-icons/ti'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import { FaGraduationCap } from 'react-icons/fa'


import "./About.css"


const About = () => {
  return (
    <section id='About'>
      <h5>Get to know </h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='me' />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className="about__card">
              <TiInfoLarge className='about__icon' />
              <h5>I'm</h5>
              {/* <small>an effective Student committed to learning, developing relevant
                skills and team contribution, I'm a fast learner possessing
                excellent problem-solving capabilities, and the ability to
                manage a significant workload. I'm self-directed and energetic
                with superior performance in both autonomous and
                collaborative environments.
                <br />I've worked on many projects involving various technologies
                and languages and have experience with multiple programming languages and technologies.
              </small> */}
              <small>an intern working at a startup while balancing my studies, I
                am a highly motivated and dedicated individual committed to
                learning and developing relevant skills. I possess excellent
                problem-solving capabilities and can manage a significant
                workload efficiently. Being a fast learner, I am always looking
                for new opportunities to broaden my horizons and challenge
                myself to improve.
                Whether working autonomously or as part of a team, I am selfdirected and energetic, and my superior performance allows
                me to thrive in either environment. I take pride in my ability to
                collaborate with others on group projects and can work
                collaboratively towards achieving common goals. With a
                passion for learning and a drive for success, I am committed to
                delivering results and making meaningful contributions to any
                team or project I am a part of.
              </small>
            </article>
            <article className="about__card">
              <MdOutlineWork className='about__icon' />
              <h5>Projects</h5>
              <h3>1 : <small>Log WatchDog</small> </h3> <br />
              <h3>2 : <small>Menu Inspector</small> </h3> <br />
              <h3>3 : <small>Portfolio Website(ReactJS)</small> </h3> <br />
              <h3>4 : <small>AI-Enabled Fintech B2B Invoice Management Application</small></h3> <br />
              <h3>5 : <small>Instagram Redirector(JavaScript)</small></h3> <br />
              <h3>6 : <small>Age and Gender Predection(Python)</small></h3> <br />
              <h3>7 : <small>Face Detection and Recognition(Python)</small></h3> <br />
            </article>
            <article className="about__card" >
              <AiFillSafetyCertificate className='about__icon' />
              <h5>Certifications</h5>
              <h3>1 : <small>
                <a href="https://www.myamcat.com/certificate/14426902/data-processing-specialist/211" target='_blank' rel="noreferrer">AMCAT - Data Processing Specialist</a>
              </small></h3>
              <h3>2 : <small>
                <a href="https://www.myamcat.com/certificate/14426902/software-engineer---product/260" target='_blank' rel="noreferrer">AMCAT - Software Engineer - Product</a>
              </small></h3>
              <h3>3 : <small>
                <a href="https://www.myamcat.com/certificate/14426902/software-engineer---it-services/259" target='_blank' rel="noreferrer">AMCAT - Software Engineer - IT Services</a>
              </small></h3>
              <h3>4 : <small>
                <a href="https://www.myamcat.com/certificate/14426902/software-development-trainee/166" target='_blank' rel="noreferrer">AMCAT - Software Development Trainee</a>
              </small></h3>
              <h3>5 : <small>
                <a href="https://www.myamcat.com/certificate/14426902/in-english-comprehension/283" target='_blank' rel="noreferrer">AMCAT - English Comprehension</a>
              </small></h3>
              <h3>6 : <small>
                <a href="https://www.myamcat.com/certificate/14426902/proficiency-in-english/284" target='_blank' rel="noreferrer">AMCAT - Proficiency in English</a>
              </small></h3>
              <h3>7 : <small>
                <a href="https://www.myamcat.com/certificate/14426902/business-consultant/247" target='_blank' rel="noreferrer">AMCAT - Business Consultant</a>
              </small></h3>
              <h3>8 : <small>
                <a href="https://www.myamcat.com/certificate/14426902/business-analyst/94" target='_blank' rel="noreferrer">AMCAT - Business Analyst</a>
              </small></h3>
              <h3>9 : <small>
                <a href="https://www.hackerrank.com/certificates/8f76cbf7a5af" target='_blank' rel="noreferrer">PYTHON</a>
              </small></h3>
              <h3>10 : <small>
                <a href="https://www.hackerrank.com/certificates/a4701f5f8c41" target='_blank' rel="noreferrer">PROBLEM SOLVING</a>
              </small></h3>
              <h3>11 : <small>
                <a href="https://media.geeksforgeeks.org/courses/certificates/ff4b8d3b13d1d5ab593a84369e78e00d.pdf" target='_blank' rel="noreferrer">DATA STRUCTURES AND ALGORITHMS</a>
              </small></h3>
              <h3>12 : <small>
                <a href="https://www.udemy.com/certificate/UC-426b7182-148e-4e47-8391-820d7a19f3ce/" target='_blank' rel="noreferrer">COMPLETE WEB DEVELOPMENT</a>
              </small></h3>
            </article>
            <article className="about__card">
              <FaGraduationCap className='about__icon' />
              <h5>Education</h5>
              <small>B.Tech - Lovely Professional University <br /> - 2019-2023 <br />- 8.4 CGPA<br/></small><br /><hr />
              <small><br/>12th - Sri Pratap Higher Secondary School<br /> - 2019<br/></small><br /><hr />
              <small><br/>10th - J&K Public High School<br /> - 2017 </small>
            </article>
            <article className="about__card">
              <MdOutlineWork className='about__icon' />
              <h5>Awards</h5>
              <h3>1 : <small>
                <a href="https://drive.google.com/file/d/1m9MqhNPKnMGMax1qWPYLKRfXTh8lfixl/view" target='_blank' rel="noreferrer">STRONGER TOGETHER</a>
              </small> </h3> <br />
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About