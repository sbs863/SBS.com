// @flow

import React from 'react'
import injectSheet from 'react-jss'
import Typed from '../typed'

// import ModalExample from '../modal-example'
import { STATIC_PATH } from '../../config'

const styles = {
  background: {
    background: `url(${STATIC_PATH}/images/home2.jpg) no-repeat center center fixed`,
    height: '100%',
    backgroundSize: 'cover',
    webkitBackgroundSize: 'cover',
    mozBackgroundSize: 'cover',
    oBackgroundSize: 'cover',
  },
  welcome: {
    display: 'grid',
    minHeight: '100%',
    gridTemplateColumns: '1fr 1fr 1fr%',
    gridTemplateRows: '1fr 1fr 1fr',
    gridTemplateAreas: "'. . .' '. . greeting' '. . .'",
  },
  top: {
    gridArea: 'greeting',
    color: 'white',
  },
}
const HomePage = ({ classes }: { classes: Object }) =>
  <div className={classes.background} >
    <div className={classes.welcome} >
      <div className={classes.top} >
        <div>
          <Typed />
        </div>
      </div>
    </div>
  </div>

export default injectSheet(styles)(HomePage)
