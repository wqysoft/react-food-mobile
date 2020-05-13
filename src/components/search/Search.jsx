import React, { Component } from 'react'
import searchImg from "assets/search.png"
import {SearchWrap} from "./styledSearch"
export default class Search extends Component {
  render() {
    return (
      <SearchWrap width="0">
        <div>
          <img src={searchImg} alt=""/>
          <span>想吃什么搜这里，如川菜</span>
        </div>
      </SearchWrap>
    )
  }
}
