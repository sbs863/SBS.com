// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'
import { STATIC_PATH } from '../../config'

import Modal from '../modal'

const title = 'Portfolio'

const Styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 150px 250px 275px 300px 1fr',
    gridTemplateRows: '1fr 200px 200px 1fr 1fr',
    height: '94%',
    gridTemplateAreas: "'. . . . .' ' . . tempMessage tempMessage . ' '. exi proj2 proj3 proj4' ",
    gridColumnGap: '20px',
    gridRowGap: '75px',
  },
  tempMessage: {
    gridArea: 'tempMessage',
    textAlign: 'center',
    justifySelf: 'center',
  },
  exi: {
    gridArea: 'exi',
    textAlign: 'center',
    justifySelf: 'center',
    cursor: 'pointer',
  },
  proj2: {
    gridArea: 'proj2',
    textAlign: 'center',
    justifySelf: 'center',
    cursor: 'pointer',
  },
  proj3: {
    gridArea: 'proj3',
    textAlign: 'center',
    justifySelf: 'center',
    cursor: 'pointer',
  },
  proj4: {
    gridArea: 'proj4',
    textAlign: 'center',
    justifySelf: 'center',
    cursor: 'pointer',
  },

}

const Portfolio = ({ classes }: { classes: Object }) =>
  <div className={classes.grid} >
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'My Projects' },
        { property: 'og:title', content: title },
      ]}
    />
    <div className={classes.tempMessage} >
      <div className="container" >
        <h5>This website itself is one of my largest projects. I built it on a full Javscript
          (es2015) stack. Node supplies the backend while React/Redux/React Router provide the front
          end. I also utilized Digital Ocean to setup an Ubuntu server to host it, and installed a
          ssl
          certificate with LetsEncrypt. Unfortunately at the moment I am in the process of
          refactoring this particular page. Please refer to my Github for a look at my other
          projects</h5>
      </div>
    </div>
    <div className={classes.exi} >
      <div href="#portfolioModal1" data-toggle="modal" >
        <img className="img-fluid" src={`${STATIC_PATH}/images/portfolio/EXI.png`} alt="" />
      </div>
    </div>
    <div className={classes.proj2} >
      <div href="#portfolioModal1" data-toggle="modal" >
        <img className="img-fluid" src={`${STATIC_PATH}/images/portfolio/logo43.svg`} alt="" />
      </div>
    </div>
    <div className={classes.proj3} >
      <div href="#portfolioModal1" data-toggle="modal" >
        <img className="img-fluid" src={`${STATIC_PATH}/images/portfolio/logo44.svg`} alt="" />
      </div>
    </div>
    <div className={classes.proj4} >
      <div href="#portfolioModal1" data-toggle="modal" >
        <img className="img-fluid" src={`${STATIC_PATH}/images/portfolio/l3.svg`} alt="" />
      </div>
    </div>
    <Modal />
  </div>


export default injectSheet(Styles)(Portfolio)
