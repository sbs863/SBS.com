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
    gridTemplateColumns: '1fr 150px 250px 275px 300px 1fr',
    gridTemplateRows: '1fr 200px 200px 1fr',
    height: '94%',
    gridTemplateAreas: "'. . . . .' '. exi proj2 proj3 proj4' '. . . . .' '. . . . .'",
    gridColumnGap: '20px',
    gridRowGap: '15px',
  },
  exi: {
    gridArea: 'exi',
    textAlign: 'center',
    justifySelf: 'center',
  },
  proj2: {
    gridArea: 'proj2',
    textAlign: 'center',
    justifySelf: 'center',
  },
  proj3: {
    gridArea: 'proj3',
    textAlign: 'center',
    justifySelf: 'center',
  },
  proj4: {
    gridArea: 'proj4',
    textAlign: 'center',
    justifySelf: 'center',
  },

}

const Portfolio = ({ classes }: { classes: Object }) =>
  <div className={classes.grid} >
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello asynchronously' },
        { property: 'og:title', content: title },
      ]}
    />
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
