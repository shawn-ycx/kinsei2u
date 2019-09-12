import React from 'react'
import SEO from '../components/seo'
import ProductGrid from '../components/ProductGrid'
import {
  Container,
  Typography,
  Paper,
  makeStyles,
  Grid,
} from '@material-ui/core'
import {
  MdDesktopWindows,
  MdLaptop,
  MdKeyboard,
  MdStayPrimaryPortrait,
  MdLocalPrintshop,
  MdMouse,
  MdUsb,
  MdSecurity,
} from 'react-icons/md'

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    height: '125px',
    width: '125px',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

const categories = [
  { title: 'Desktop PC', icon: () => <MdDesktopWindows /> },
  { title: 'Laptops', icon: () => <MdLaptop /> },
  { title: 'Printers', icon: () => <MdLocalPrintshop /> },
  { title: 'Mouse', icon: () => <MdMouse /> },
  { title: 'Keyboard', icon: () => <MdKeyboard /> },
  { title: 'PC Accessories', icon: () => <MdUsb /> },
  { title: 'Mobile Phone', icon: () => <MdStayPrimaryPortrait /> },
  { title: 'Software', icon: () => <MdSecurity /> },
]

const IndexPage = () => {
  const classes = useStyles()

  return (
    <>
      <SEO title="Home" keywords={categories} />
      <Container maxWidth="lg">
        <Typography variant="h6" gutterBottom={2}>
          Featured Categories
        </Typography>
        <Grid container spacing={3}>
          {categories.map(({ title, icon: Icon }) => (
            <Grid item>
              <Paper className={classes.paper}>
                <Typography variant="h3">
                  <Icon />
                </Typography>
                <Typography variant="subtitle2">{title}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
      <ProductGrid />
      <ProductGrid />
      <ProductGrid />
    </>
  )
}

export default IndexPage
