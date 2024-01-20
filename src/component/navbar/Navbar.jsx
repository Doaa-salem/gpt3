import React from "react";
import "./navbar.css";
//icons
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

//assets
import logo from "../../assets/logo.svg";
import { useState } from "react";
//BEM ---> block element modified
const Navbar = () => {
  const menu = [
    {
      title: "home",
      link: "#home",
    },
    {
      title: "what is GPT?",
      link: "#whatisGPT?",
    },
    {
      title: "open AI",
      link: "#features",
    },
    {
      title: "case Studies",
      link: "#possibility",
    },
    {
      title: "library",
      link: "#blog",
    },
  ];
  const Menu = () => {
    return (
      <>
        {menu.map((e) => {
          return (
            <p>
              <a href={e.link}>{e.title}</a>
            </p>
          );
        })}
      </>
    );
  };
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
            </div>
            <div className='gpt3__navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
