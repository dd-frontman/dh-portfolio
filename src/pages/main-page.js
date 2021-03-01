/*
* index page
* @author den-dev97 Khaustov D. khausden@gmail.com
* 27.02.2021
*/
import React from "react";
import '../styles/_main.scss';
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 function MainPage () {
    return (
        <div className="main-page">
            <div className="main-page__content">
                <h1 className="main-page__header">Привет! Меня зовут <span className="main-page__header-inner">Денис.</span></h1>
                <p className="main-page__text">Мне 23 года, проживаю в городе Владивосток. Я Junior+ Frontend Developer, имею за плечами полтора года опыта
                в коммерческой разработке и на данный момент ищу новую работу с переездом в Москву/Санкт-Петербург :)
                </p>
                <div className="main-page__icons">
                    <a className="main-page__icon-holder" href="https://github.com/den-dev97?tab=overview&from=2020-03-01&to=2020-03-31" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="main-page__icons-item" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MainPage;