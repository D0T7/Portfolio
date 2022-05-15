import React from 'react'
import { FaRegFileCode } from 'react-icons/fa'
import { SiJava, SiJavascript, SiKotlin, SiPython, SiMysql, SiAndroidstudio, SiCss3, SiHtml5, SiSpringboot, SiReact } from 'react-icons/si'
import { AiOutlinePartition } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { DiMysql } from 'react-icons/di'
import './Experience.css'

const Skills = () => {
    return (
        <section id='Skills'>
            <h2>Experience</h2>
            <div className="container experience__container">
                <div className='experience__programming'>
                    <h3>Programming Languages</h3>
                    <div className="experience__content">
                        <article className='experience_details'>
                            <div>
                                <FaRegFileCode className='experience__details-icon'/>
                                <h4>C / C++</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <SiJava className='experience__details-icon'/>
                                <h4>Java</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <SiJavascript className='experience__details-icon'/>
                                <h4>JavaScript</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <SiKotlin className='experience__details-icon'/>
                                <h4>Kotlin</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <SiPython className='experience__details-icon'/>
                                <h4>Python</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <DiMysql className='experience__details-icon'/>
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
                                <SiAndroidstudio className='experience__details-icon'/>
                                <h4>Android App Development</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <SiCss3 className='experience__details-icon'/>
                                <h4>CSS / CSS3</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <SiHtml5 className='experience__details-icon'/>
                                <h4>HTML / HTML5</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <SiSpringboot className='experience__details-icon'/>
                                <h4>JDBC</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <SiMysql className='experience__details-icon'/>
                                <h4>My SQL</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <AiOutlinePartition className='experience__details-icon'/>
                                <h4>Machine Learning</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <SiReact className='experience__details-icon'/>
                                <h4>ReactJS</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <div>
                                <CgWebsite className='experience__details-icon'/>
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