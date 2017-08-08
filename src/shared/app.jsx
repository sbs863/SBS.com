// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import Helmet from 'react-helmet'
// import injectSheet from 'react-jss'

import HelloPage from './component/page/about'
import Portfolio from './component/page/portfolio'
import HomePage from './component/page/home'
import Footer from './component/footer'
import Nav from './component/nav'
import NotFoundPage from './component/page/not-found'
import { APP_NAME } from './config'
import {
  HOME_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  PORTFOLIO_PAGE_ROUTE,
} from './routes'

const App = () =>
  <div style={{ paddingTop: 100, height: '100%' }} >
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <Nav />
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
      <Route path={ABOUT_PAGE_ROUTE} render={() => <HelloPage />} />
      <Route path={PORTFOLIO_PAGE_ROUTE} render={() => <Portfolio />} />
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>

export default App
