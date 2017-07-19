// @flow

import React from 'react'
import { STATIC_PATH } from '../config'

const Logo = () =>
  <span className="logo" >
    <a href="/" >
      <img src={`${STATIC_PATH}/images/logo.png`} height="75" width="75" alt="text here" />
    </a>
  </span>

export default Logo
