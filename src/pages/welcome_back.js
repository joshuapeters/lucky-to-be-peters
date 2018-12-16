import React from 'react'
import Layout from 'components/Layout'
import { Input, InputType } from 'components/Input/index'
import { LandingSection } from 'components/LandingImage/index'
import { EmailSignup } from 'components/EmailSignupForm/index'

const WelcomeBack = ({ location }) => {
  return (
    <Layout location={location}>
      <LandingSection>
        <h1>May 25th, 2019</h1>
        <h2>#luckytobepeters</h2>
        <EmailSignup formText="Welcome back! If you made a mistake entering your information please resubmit it below." />
      </LandingSection>
    </Layout>
  )
}

export default WelcomeBack
