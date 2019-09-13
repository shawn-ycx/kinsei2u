import React from 'react';
import SEO from '../components/seo';
import ProductGrid from '../components/ProductGrid';
import {
  Container,
  Typography,
  Paper,
  makeStyles,
  Grid,
} from '@material-ui/core';
import {
  MdDesktopWindows,
  MdLaptop,
  MdKeyboard,
  MdStayPrimaryPortrait,
  MdLocalPrintshop,
  MdMouse,
  MdUsb,
  MdSecurity,
} from 'react-icons/md';
import uuid from 'uuid/v4';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    height: '125px',
    width: '125px',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const categories = [
  { key: uuid(), title: 'Desktop PC', icon: () => <MdDesktopWindows /> },
  { key: uuid(), title: 'Laptops', icon: () => <MdLaptop /> },
  { key: uuid(), title: 'Printers', icon: () => <MdLocalPrintshop /> },
  { key: uuid(), title: 'Mouse', icon: () => <MdMouse /> },
  { key: uuid(), title: 'Keyboard', icon: () => <MdKeyboard /> },
  { key: uuid(), title: 'PC Accessories', icon: () => <MdUsb /> },
  { key: uuid(), title: 'Mobile Phone', icon: () => <MdStayPrimaryPortrait /> },
  { key: uuid(), title: 'Software', icon: () => <MdSecurity /> },
];

const IndexPage = () => {
  const classes = useStyles();
  const keywords = categories.map(cat => cat.title);

  return (
    <>
      <SEO title="Home" keywords={keywords} />
      <Container maxWidth="lg">
        <Typography variant="h6" gutterBottom>
          Featured Categories
        </Typography>
        <Grid container spacing={3}>
          {categories.map(({ key, title, icon: Icon }) => (
            <Grid item key={key}>
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
    </>
  );
};

export default IndexPage;
