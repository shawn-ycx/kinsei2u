import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import StoreContext, { defaultStoreContext } from '../context/StoreContext'
import Navigation from '../components/Navigation'

import { useTheme, ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import { IconButton } from 'gatsby-theme-material-ui'

import clsx from 'clsx'
import { MdChevronRight, MdChevronLeft } from 'react-icons/md'
import Cart from '../components/Cart'
import ActionNav from '../components/Navigation/ActionNav'

import theming from './theme'
import { layoutStyles } from './layoutStyles'
import Footer from '../components/Footer'

class Layout extends React.Component {
  state = {
    store: {
      ...defaultStoreContext,
      addVariantToCart: (variantId, quantity) => {
        if (variantId === '' || !quantity) {
          console.error('Both a size and quantity are required.')
          return
        }

        this.setState(state => ({
          store: {
            ...state.store,
            adding: true,
          },
        }))

        const { checkout, client } = this.state.store
        const checkoutId = checkout.id
        const lineItemsToUpdate = [
          { variantId, quantity: parseInt(quantity, 10) },
        ]

        return client.checkout
          .addLineItems(checkoutId, lineItemsToUpdate)
          .then(checkout => {
            this.setState(state => ({
              store: {
                ...state.store,
                checkout,
                adding: false,
              },
            }))
          })
      },
      removeLineItem: (client, checkoutID, lineItemID) => {
        return client.checkout
          .removeLineItems(checkoutID, [lineItemID])
          .then(res => {
            this.setState(state => ({
              store: {
                ...state.store,
                checkout: res,
              },
            }))
          })
      },
      updateLineItem: (client, checkoutID, lineItemID, quantity) => {
        const lineItemsToUpdate = [
          { id: lineItemID, quantity: parseInt(quantity, 10) },
        ]

        return client.checkout
          .updateLineItems(checkoutID, lineItemsToUpdate)
          .then(res => {
            this.setState(state => ({
              store: {
                ...state.store,
                checkout: res,
              },
            }))
          })
      },
      toggleCartDrawer: () => {
        this.setState(state => ({
          store: {
            ...state.store,
            cartOpen: !state.store.cartOpen,
          },
        }))
      },
    },
  }

  async initializeCheckout() {
    // Check for an existing cart.
    const isBrowser = typeof window !== 'undefined'
    const existingCheckoutID = isBrowser
      ? localStorage.getItem('shopify_checkout_id')
      : null

    const setCheckoutInState = checkout => {
      if (isBrowser) {
        localStorage.setItem('shopify_checkout_id', checkout.id)
      }

      this.setState(state => ({
        store: {
          ...state.store,
          checkout,
        },
      }))
    }

    const createNewCheckout = () => this.state.store.client.checkout.create()
    const fetchCheckout = id => this.state.store.client.checkout.fetch(id)

    if (existingCheckoutID) {
      try {
        const checkout = await fetchCheckout(existingCheckoutID)

        // Make sure this cart hasn’t already been purchased.
        if (!checkout.completedAt) {
          setCheckoutInState(checkout)
          return
        }
      } catch (e) {
        localStorage.setItem('shopify_checkout_id', null)
      }
    }

    const newCheckout = await createNewCheckout()
    setCheckoutInState(newCheckout)
  }

  componentDidMount() {
    this.initializeCheckout()
  }

  render() {
    const { children, window } = this.props

    return (
      <StoreContext.Provider value={this.state.store}>
        <CssBaseline />
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={data => (
            <RenderLayoutComponent
              window={window}
              data={data}
              children={children}
            />
          )}
        />
      </StoreContext.Provider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const RenderLayoutComponent = ({ data, children, window }) => {
  const context = useContext(StoreContext)
  const classes = layoutStyles()
  const theme = useTheme()

  return (
    <ThemeProvider theme={theming}>
      <div className={classes.root}>
        <CssBaseline />
        <Navigation
          controller={clsx(classes.appBar, {
            [classes.appBarShift]: context.cartOpen,
          })}
          window={window}
        />
        <ActionNav
          controller={clsx(classes.appBar, {
            [classes.appBarShift]: context.cartOpen,
          })}
        />
        <div
          className={clsx(classes.content, {
            [classes.contentShift]: context.cartOpen,
          })}
        >
          {children}
        </div>
        {/* <Footer /> */}
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={context.cartOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={context.toggleCartDrawer}>
              {theme.direction === 'rtl' ? (
                <MdChevronLeft />
              ) : (
                <MdChevronRight />
              )}
            </IconButton>
          </div>
          <Divider />
          <Cart />
        </Drawer>
      </div>
    </ThemeProvider>
  )
}

RenderLayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
