import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { VscGithubInverted } from 'react-icons/vsc'
import { FaHackerrank } from 'react-icons/fa'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <a href="#Home" className='footer__logo'>Asim Ali Khan</a>
      <ul className='permalinks'>
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
      <div className="footer__socials" >
        <a href='http://www.linkedin.com/in/asim~khan' target='_blank' rel="noreferrer" ><BsLinkedin /></a>
        <a href='https://github.com/D0T7' target='_blank' rel="noreferrer"><VscGithubInverted /></a>
        <a href='https://www.hackerrank.com/uze761' target='_blank' rel="noreferrer"><FaHackerrank /></a>
      </div>
    </footer>
  )
}

export default Footer