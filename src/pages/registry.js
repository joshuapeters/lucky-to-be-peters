/* eslint-disable prettier/prettier */
import React from 'react'
import Layout from 'components/Layout'
import { LandingSection } from 'components/LandingImage/index'
import { EmailSignup } from 'components/EmailSignupForm/index'
import { ButtonGroup } from 'components/ButtonGroup/index'
import { Button } from 'components/Button/index'

const Registry = ({ location }) => {
  function _getRegistryButtons() {
    return [
      <Button
        text="Go To Boscovs"
        name="btn-boscovs"
        type="button"
        onClick={_onBoscovsClick}
      />,
      <Button
        text="Go To Amazon"
        name="btn-amazon"
        type="button"
        onClick={_onAmazonClick}
      />,
    ]
  }

  function _onBoscovsClick() {
    window.open(
      'https://www.myregistry.com/boscovs-registry/wedding-registry/Taylor-Luckenbill-and-Joshua-Peters-Lancaster-PA/1804884',
      '_blank'
    )
  }

  function _onAmazonClick() {
    window.open(
      'https://www.amazon.com/wedding/taylor-luckenbill-joshua-peters-lancaster-may-2019/registry/3ORCVKRXC73UA',
      '_blank'
    )
  }

  return (
    <Layout location={location}>
      <LandingSection>
        <h1>
          Thank you for considering purchasing a gift for us on our special day!
        </h1>
        <p>
          Below, you'll find links to our registries at Boscovs and Amazon.com,
          respecivity. We kindly ask you stick to the registry, as we already
          have a lot of stuff. If you do not wish to contribute to an item, we
          would also be grateful for a dollar amount of your choosing.
        </p>
        <ButtonGroup buttons={_getRegistryButtons()} />
      </LandingSection>
    </Layout>
  )
}

export default Registry
