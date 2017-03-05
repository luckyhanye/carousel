import React from 'react'
import ReactDOM from 'react-dom'

import Carousel from "./carousel.js"   //轮播图


import Pic1 from "../images/pic-1.jpg"
import Pic2 from "../images/pic-2.jpg"
import Pic3 from "../images/pic-3.jpg"
import Pic4 from "../images/pic-4.jpg"
import Pic5 from "../images/pic-5.jpg"

let imgs=[Pic1,Pic2,Pic3,Pic4,Pic5]

ReactDOM.render(<Carousel time={2000} imgs={imgs}/>,document.getElementById('app'))   //轮播图
