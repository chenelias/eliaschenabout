import React from 'react'
import '../css/card.css';

export default function Card() {
  return (
    <div className="card--main">
        <img className="card--img" src={require("../img/catimg.jpg")} />
        <h1 className="card--title">EliasChen</h1>
        <p className="card--content">Hello there I'm EliasChen , I love learning English Chinese Math Information-Security programming-language and every thing happens around me and my best friend Ruby(cat). 
        <br/>Coding is fun and It also gives me a lots of achievement then you well have more power to keep learning it. Hope this happens on yourself!</p>
        <div className="card--link">
        <a className="card--herf-fb" target="_blank" href="https://www.facebook.com/profile.php?id=100074943037854">Facebook Profile</a>
        <a className="card--herf-ig" target="_blank" href="https://www.instagram.com/codechen9810/">Instagram Profile</a>
        <div className="card--herf-footer"></div>
        </div>
    </div>
  )
}