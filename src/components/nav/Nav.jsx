import React from 'react'
import { RiHome4Fill } from 'react-icons/ri'
import { RiInformationFill } from 'react-icons/ri'
import { MdOutlineWork } from 'react-icons/md'
import { RiMessage3Fill } from 'react-icons/ri'
import {GiSkills} from 'react-icons/gi'
import { useState } from 'react'
import "./Nav.css"

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#Home')
    return (
        <nav className="nav">
            <a href='#Home' onClick={() => setActiveNav('#Home')} className={activeNav === '#Home' ? 'active' : ''}>
                <RiHome4Fill /></a>
            <a href='#About' onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}>
                <RiInformationFill /></a>
            <a href='#Skills' onClick={() => setActiveNav('#Skills')} className={activeNav === '#Skills' ? 'active' : ''}>
                <GiSkills /></a>
            <a href='#Projects' onClick={() => setActiveNav('#Projects')} className={activeNav === '#Projects' ? 'active' : ''}>
                <MdOutlineWork /></a>
            <a href='#Contact' onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}>
                <RiMessage3Fill /></a>
        </nav>
    )
}

export default Nav