import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilLinkAlt,
  cilCloudUpload,
  cilLowVision
} from '@coreui/icons'
import {CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Vision Pro',
    to: '/video/visionPro',
    icon: <CIcon icon={cilLowVision} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Meta Quest',
    to: '/video/quest',
    icon: <CIcon icon={cilLinkAlt} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Upload Data',
    to: '/upload/movies',
    icon: <CIcon icon={cilCloudUpload} customClassName="nav-icon" />
  }
]

export default _nav
