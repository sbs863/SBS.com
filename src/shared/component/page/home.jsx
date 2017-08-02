// @flow

import React from 'react'
import injectSheet from 'react-jss'

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
  typewriter: {
    overflow: 'hidden',
    borderRight: '.15em solid orange',
    whiteSpace: 'nowrap',
    margin: '0 auto',
    letterSpacing: '.1em',
    animation: 'typing 2s steps(16, end), blink-caret .75s step-end infinite',
  },
}
const HomePage = ({ classes }: { classes: Object }) =>
  <div className={classes.background} >
    <div className={classes.welcome} >
      <div className={classes.top} >
        <div className="container-fluid" >
          <div className="row" >
            <div>
              <h2 className={classes.typewriter} >
                Hello World
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

export default injectSheet(styles)(HomePage)
