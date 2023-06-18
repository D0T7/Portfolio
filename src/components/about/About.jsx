import React from 'react'
// import ME from '../../assets/me-about.jpg'
// import { MdOutlineWork } from 'react-icons/md'
import { TiInfoLarge } from 'react-icons/ti'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import { FaGraduationCap } from 'react-icons/fa'
import { GiTrophy } from 'react-icons/gi'


import "./About.css"


const About = () => {
  return (
    <section id='About'>
      <h5>Get to know </h5>
      <h2>About Me</h2>
      <div className="container about__container">
        {/* <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='me' />
          </div>
        </div> */}

        <div className='about__content'>
          <div className="about__cards">
            <article className="about__card">
              <TiInfoLarge className='about__icon' />
              <h5>I'm</h5>
              <small>an experienced developer with a strong background in developing automation tools,
                scalable applications, APIs, and implementing efficient solutions using technologies
                such as Flask, Git, GitHub, Go, Google Cloud, Kubernetes, PostgreSQL, Python, and ReactJS.
                I have completed two internships while pursuing my B.Tech, gaining valuable industry exposure.
                Skilled in problem-solving, delivering efficient solutions, and driving productivity. </small>
            </article>
            {/* End of About Me Article */}


            {/* <a href='#Projects'>
              <article className="about__card">
                <MdOutlineWork className='about__icon' />
                <h5>Projects</h5>
                <div className='project_list'>
                  <h3>1 : <small>Gollum</small> </h3> <br />
                  <h3>2 : <small>Log WatchDog</small> </h3> <br />
                  <h3>3 : <small>Menu Inspector</small> </h3> <br />
                  <h3>4 : <small>Portfolio Website(ReactJS)</small> </h3> <br />
                  <h3>5 : <small>AI-Enabled Fintech B2B Invoice Management Application</small></h3> <br />
                  <h3>6 : <small>Instagram Redirector(JavaScript)</small></h3> <br />
                  <h3>7 : <small>Age and Gender Predection(Python)</small></h3> <br />
                  <h3>8 : <small>Face Detection and Recognition(Python)</small></h3> <br />
                </div>
              </article>
            </a>
            End of Projects Article */}



            <article className="about__card" >
              <AiFillSafetyCertificate className='about__icon' />
              <h5>Certifications</h5>
              <div className='certification_list'>
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
              </div>

            </article>
            {/* End of Certifications Article */}



            <article className="about__card">
              <FaGraduationCap className='about__icon' />
              <h5>Education</h5>
              <small>B.Tech - Lovely Professional University <br /> - 2019-2023 <br />- 8.4 CGPA<br /></small><br /><hr />
              <small><br />12th - Sri Pratap Higher Secondary School<br /> - 2019<br /></small><br /><hr />
              <small><br />10th - J&K Public High School<br /> - 2017 </small>
            </article>
            {/* End of Education Article */}



            <article className="about__card">
              <GiTrophy className='about__icon' />
              <h5>Awards</h5>
              <h3>1 : <small>
                <a href="https://drive.google.com/file/d/1m9MqhNPKnMGMax1qWPYLKRfXTh8lfixl/view" target='_blank' rel="noreferrer">STRONGER TOGETHER</a>
              </small> </h3> <br />
            </article>
            {/* End of Awards Article */}



          </div>
        </div>
      </div>
    </section>
  )
}

export default About