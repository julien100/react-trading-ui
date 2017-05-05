import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import colors from '../defaults/colors'

const FullWidthTable = glamorous.table({
  width: '100%',
  zIndex: 1,
  background: colors.parentBackground,
  borderBottom: `.5px solid ${colors.textMedContrast}`
})

const FintechUITableHead = ({children, ...props}) => (
  <FullWidthTable {...props}>
    <thead>
      <tr >
        {children}
      </tr>
    </thead>
  </FullWidthTable>
)

FintechUITableHead.propTypes = {
  children: PropTypes.node.isRequired
}

export default FintechUITableHead