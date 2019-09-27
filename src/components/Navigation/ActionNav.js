import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, GatsbyLink } from 'gatsby-theme-material-ui'
import { Box, Typography, Container } from '@material-ui/core'
import { MdMenu } from 'react-icons/md'

const MegaMenu = styled.div`
  position: absolute;
  left: 0;
  background: white;
  width: 100%;
  display: none;
  color: black;
  padding: 2em;
  z-index: 99;
  border-radius: 0px 8px 8px 8px;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.14);

  & .menu-col-1 {
    width: 25%;
  }

  & .menu-col-2 {
    width: 50%;
  }

  & .menu-col-1,
  & .menu-col-2,
  & .menu-col-3,
  & .menu-col-4 {
    float: left;
  }

  & .menu-category {
    margin: 2.5em 0 0.5em;

    &:first-of-type {
      margin-top: 0;
    }
  }

  & li {
    display: block;
  }

  & a {
    padding: 0;
    margin-bottom: 0.35em;
    &:hover {
      text-decoration: underline;
    }
  }
`

const InlineList = styled.nav`
  background-color: white;

  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
    text-align: left;
  }

  & li {
    display: inline-block;
    padding: 1rem;

    &:hover {
      background: white;
      cursor: pointer;

      & ${MegaMenu} {
        display: block;
        cursor: default;
      }
    }
  }
`

const ActionNav = props => {
  return (
    <InlineList>
      <Container maxWidth="xl">
        <ul>
          <li>
            <MdMenu /> All Departments
            <MegaMenu>
              <div class="menu-col-1">
                <h3 class="menu-category">Category</h3>
                <ul>
                  <li>
                    <a href="">Link 01</a>
                  </li>
                  <li>
                    <a href="">Link 02</a>
                  </li>
                  <li>
                    <a href="">Link 03</a>
                  </li>
                  <li>
                    <a href="">Link 04</a>
                  </li>
                  <li>
                    <a href="">Link 05</a>
                  </li>
                  <li>
                    <a href="">Link 01</a>
                  </li>
                  <li>
                    <a href="">Link 02</a>
                  </li>
                  <li>
                    <a href="">Link 03</a>
                  </li>
                  <li>
                    <a href="">Link 04</a>
                  </li>
                  <li>
                    <a href="">Link 05</a>
                  </li>
                  <li>
                    <a href="">Link 01</a>
                  </li>
                  <li>
                    <a href="">Link 02</a>
                  </li>
                  <li>
                    <a href="">Link 03</a>
                  </li>
                  <li>
                    <a href="">Link 04</a>
                  </li>
                  <li>
                    <a href="">Link 05</a>
                  </li>
                </ul>

                <h3 class="menu-category">Category</h3>
                <ul>
                  <li>
                    <a href="">Link 01</a>
                  </li>
                  <li>
                    <a href="">Link 02</a>
                  </li>
                </ul>

                <h3 class="menu-category">Category</h3>
                <ul>
                  <li>
                    <a href="">Link 01</a>
                  </li>
                  <li>
                    <a href="">Link 02</a>
                  </li>
                </ul>
              </div>

              <div class="menu-col-1">
                <h3 class="menu-category">Category</h3>
                <ul>
                  <li>
                    <a href="">Link 01</a>
                  </li>
                  <li>
                    <a href="">Link 02</a>
                  </li>
                  <li>
                    <a href="">Link 03</a>
                  </li>
                  <li>
                    <a href="">Link 04</a>
                  </li>
                  <li>
                    <a href="">Link 05</a>
                  </li>
                </ul>

                <h3 class="menu-category">Category</h3>
                <ul>
                  <li>
                    <a href="">Link 01</a>
                  </li>
                  <li>
                    <a href="">Link 02</a>
                  </li>
                  <li>
                    <a href="">Link 03</a>
                  </li>
                  <li>
                    <a href="">Link 04</a>
                  </li>
                  <li>
                    <a href="">Link 05</a>
                  </li>
                </ul>
              </div>

              <div class="menu-col-1">
                <h3 class="menu-category">Category</h3>
                <ul>
                  <li>
                    <a href="">Link 01</a>
                  </li>
                  <li>
                    <a href="">Link 02</a>
                  </li>
                  <li>
                    <a href="">Link 03</a>
                  </li>
                  <li>
                    <a href="">Link 04</a>
                  </li>
                  <li>
                    <a href="">Link 05</a>
                  </li>
                </ul>

                <h3 class="menu-category">Category</h3>
                <ul>
                  <li>
                    <a href="">Link 01</a>
                  </li>
                  <li>
                    <a href="">Link 02</a>
                  </li>
                  <li>
                    <a href="">Link 03</a>
                  </li>
                  <li>
                    <a href="">Link 04</a>
                  </li>
                  <li>
                    <a href="">Link 05</a>
                  </li>
                </ul>
              </div>

              <div class="menu-col-1">
                <h3 class="menu-category">Category</h3>
                <ul>
                  <li>
                    <a href="">Link 01</a>
                  </li>
                  <li>
                    <a href="">Link 02</a>
                  </li>
                  <li>
                    <a href="">Link 03</a>
                  </li>
                  <li>
                    <a href="">Link 04</a>
                  </li>
                  <li>
                    <a href="">Link 05</a>
                  </li>
                </ul>

                <h3 class="menu-category">Category</h3>
                <ul>
                  <li>
                    <a href="">Link 01</a>
                  </li>
                  <li>
                    <a href="">Link 02</a>
                  </li>
                  <li>
                    <a href="">Link 03</a>
                  </li>
                  <li>
                    <a href="">Link 04</a>
                  </li>
                  <li>
                    <a href="">Link 05</a>
                  </li>
                </ul>
              </div>
            </MegaMenu>
          </li>
          <li>Sale</li>
          <li>Accesories</li>
        </ul>
      </Container>
    </InlineList>
  )
}

export default ActionNav
