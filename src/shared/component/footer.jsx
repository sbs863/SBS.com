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
    height: '15%',
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
      <FontAwesome
        className="super-crazy-colors"
        name="rocket"
        size="2x"
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
      © {APP_NAME} { moment().format('YYYY') }
    </footer>
  </div>

export default injectSheet(styles)(Footer)
