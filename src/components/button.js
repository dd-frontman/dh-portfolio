/*
* button
* @author den-dev97 Khaustov D. khausden@gmail.com
* 01.03.2021
*/
import React from 'react';
import {AwesomeButton} from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
import resume from "./Хаустов Денис.pdf";


function Button() {
    return (
        <AwesomeButton
            cssModule={AwesomeButtonStyles}
            type="primary"
            href={resume}
            target="_blank"
        >
            Посмотреть полное резюме
        </AwesomeButton>
    )
}

export default Button