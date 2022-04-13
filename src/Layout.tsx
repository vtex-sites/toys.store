import React, { lazy, Suspense, useEffect } from 'react'
import Alert from 'src/components/common/Alert'
import Footer from 'src/components/common/Footer'
import Navbar from 'src/components/common/Navbar'
import Toast from 'src/components/common/Toast'
import { useUI } from 'src/sdk/ui'
import type { PropsWithChildren } from 'react'
import { useLocation } from '@reach/router'

const CartSidebar = lazy(() => import('src/components/cart/CartSidebar'))

function Layout({ children }: PropsWithChildren<unknown>) {
  const { displayMinicart } = useUI()

  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/') {
      document.querySelector('body')?.classList.remove('notHome')
      document.querySelector('body')?.classList.add('home')
    } else {
      document.querySelector('body')?.classList.remove('home')
      document.querySelector('body')?.classList.add('notHome')
    }
  })

  return (
    <div id="layout">
      <Alert>
        Get 10% off today:&nbsp;<span>NEW10</span>
      </Alert>

      <Navbar />

      <main>{children}</main>

      <Footer />

      <Toast />

      {displayMinicart && (
        <Suspense fallback={null}>
          <CartSidebar />
        </Suspense>
      )}
    </div>
  )
}

export default Layout
