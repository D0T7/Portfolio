import React from 'react'
import { FaRegFileCode } from 'react-icons/fa'
import { SiJava, SiJavascript, SiKotlin, SiPython, SiMysql, SiAndroidstudio, SiCss3, SiHtml5, SiSpringboot, SiReact, SiGooglecloud, SiCockroachlabs, SiPostgresql, SiGoland, SiGnubash } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import { AiOutlinePartition } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { DiMysql } from 'react-icons/di'
import './Experience.css'
import CnvLogo from './../../assets/conversenow-logo-color.svg'
import HrLogo from './../../assets/HighRadius-Trifecta-2020.svg'


const Skills = () => {
    return (
        <section id='Skills'>
            <h2>Experience</h2>
            <div className="container experience__container">
                <div className='experience__programming'>
                    <h3>Work Experience</h3>
                    <div className="experience__content">
                        <article className='work_experience_details'>
                            <div>
                                <img src={CnvLogo} alt='ConverseNow AI' className='org_icon' />
                                <h4 className='work_org'>Converse Now AI</h4>
                                <h5 className='org_position'>Automation Engineer</h5>
                                <p className='work-description'> <small>My main responsibility is to design and
                                    develop automated testing tools to ensure
                                    software quality and efficiency. I also
                                    automate the testing process and
                                    implement continuous testing to
                                    accelerate software delivery.</small></p>
                            </div>
                        </article>
                        <article className='work_experience_details'>
                            <a href='https://drive.google.com/file/d/1pAvNeS31O5-H6tNX1tEhfo9NBmv1Qn8y/view' target='_blank' rel="noreferrer">
                                <div>
                                    <img src={HrLogo} alt='HighRadius' className='org_icon' />
                                    <h4 className='work_org'>HighRadius</h4>
                                    <h5 className='org_position'>Intern</h5>
                                    <p className='work-description'> <small>Involved in creating full stack web app and
                                        machine learning models.</small></p>

                                </div>
                            </a>

                        </article>
                    </div>
                </div>

                <div className='experience__programming'>
                    <h3>Programming Languages</h3>
                    <div className="experience__content">
                        <article className='experience_details'>
                            <div>
                                <SiGnubash className='experience__details-icon' />
                                <h4>Bash</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <FaRegFileCode className='experience__details-icon' />
                                <h4>C / C++</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <SiGoland className='experience__details-icon' />
                                <h4>Go</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <SiJava className='experience__details-icon' />
                                <h4>Java</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <SiJavascript className='experience__details-icon' />
                                <h4>JavaScript</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <SiKotlin className='experience__details-icon' />
                                <h4>Kotlin</h4>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <div>
                                <SiPython className='experience__details-icon' />
                                <h4>Python</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <DiMysql className='experience__details-icon' />
                                <h4>SQL</h4>
                            </div>
                        </article>
                    </div>
                </div>
                {/* End of Programming Languages */}
                <div className="experience__technologies">
                    <h3>Technologies</h3>
                    <div className="experience__content">
                        <article className='experience_details'>
                            <div>
                                <SiAndroidstudio className='experience__details-icon' />
                                <h4>Android App Development</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <FaGithub className='experience__details-icon' />
                                <h4>GitHub</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <SiGooglecloud className='experience__details-icon' />
                                <h4>Google Cloud</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <SiCockroachlabs className='experience__details-icon' />
                                <h4>Cockroach DB</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <SiCss3 className='experience__details-icon' />
                                <h4>CSS / CSS3</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <SiHtml5 className='experience__details-icon' />
                                <h4>HTML / HTML5</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <SiSpringboot className='experience__details-icon' />
                                <h4>JDBC</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <SiMysql className='experience__details-icon' />
                                <h4>My SQL</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <AiOutlinePartition className='experience__details-icon' />
                                <h4>Machine Learning</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <SiPostgresql className='experience__details-icon' />
                                <h4>Postgres SQL</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <SiReact className='experience__details-icon' />
                                <h4>ReactJS</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <CgWebsite className='experience__details-icon' />
                                <h4>Web Development</h4>
                            </div>
                        </article>
                    </div>
                    {/* End of Technologies */}

                </div>
            </div>
        </section>
    )
}

export default Skills