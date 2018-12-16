import React from 'react'
import Layout from 'components/Layout'
import { Input, InputType } from 'components/Input/index'
import { LandingSection } from 'components/LandingImage/index'
import { EmailSignup } from 'components/EmailSignupForm/index'

const Details = ({ location }) => {
  const imageUrl =
    'https://images.pexels.com/photos/958362/pexels-photo-958362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

  return (
    <Layout location={location}>
      <LandingSection imageUrl={imageUrl}>
        <h1>Details will be coming soon!</h1>
      </LandingSection>
    </Layout>
  )
}

export default Details
