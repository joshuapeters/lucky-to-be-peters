/* eslint-disable prettier/prettier */
import React from 'react'
import emergence from 'emergence.js'

import './style.scss'

import 'modern-normalize/modern-normalize.css'
import 'prismjs/themes/prism.css'
import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'
import Input from 'components/Input/index'

class Layout extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const { children } = this.props
    return <div className="c-layout">{children}</div>
  }
}

export default Layout
