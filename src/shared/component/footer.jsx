// @flow

import React from 'react'
import moment from 'moment'
import FontAwesome from 'react-fontawesome'
import injectSheet from 'react-jss'
import { APP_NAME } from '../config'

const styles = {
  container: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '5%',
    backgroundColor: 'rgb(41,43,44)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: 'rgb(255,255,255)',
  },
}

const Footer = ({ classes }: { classes: Object }) =>
  <div className={classes.container} >
    <footer>
      © {APP_NAME} { moment().format('YYYY') }
    </footer>
  </div>

export default injectSheet(styles)(Footer)
