import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { AppSidebarNav } from './AppSidebarNav'

import logo from '../assets/brand/ARR_logo.png'
import { sygnet } from 'src/assets/brand/sygnet'
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebar.sidebarShow)

  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) =>
        dispatch({ type: 'set', sidebarShow: visible })
      }
      // ✅ This makes it responsive and overlays on mobile
      breakpoint="lg"
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand to="/">
          <div className="d-flex justify-content-center align-items-center p-2">
            <img src={logo} alt="Logo" height={90} className="sidebar-brand-full" />
          </div>
          <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
        </CSidebarBrand>
        {/* ✅ Close button shows only on mobile */}
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: 'set', sidebarShow: false })}
        />
      </CSidebarHeader>

      <AppSidebarNav items={navigation} />

      {/* ✅ Footer toggle only visible on large screens */}
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
