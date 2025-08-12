/*
* nav-bar
* @author dd-frontman
* 26.02.2021
*/
import React from "react";
import './nav-bar.scss';
import avatar from '../../img/avatar.jpg';
import {NavLink} from "react-router-dom";
import Footer from "./footer";

export default function NavBar () {
    return (
        <aside className='nav-bar'>
            <div className="nav-bar__avatar-container">
                <img className="nav-bar__avatar" src={avatar} alt="avatar"/>
            </div>
            <nav className="nav-bar__navigation">
                <NavLink className="nav-bar__navigation-item" to="/main-page" exact activeClassName="active">
                    Главная
                </NavLink>
                <NavLink className="nav-bar__navigation-item" to="/about-page" exact activeClassName="active">
                    Обо мне
                </NavLink>
                <NavLink className="nav-bar__navigation-item" to="/portfolio-page" exact activeClassName="active">
                    Портфолио
                </NavLink>
                <NavLink className="nav-bar__navigation-item" to="/achievements-page" exact activeClassName="active">
                    Достижения
                </NavLink>
                <NavLink className="nav-bar__navigation-item" to="/contacts-page" exact activeClassName="active">
                    Контакты
                </NavLink>
            </nav>
            <footer className="footer">
                <Footer/>
            </footer>
        </aside>
    )
}