import React from 'react'
import Layout from 'components/Layout'
import { Input, InputType } from 'components/Input/index'
import { LandingSection } from 'components/LandingImage/index'
import { EmailSignup } from 'components/EmailSignupForm/index'
import { LocationDetailProvider } from '../lib/providers/details/detail-provider'
import { LocationDetailsList } from 'components/Details/LocationDetailsList/index'

const Details = ({ location }) => {
  const provider = new LocationDetailProvider()

  return (
    <Layout location={location}>
      <LandingSection>
        <LocationDetailsList details={provider.index()} />
      </LandingSection>
    </Layout>
  )
}

export default Details
