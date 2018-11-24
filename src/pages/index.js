import React from 'react'
import Layout from 'components/Layout'
import { Input, InputType } from 'components/Input/index'
import { LandingSection } from 'components/LandingImage/index'

const BlogIndex = ({ location }) => {
  const imageUrl =
    'https://images.pexels.com/photos/958362/pexels-photo-958362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

  return (
    <Layout location={location}>
      <LandingSection imageUrl={imageUrl}>
        <h1>May 25th, 2019</h1>
        <h2>#luckytobepeters</h2>
      </LandingSection>
    </Layout>
  )
}

export default BlogIndex
