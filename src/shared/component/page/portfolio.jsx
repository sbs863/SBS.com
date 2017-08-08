// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'
import { STATIC_PATH } from '../../config'

import Modal from '../modal'

const title = 'Portfolio'

const Styles = {
  portfolio: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
  },
}

const Portfolio = () =>
  <div className="container mt-4 d-flex flex-wrap" >
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello asynchronously' },
        { property: 'og:title', content: title },
      ]}
    />
    <div className="col-sm-4 portfolio-item" >
      <div className="portfolio-link" href="#portfolioModal1" data-toggle="modal" >
        <img className="img-fluid" src={`${STATIC_PATH}/images/logo.png`} alt="" />
      </div>
    </div>
    <div className="col-sm-4 portfolio-item" >
      <div className="portfolio-link" href="#portfolioModal1" data-toggle="modal" >
        <img className="img-fluid" src={`${STATIC_PATH}/images/logo.png`} alt="" />
      </div>
    </div>
    <div className="col-sm-4 portfolio-item" >
      <div className="portfolio-link" href="#portfolioModal1" data-toggle="modal" >
        <img className="img-fluid" src={`${STATIC_PATH}/images/logo.png`} alt="" />
      </div>
    </div>
    <div className="col-sm-4 portfolio-item" >
      <div className="portfolio-link" href="#portfolioModal1" data-toggle="modal" >
        <img className="img-fluid" src={`${STATIC_PATH}/images/logo.png`} alt="" />
      </div>
    </div>
    <div className="col-sm-4 portfolio-item" >
      <div className="portfolio-link" href="#portfolioModal1" data-toggle="modal" >
        <img className="img-fluid" src={`${STATIC_PATH}/images/logo.png`} alt="" />
      </div>
    </div>
    <div className="col-sm-4 portfolio-item" >
      <div className="portfolio-link" href="#portfolioModal1" data-toggle="modal" >
        <img className="img-fluid" src={`${STATIC_PATH}/images/logo.png`} alt="" />
      </div>
    </div>
    <div className="col-sm-4 portfolio-item" >
      <div className="portfolio-link" href="#portfolioModal1" data-toggle="modal" >
        <img className="img-fluid" src={`${STATIC_PATH}/images/logo.png`} alt="" />
      </div>
    </div>
    <div className="col-sm-4 portfolio-item" >
      <div className="portfolio-link" href="#portfolioModal1" data-toggle="modal" >
        <img className="img-fluid" src={`${STATIC_PATH}/images/logo.png`} alt="" />
      </div>
    </div>
    <div className="col-sm-4 portfolio-item" >
      <div className="portfolio-link" href="#portfolioModal1" data-toggle="modal" >
        <img className="img-fluid" src={`${STATIC_PATH}/images/logo.png`} alt="" />
      </div>
    </div>
    <Modal />
  </div>


export default injectSheet(Styles)(Portfolio)
