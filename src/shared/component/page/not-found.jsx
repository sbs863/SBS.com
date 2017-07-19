// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'
import { Link } from 'react-router-dom'
import { HOME_PAGE_ROUTE } from '../../routes'
import { STATIC_PATH } from '../../config'

const title = 'Page Not Found!'

const styles = {
  background: {
    background: `url(${STATIC_PATH}/images/404_2.jpg) no-repeat center center fixed`,
    height: '100%',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}
const NotFoundPage = ({ classes }: { classes: Object }) =>
  <div className={classes.background} >
    <Helmet title={title} />
    <div className="container" >
      <div className="row align-items-center" >
        <div className="col-md-12 align-self-center" >
          <h1 style={{ textAlign: 'center' }} >{title}</h1>
          <div style={{ textAlign: 'center' }}>
            <Link to={HOME_PAGE_ROUTE} style={{ textAlign: 'center' }} >Go to the homepage</Link>
          </div>
        </div>
      </div>
    </div>
  </div>


export default injectSheet(styles)(NotFoundPage)
