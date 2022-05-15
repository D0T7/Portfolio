import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {VscGithubInverted} from 'react-icons/vsc'
import {FaHackerrank} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='http://www.linkedin.com/in/asim~khan' target='_blank' rel="noreferrer" ><BsLinkedin/></a>
        <a href='https://github.com/D0T7' target='_blank' rel="noreferrer"><VscGithubInverted/></a>
        <a href='https://www.hackerrank.com/uze761' target='_blank' rel="noreferrer"><FaHackerrank/></a>
    </div>
  )
}

export default HeaderSocials