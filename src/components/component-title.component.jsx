import React from 'react'

export default function ComponentTitle({title}) {
    return (
        <div className='component-title'>
            <p className='component-title__header'>
                {title}
            </p>
        </div>
    )
}
