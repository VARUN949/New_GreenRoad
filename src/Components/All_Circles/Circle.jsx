import React from 'react'
import CircleDetail from './DetailCircle/CircleDetail'

export default function Circle({ circle }) {

    const handleClick = () => {
        return (<CircleDetail />)
    }

    return (
        <a href={`/AllCircles/${circle.circleId}`}>
            <div className=" border h-auto w-100 mb-20 bg-slate-300 rounded">

                <button onClick={handleClick}>
                    <div className='flex m-4'>
                        <p>Circle Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;&nbsp;</p>
                        <p>{circle.circleId}</p>
                    </div>
                    <div className='flex m-4'>
                        <p>Circle Name &nbsp;&nbsp;&nbsp; :-&nbsp;&nbsp;</p>
                        <p>{circle.address.circleName}</p>
                    </div>
                    <div className='flex m-4'>
                        <p>No Of Signals &nbsp;:-&nbsp;&nbsp;</p>
                        <p>{circle.numberOfSignals}</p>
                    </div>
                </button>

            </div>
        </a>
    )
}