import React from 'react'
import PropTypes from 'prop-types'
import {
  Toolbar,
  Box,
  AppBar,
  Container,
  useScrollTrigger,
  Menu,
  MenuItem,
} from '@material-ui/core'
import styled from 'styled-components'
import { Link } from 'gatsby-theme-material-ui'

const TransitionAppBar = styled(AppBar)`
  transition: all 300ms 100ms;
`

function ElevationScroll({ children, window }) {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 1,
    position: trigger ? 'fixed' : 'relative',
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default class ActionNav extends React.Component {
  render() {
    return (
      <ElevationScroll window={this.props.window}>
        <TransitionAppBar className={this.props.controller}>
          <Container>
            <Toolbar>
              <Box style={{ width: '100%' }} display="flex" alignItems="center">
                <Link>Shop</Link>
              </Box>
            </Toolbar>
          </Container>
        </TransitionAppBar>
      </ElevationScroll>
    )
  }
}
