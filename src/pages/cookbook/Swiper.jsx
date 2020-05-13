import React, { Component } from 'react'
import { Carousel } from "antd-mobile"
import { SwiperWrap } from "./styleCookbook"
import swiper1 from 'assets/swiper-1.jpg'
import swiper2 from 'assets/swiper-2.jpg'
import swiper3 from 'assets/swiper-3.jpg'
export default class Swiper extends Component {
  render() {
    return (
      <SwiperWrap>
        <Carousel
        autoplay={false}
        infinite
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={index => console.log('slide to', index)}
      >
        <img src={swiper1} alt=""/>
        <img src={swiper2} alt=""/>
        <img src={swiper3} alt=""/>
      </Carousel>
      </SwiperWrap>
    )
  }
}
