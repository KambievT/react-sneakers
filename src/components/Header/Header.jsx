import React from 'react'
import LinkIco from './../ui/LinkIco'
import './Header.scss'
import { BsFillBagHeartFill } from 'react-icons/bs'
import { RiShoppingBag3Fill } from 'react-icons/ri'

export default function Header() {
  return (
    <>
        <header className="header">
            <div className="logo">
                <img src="/src/assets/Frame.png" alt="" />
            </div>
            <nav className="header__nav">
                <LinkIco className='header__nav-btn'>
                    <BsFillBagHeartFill  size={30}/>
                </LinkIco>
                <LinkIco className='header__nav-btn'>
                    <RiShoppingBag3Fill size={30} />
                </LinkIco>
            </nav>
        </header>
    </>
  )
}