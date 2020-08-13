import React from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Icon({iconName, iconColor}) {
    return (
        <div className='icon-container'>
            <FontAwesomeIcon className='icon' color={iconColor} name={iconName} />
        </div>
    )
}

Icon.propTypes = {
    iconName: PropTypes.string.isRequired,
    iconColor: PropTypes.string.isRequired
}

export default Icon

