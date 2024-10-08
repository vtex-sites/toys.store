import {
  Icon as UIIcon,
  List as UIList,
  PaymentMethods as UIPaymentMethods,
} from '@faststore/ui'
import React from 'react'
import IncentivesFooter from 'src/components/sections/Incentives/IncentivesFooter'
import Icon from 'src/components/ui/Icon'
import Link from 'src/components/ui/Link'
import SROnly from 'src/components/ui/SROnly'
import { mark } from 'src/sdk/tests/mark'

import FooterLinks from './FooterLinks'

function Footer() {
  return (
    <footer className="footer / grid-content-full">
      <IncentivesFooter />

      <div className="footer__section / grid-content">
        <FooterLinks />

        <section className="footer__social">
          <p className="title-sub-subsection">Siga-nos</p>
          <UIList variant="unordered">
            <li>
              <Link
                as="a"
                href="https://www.facebook.com/"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UIIcon
                  component={
                    <Icon width="24px" height="24px" name="Facebook" />
                  }
                />
              </Link>
            </li>
            <li>
              <Link
                as="a"
                href="https://www.instagram.com/"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UIIcon
                  component={
                    <Icon width="24px" height="24px" name="Instagram" />
                  }
                />
              </Link>
            </li>
            <li>
              <Link
                as="a"
                href="https://www.pinterest.com/"
                title="Pinterest"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UIIcon
                  component={
                    <Icon width="24px" height="24px" name="Pinterest" />
                  }
                />
              </Link>
            </li>
            <li>
              <Link
                as="a"
                href="https://twitter.com/"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UIIcon
                  component={<Icon width="24px" height="24px" name="Twitter" />}
                />
              </Link>
            </li>
          </UIList>
        </section>
      </div>

      <div className="footer__note / grid-content">
        <UIIcon
          component={
            <img
              // className="footer__logo"
              src="/logo.png"
              alt="VTEX logo"
              width="150"
              // margin="-31px 0 0px -42px;"
              height="124.7"
              loading="lazy"
            />
          }
        />
        {/* <Icon width="34px" height="24px" name="logoToyStore" /> */}

        <UIPaymentMethods>
          <p className="title-sub-subsection">Bandeiras</p>
          <UIList>
            <li>
              <Icon width="34px" height="24px" name="Visa" />
              <SROnly text="Visa" />
            </li>
            <li>
              <Icon width="34px" height="24px" name="Diners" />
              <SROnly text="Diners Club" />
            </li>
            <li>
              <Icon width="34px" height="24px" name="Mastercard" />
              <SROnly text="Mastercard" />
            </li>
            <li>
              <Icon width="34px" height="24px" name="EloCard" />
              <SROnly text="Elo Card" />
            </li>
            <li>
              <Icon width="34px" height="24px" name="PayPal" />
              <SROnly text="PayPal" />
            </li>
            <li>
              <Icon width="34px" height="24px" name="Stripe" />
              <SROnly text="Stripe" />
            </li>
            <li>
              <Icon width="34px" height="24px" name="GooglePay" />
              <SROnly text="Google Pay" />
            </li>
            <li>
              <Icon width="34px" height="24px" name="ApplePay" />
              <SROnly text="Apple Pay" />
            </li>
          </UIList>
        </UIPaymentMethods>

        <div className="footer__copyright / text-body-small">
          <p>
            Powered by
            <UIIcon
              component={
                <img
                  src="/vtexLogo.svg"
                  alt="VTEX logo"
                  width="41px;"
                  // margin="0px 4px -4px;"
                  height="14.91px;"
                  loading="lazy"
                />
              }
            />
          </p>
          <p>
            2021 FRN³ - Todos os direitos reservados :D <br />
            CNPJ 123456789789456123 - Telefone: 123456789789456132
          </p>
          <address>Rua dos Nerds 404</address>
        </div>
      </div>
    </footer>
  )
}

Footer.displayName = 'Footer'

export default mark(Footer)
