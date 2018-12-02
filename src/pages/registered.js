import React from 'react'
import Layout from 'components/Layout'
import { Input, InputType } from 'components/Input/index'
import { LandingSection } from 'components/LandingImage/index'
import { EmailSignup } from 'components/EmailSignupForm/index'

const BlogIndex = ({ location }) => {
  const imageUrl =
    'https://images.pexels.com/photos/958362/pexels-photo-958362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

  return (
    <Layout location={location}>
      <LandingSection imageUrl={imageUrl}>
        <h1>Thank you for your info!</h1>
        <h2>We'll be in touch with updates soon!</h2>
      </LandingSection>
    </Layout>
  )
}

export default BlogIndex
