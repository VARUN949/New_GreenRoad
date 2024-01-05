import React from 'react'
import CircleDetail from './DetailCircle/CircleDetail'

export default function Circle({ circle }) {

    const handleClick = () => {
        return (<CircleDetail />)
    }

    const deleteCircle = async () => {
        const response = await fetch('https://greenroad-gr.onrender.com/app/p1/delete-circle', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "circleId": `${circle.circleId}` }),
        });
        if (response.ok) {
            alert("circle succesully deleted")
        }
        else {
            alert("some error accur")
        }
    }



    return (
        <>

            <div className=" border h-auto w-100 mb-20 bg-slate-300 rounded">
                <div>
                    <a href={`/AllCircles/${circle.circleId}`}>
                        <button onClick={handleClick}>
                            <div className='flex m-4 mb-7'>
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
                    </a>
                </div>
                <div className='flex m-4'>
                    <button onClick={deleteCircle} className='rounded border  bg-slate-700 w-20 relative left-0 text-white'>
                        Delete
                    </button>
                </div>
            </div>

        </>
    )
}