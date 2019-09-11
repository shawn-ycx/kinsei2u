import React from 'react'

import { makeStyles, Container } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { Link } from 'gatsby-theme-material-ui'
import { MdFace } from 'react-icons/md'
import CartButton from '../Cart/CartButton'
import ActionNav from './ActionNav'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    background: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    fontSize: '1.5em',
  },
}))

const Navigation = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="relative" className={classes.appbar} elevate={0}>
        <Container>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" className={classes.logo}>
                <MdFace />
              </Link>
            </Typography>
            <CartButton />
          </Toolbar>
        </Container>
      </AppBar>
      <ActionNav />
    </div>
  )
}

export default Navigation
