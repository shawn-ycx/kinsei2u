import React from 'react'
import {
  Toolbar,
  Box,
  AppBar,
  Container,
  Menu,
  MenuItem,
} from '@material-ui/core'

export default class ActionNav extends React.Component {
  render() {
    return (
      <AppBar position="relative" className={this.props.controller}>
        <Container>
          <Toolbar>
            <Box style={{ width: '100%' }} display="flex" alignItems="center">
              <Box>
                {/* <Menu>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>My account</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </Menu> */}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    )
  }
}
