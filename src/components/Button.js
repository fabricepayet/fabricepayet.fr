import styled from 'styled-components';
import React, { Component } from 'react'

const ButtonStyled = styled.button`
  background-color: #6d56c1;
  height: 50px;
  border-radius: 25px;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  padding: 15px;
  min-width: 170px;
  text-align: center;
  display: inline-block;
  color: #fff!important;
  font-weight: 600;
  overflow: hidden;
  border: none!important;
  box-shadow: 0 1px 29px rgba(0,0,0,.16);
`

class Button extends Component {
  render() {
    return <ButtonStyled>{this.props.label}</ButtonStyled>
  }
}

export default Button;
