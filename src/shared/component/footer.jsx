// @flow

import React from 'react'
import moment from 'moment'
import { APP_NAME } from '../config'


const Footer = () =>
  <div>
    <div className="container mt-5">
      <footer>
        <p>© {APP_NAME} { moment().format('YYYY') }</p>
      </footer>
    </div>
  </div>

export default Footer
