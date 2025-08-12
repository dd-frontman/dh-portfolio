/*
* button
* @author dd-frontman
* 01.03.2021
*/
import React from 'react';
import {AwesomeButton} from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";


function Button() {
    return (
        <AwesomeButton
            cssModule={AwesomeButtonStyles}
            type="primary"
            target="_blank"
        >
            Посмотреть полное резюме
        </AwesomeButton>
    )
}

export default Button