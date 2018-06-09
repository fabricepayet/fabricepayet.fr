import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import jump from 'jump.js';

const Menu = styled.ul`
  list-style: none;

  li {
    display: inline-block;
  }
`

export default class componentName extends Component {
  render() {
    return (
      <Menu>
        <li>
          <Link
            to="#about"
            onClick={(e) => { e.preventDefault(); jump('#about'); }}
          >
            A propos
          </Link>
        </li>

        <li>
          <Link
            to="#resume"
            onClick={(e) => { e.preventDefault(); jump('#resume'); }}
          >
            Expériences
          </Link>
        </li>

        <li>
          <Link
            to="#projects"
            onClick={(e) => { e.preventDefault(); jump('#projects'); }}
          >
            Projets
          </Link>
        </li>

        <li>
          <Link
            to="#contact"
            onClick={(e) => { e.preventDefault(); jump('#contact'); }}
          >
            Contact
          </Link>
        </li>
      </Menu>
    )
  }
};

