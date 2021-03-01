/*
* image-slider
* @author den-dev97 Khaustov D. khausden@gmail.com
* 28.02.2021
*/
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../styles/_image-slider.scss';
import green from '../img/slider-img/green.jpg';
import barbell from '../img/slider-img/barbell.jpg';
import hills from '../img/slider-img/hills.jpg';
import hackathon from '../img/slider-img/hackathon.jpg';
import stairs from '../img/slider-img/stairs.jpg';


function ImageSlider() {
    return (
        <AwesomeSlider>
            <div data-src={barbell} />
            <div data-src={green} />
            <div data-src={hills} />
            <div data-src={hackathon} />
            <div data-src={stairs} />
        </AwesomeSlider>
    )
}

export default ImageSlider