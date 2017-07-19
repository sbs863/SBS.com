// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'

import ModalExample from '../modal-example'
import { APP_NAME } from '../../config'

const styles = {
  hoverMe: {
    '&:hover': {
      color: 'red',
    },
  },
  '@media (max-width: 800px)': {
    resizeMe: {
      color: 'red',
    },
  },
  specialButton: {
    composes: ['btn', 'btn-primary'],
    backgroundColor: 'limegreen',
  },
}
// { classes }: { classes: Object }
const HomePage = () =>
  <div className="home" >
    <div>
      <Helmet
        meta={[
          { name: 'description', content: "You're looking at my source code!!! I'm so embarrassed" },
          { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
          { property: 'og:title', content: APP_NAME },
        ]}
      />
      <div className="container" >
        <div className="row justify-content-md-center align-items-center" >
          <div className="col-sm-7 mb-4" >
            <div className="card" style={{ width: '40rem' }} >
              <img className="card-img-top" src="..." alt="Card" />
              <div className="card-block" >
                <h4 className="card-title" >Card title</h4>
                <p className="card-text" >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" role="button" data-toggle="modal" data-target=".js-modal-example" className="btn btn-primary" >Open Modal</button>
              </div>
            </div>
          </div>
          <div className="col-sm-5 mb-4" />
        </div>
      </div>
      <ModalExample />
    </div>
  </div>
export default injectSheet(styles)(HomePage)
