import React from 'react'
import Layout from 'components/Layout'
import { LandingSection } from 'components/LandingImage/index'
import { EmailSignup } from 'components/EmailSignupForm/index'

const Signup = ({ location }) => {
  return (
    <Layout location={location}>
      <LandingSection>
        <EmailSignup
          formText="Enter your email below to receive updates about our big day."
          hasCaptcha={true}
        />
      </LandingSection>
    </Layout>
  )
}

export default Signup
