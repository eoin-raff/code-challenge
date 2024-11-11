import React from 'react'
import { SetData } from '../../types'

interface SingleSetOverviewProps {
    set: SetData
}

const SingleSetOverview = ({ set }: SingleSetOverviewProps) => {
    return (
        <div>
            SingleSetOverview

            <h2>
                name: {set.name}
                pieces: {set.totalPieces}
            </h2>
        </div>
    )
}

export default SingleSetOverview

