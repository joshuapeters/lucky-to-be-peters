/* eslint-disable prettier/prettier */
import React from 'react'
import Layout from 'components/Layout'
import { Input, InputType } from 'components/Input/index'
import { LandingSection } from 'components/LandingImage/index'
import { EmailSignup } from 'components/EmailSignupForm/index'
import { ButtonGroup } from 'components/ButtonGroup/index'
import { Button } from 'components/Button/index'
import { navigate } from 'gatsby'

const BlogIndex = ({ location }) => {
  function _getIndexButtons() {
    return [
      <Button
        text="Subscribe"
        name="btn-subscribe"
        type="button"
        onClick={_onSubscribeClick}
      />,
      <Button
        text="Details"
        name="btn-details"
        type="button"
        onClick={_onDetailsClick}
      />,
      <Button
        text="Registry"
        name="btn-registry"
        type="button"
        onClick={_onRegistryClick}
      />,
    ]
  }

  function _onSubscribeClick() {
    navigate('/register')
  }

  function _onDetailsClick() {
    navigate('/details')
  }

  function _onRegistryClick() {
    navigate('/registry')
  }

  return (
    <Layout location={location}>
      <LandingSection>
        <h1>May 25th, 2019</h1>
        <h2>#luckytobepeters</h2>
        <ButtonGroup buttons={_getIndexButtons()} />
      </LandingSection>
    </Layout>
  )
}

export default BlogIndex
