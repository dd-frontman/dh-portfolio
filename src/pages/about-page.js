/*
* about page
* @author den-dev97 Khaustov D. khausden@gmail.com
* 27.02.2021
*/
import React from "react";
import Title from "../components/title";
import ImageSlider from "../components/image-slider";
import '../styles/_about.scss';
import Button from "../components/button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDatabase} from "@fortawesome/free-solid-svg-icons";
import {faHtml5} from "@fortawesome/free-brands-svg-icons/faHtml5";
import {faCss3} from "@fortawesome/free-brands-svg-icons/faCss3";
import {faBootstrap} from "@fortawesome/free-brands-svg-icons/faBootstrap";
import {faJsSquare} from "@fortawesome/free-brands-svg-icons/faJsSquare";
import {faNodeJs} from "@fortawesome/free-brands-svg-icons/faNodeJs";
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact";
import {faVuejs} from "@fortawesome/free-brands-svg-icons/faVuejs";
import {faSass} from "@fortawesome/free-brands-svg-icons/faSass";
import {faLess} from "@fortawesome/free-brands-svg-icons/faLess";
import {faGulp} from "@fortawesome/free-brands-svg-icons/faGulp";
import {faPhp} from "@fortawesome/free-brands-svg-icons/faPhp";


function AboutPage() {
    return (
        <div className="about-page">
            <Title header={'Обо мне'} reflection={'Обо мне'}/>
            <div className="about-page__main-info">
                <ImageSlider/>
                <div className="about-page__info">
                    <h2 className="about-page__info-header">Подробная <span
                        className='about-page__header-inner'>информация:</span></h2>
                    <p className="about-page__info-text">Студент 3-го курса дистанционного обучения.
                        В свободное от работы и учёбы время люблю читать книги, играть в компьютерные игры, занимаюсь
                        спортом :)
                    </p>
                    <div className="about-page__table">
                        <span className="about-page__table-item blue">Полное имя:</span>
                        <span
                            className="about-page__table-item">Хаустов Денис (да-да, без отчества, не удивляйтесь)</span>

                        <span className="about-page__table-item blue">Дата рождения:</span>
                        <span className="about-page__table-item">19.05.1997</span>

                        <span className="about-page__table-item blue">Любимый я.п.:</span>
                        <span className="about-page__table-item">Java Script</span>

                        <span className="about-page__table-item blue">Считаю главным:</span>
                        <span className="about-page__table-item">Упорство, вера в победу, трудолюбие</span>
                    </div>
                    <div className="about-page__btn-container">
                        <Button/>
                    </div>
                </div>
            </div>
            <div className="about-page__skills">
                <Title header={'Используемые технологии'} reflection={'Используемые технологии'}/>
                <div className="about-page__skills-container">
                    <div className="about-page__skills-wrapper">
                        <FontAwesomeIcon icon={faHtml5} className="about-page__skills-item"/>
                        <p className="about-page__skills-description">
                            Знаю что такое объектная модель документа (DOM), дочерние и родительские элементы.
                            Использую на практике тэги всех версий языка гипер-текстовой разметки.
                        </p>
                    </div>
                    <div className="about-page__skills-wrapper">
                        <FontAwesomeIcon icon={faCss3} className="about-page__skills-item"/>
                        <div className="about-page__skills-group">
                            <p className="about-page__skills-description">
                                Именую классы по БЭБ. Довольно глубоко изучил Каскадные Таблицы Стилей, стараюсь
                                использовать
                                весь спектр предоставляемых возможностей, таких как:
                            </p>
                            <ul className="about-page__skills-list">
                                <li className="about-page__list-item">Наследование и каскад</li>
                                <li className="about-page__list-item">Группировка селекторов, комбинаторы</li>
                                <li className="about-page__list-item">Селекторы псевдоклассов</li>
                                <li className="about-page__list-item">Анимации, градиенты, переходы, трансформации</li>
                                <li className="about-page__list-item">Часто использую Flex-Box и Grid</li>
                                <li className="about-page__list-item">Адаптивная, кросс-браузерная, mobile-first вёрстка и т.д.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="about-page__skills-wrapper">
                        <FontAwesomeIcon icon={faBootstrap} className="about-page__skills-item"/>
                        <p className="about-page__skills-description">
                            Первый фреймворк, который я стал использовать в повседневных задачах на первом месте работы.
                            Очень нравится отзывчивость Бутстрапа и его простота в использовании при помощи классов. Но
                            есть и вторая сторона - это его вес. Не всегда уместно использовать данный фреймворк, если
                            нужна быстрота и скорость загрузки страниц.
                        </p>
                    </div>
                    <div className="about-page__skills-wrapper">
                        <FontAwesomeIcon icon={faJsSquare} className="about-page__skills-item"/>
                        <div className="about-page__skills-group">
                            <p className="about-page__skills-description">
                                Особенный язык программирования. Особенный он по тому что в нём нет строгой типизации
                                (из-за этого был создан TypeScript) и есть приведение типов, из-за чего язык больше используется
                                для фунционального программирования, а не объектно-ориентрированного. Из данного языка
                                программирования я знаю:
                            </p>
                            <ul className="about-page__skills-list">
                            </ul>
                        </div>

                    </div>
                    <div className="about-page__skills-wrapper">
                        <FontAwesomeIcon icon={faNodeJs} className="about-page__skills-item"/>
                        <p className="about-page__skills-description">
                        </p>
                    </div>
                    <div className="about-page__skills-wrapper">
                        <FontAwesomeIcon icon={faReact} className="about-page__skills-item"/>
                        <p className="about-page__skills-description">
                        </p>
                    </div>
                    <div className="about-page__skills-wrapper">
                        <FontAwesomeIcon icon={faVuejs} className="about-page__skills-item"/>
                        <p className="about-page__skills-description">
                        </p>
                    </div>
                    <div className="about-page__skills-wrapper">
                        <FontAwesomeIcon icon={faSass} className="about-page__skills-item"/>
                        <p className="about-page__skills-description">
                        </p>
                    </div>
                    <div className="about-page__skills-wrapper">
                        <FontAwesomeIcon icon={faLess} className="about-page__skills-item"/>
                        <p className="about-page__skills-description">
                            В разработке

                        </p>
                    </div>
                    <div className="about-page__skills-wrapper">
                        <FontAwesomeIcon icon={faGulp} className="about-page__skills-item"/>
                        <p className="about-page__skills-description">
                        </p>
                    </div>
                    <div className="about-page__skills-wrapper">
                        <FontAwesomeIcon icon={faPhp} className="about-page__skills-item"/>
                        <p className="about-page__skills-description">
                        </p>
                    </div>
                    <div className="about-page__skills-wrapper">
                        <FontAwesomeIcon icon={faDatabase} className="about-page__skills-item"/>
                        <p className="about-page__skills-description">
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;