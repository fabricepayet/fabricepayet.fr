import React, { Component } from 'react';
import styled from 'styled-components';
import Link, { navigateTo } from 'gatsby-link';
import jump from 'jump.js';

const Menu = styled.ul`
  list-style: none;

  li {
    display: inline-block;
  }
`

export default class componentName extends Component {
  renderLinkSection(sectionIdentifier, sectionTitle) {
    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/') {
        return (
          <li>
            <Link
              to={sectionIdentifier}
              onClick={(e) => { e.preventDefault(); jump(sectionIdentifier); }}
            >
              {sectionTitle}
            </Link>
          </li>
        )
      } else {
        return (
          <li>
            <Link
              to={"/" + sectionIdentifier}
              onClick={(e) => { e.preventDefault(); navigateTo('/'); setTimeout(function () { jump(sectionIdentifier); }, 500) }}
            >
              {sectionTitle}
            </Link>
          </li>
        )
      }
    }
  }

  render() {
    this.renderLinkSection('test');
    return (
      <Menu>
        {this.renderLinkSection('#about', 'A propos')}
        {this.renderLinkSection('#resume', 'Expériences')}
        {this.renderLinkSection('#projects', 'Projets')}
        {this.renderLinkSection('#blog', 'Blog')}
        {this.renderLinkSection('#contact', 'Contact')}
      </Menu>
    )
  }
};

