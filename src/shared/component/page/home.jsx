// @flow

import React from 'react'
import injectSheet from 'react-jss'
import Typed from '../typed'

// import ModalExample from '../modal-example'
import { STATIC_PATH } from '../../config'

const styles = {
  image: {
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
    textAlign: 'center',
  },
  myDeal: {
    hook: ['Now this is a story all about how', 'My life got flipped-turned upside down', "And I'd like to take a minute", 'Just sit right there', "I'll tell you how..."],
    request: "I'd love to become a Junior Front End Software Engineer at Modernize",
    qualifications: {
      education: "Recent graduate from UT Austin's coding bootcamp",
      skills: {
        Strong: ['HTML5', 'CSS3', 'Javscript', 'jQuery', 'nodeJS', 'React'],
        Experienced: ['MySQL', 'Linux'],
        Familiar: ['React Native', 'Angular2', 'Laravel', 'mongoDB'],
      },
      passionateAbout: ['Taking things apart', 'Finding a better solution', 'Pattern recognition', 'Sustainability'],
    },
  },
}

const HomePage = ({ classes }: { classes: Object }) =>
  <div className={classes.image} >
    <div className={classes.welcome} >
      <div className={classes.top} >
        <Typed className="ml-2" />
      </div>
    </div>
  </div>

export default injectSheet(styles)(HomePage)
