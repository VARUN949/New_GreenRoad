import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SignalList from '../../Signals/SignalList';

export default function CircleDetail() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  const lastPath = pathSegments[pathSegments.length - 1];
  const [circle, setCircle] = useState({})

  useEffect(() => {

    const getCircle = async () => {
      const response = await fetch('https://greenroad-gr.onrender.com/app/p1/get-circle/byId', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "circleId": `${lastPath}` }),
      });
      const data = await response.json()
      setCircle(data.circle)

    }
    getCircle()
    // eslint - disable - next - line react - hooks / exhaustive - deps
  }, [])

  return (
    < div>
      {Object.keys(circle).length > 0 && <div className=' w-100 h-90vh mt-28 flex pl-32'>
        <div className='w-1/2 bg-slate-300 mr-32 rounded-md h-1/5'>

          <h2 className='font-bold flex justify-center'>Circle Details</h2>
          <div className='border-black  m-auto w-40 mb-5 mt-3'></div>
          <div className='flex m-4'>
            <p>Circle Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;&nbsp;</p>
            <p>{circle.circleId}</p>
          </div>
          <div className='flex m-4'>
            <p>Circle Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :-&nbsp;&nbsp;</p>
            <p>{circle.address.circleName}</p>
          </div>


          <h2 className='font-bold flex justify-center'>Circle Address</h2>
          <div className='  m-auto w-40 mb-5 mt-3'></div>

          <div className='flex m-4'>
            <p>Road  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;&nbsp;</p>
            <p>{circle.address.road}</p>
          </div>
          <div className='flex m-4'>
            <p> Area &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :-&nbsp;&nbsp;</p>
            <p>{circle.address.area}</p>
          </div>
          <div className='flex m-4'>
            <p> City &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :-&nbsp;&nbsp;</p>
            <p>{circle.address.city}</p>
          </div>
          <div className='flex m-4'>
            <p> Pincode &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :-&nbsp;&nbsp;</p>
            <p>{circle.address.pincode}</p>
          </div>
          <div className='flex m-4'>
            <p> Latitude &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :-&nbsp;&nbsp;</p>
            <p>{circle.coordinates.latitude}</p>
          </div>
          <div className='flex m-4'>
            <p> Longitude &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :-&nbsp;&nbsp;</p>
            <p>{circle.coordinates.longitude}</p>
          </div>


          <h2 className='font-bold flex justify-center'>Signal Details</h2>
          <div className='  m-auto w-40 mb-5 mt-3'></div>

          <div className='flex m-4'>
            <p>No Of Signals &nbsp;&nbsp;&nbsp;:-&nbsp;&nbsp;</p>
            <p>{circle.numberOfSignals}</p>
          </div>
          <div className='flex m-4'>
            <p>signal Ids &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :-&nbsp;&nbsp;</p>
            <p>{circle.signalIds.join(', ')}</p>
          </div>
        </div>

        <div className='w-1/2 mb-10'>
          <SignalList signalIds={circle.signalIds} />
        </div>
      </div>}

    </div>
  )
}
