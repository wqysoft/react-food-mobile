import React, { Component } from 'react'
import Header from "./Header"
import Swiper from "./Swiper"
import Search from "@/search/Search"
export default class Cookbook extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Swiper/>
        <Search/>
      </div>
    )
  }
}
