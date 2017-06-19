// @flow

import React from 'react'
import moment from 'moment'
import { APP_NAME } from '../config'

const Footer = () =>
  <div className="container mt-5 footer">
    <footer>
      <p>© {APP_NAME} { moment().format('YYYY') }</p>
    </footer>
  </div>

export default Footer
