import React from 'react'
import Layout from 'components/Layout'
import { Input, InputType } from 'components/Input/index'
import { LandingSection } from 'components/LandingImage/index'
import { EmailSignup } from 'components/EmailSignupForm/index'

const BlogIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <LandingSection>
        <h1>Thank you for your info!</h1>
        <h2>We'll be in touch with updates soon!</h2>
      </LandingSection>
    </Layout>
  )
}

export default BlogIndex
