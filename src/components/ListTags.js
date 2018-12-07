import React, { Component } from 'react';
import styled from 'styled-components';

const List = styled.ul`
  padding: 0;
  list-style: none;
  margin-left: 0;
  margin-bottom: 0;
`

const Tag = styled.div`
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,.14);
  padding: 6px 0 6px 10px ;
  margin-right: 10px;
  border-radius: 3px;
`

export default class ListTags extends Component {
  render() {
    return (
      <List>
        {this.props.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
      </List>
    )
  }
};

