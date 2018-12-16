import React from 'react'
import Layout from 'components/Layout'
import { Input, InputType } from 'components/Input/index'
import { LandingSection } from 'components/LandingImage/index'
import { EmailSignup } from 'components/EmailSignupForm/index'

const Details = ({ location }) => {
  return (
    <Layout location={location}>
      <LandingSection>
        <h1>Details will be coming soon!</h1>
      </LandingSection>
    </Layout>
  )
}

export default Details
