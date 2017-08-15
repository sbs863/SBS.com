// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'

const title = 'About Me'

const styles = {
  summary: {
    fontSize: '1.50vw',
    display: 'flex',
    flexDirection: 'end',
  },
}

const HelloPage = ({ classes }: { classes: Object }) =>
  <div className="container mt-4" >
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page about me!' },
        { property: 'og:title', content: title },
      ]}
    />
    <div className="row" >
      <div className="col-12 justify-content-center d-flex flex-column" >
        <h1 className="d-flex justify-content-center" >{title}</h1>
        <p className={classes.summary} >
          Thanks for taking the time to look at my work! Everyone hates writing about themselves,
          I&#39;m no exception. I&#39;ll try to keep this brief so that you have more time to
          explore this space. I graduated in 2013 from UT Austin with a BS in Environmental Science
          and Sustainability. After a couple years in a comfortable yet dead end job, I decided to
          embark on the road to becoming a full stack web developer. I&#39;m in the middle of adding
          content so please check back soon it&#39;s sure to update!
        </p>
      </div>
    </div>
  </div>

export default injectSheet(styles)(HelloPage)
