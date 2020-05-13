import styled from "styled-components"
import border from "../styled/border"
export const SearchWrap = border({
  Comp:styled.div `
    padding:0.1rem 0.15rem;
    div {
      border:1px solid #000;
      display:flex;
      justify-content:center;
      align-items:center;
      height:0.4rem;
      color:#000;
      background:#fff;
      img {
        width:0.22rem;
        height:0.22rem;
        margin-right:0.05rem;
      }
    }
    `
})