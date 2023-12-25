import React, { useEffect, useState } from 'react'

export default function Signal({ signalId }) {

    const [signal, setSignal] = useState({})

    useEffect(() => {
        const loadSignal = async () => {
            const response = await fetch('https://greenroad-gr.onrender.com/app/p1/get-signal/byId', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "signalId": `${signalId}` }),
            });
            const data = await response.json()
            setSignal(data.signal)
        }
        loadSignal()
    }, [])
    return (
        <>
            {Object.keys(signal).length > 0 &&

                <div className='bg-slate-300 rounded-md mr-32 mb-10'>
                    <h2 className='font-bold flex justify-center'>{`Signal-${signalId} Details`}</h2>
                    <div className='border-black border  m-auto w-40 mb-5'></div>
                    <div className='flex m-1'>
                        <p>Signal Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;&nbsp;</p>
                        <p>{signal.signalId}</p>
                    </div>
                    <div className='flex m-1'>
                        <p>Signal Status &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :-&nbsp;&nbsp;</p>
                        <p>{signal.signalStatus}</p>
                    </div>

                    <h2 className='font-bold flex justify-center'>Aspects</h2>
                    <div className='flex m-1'>
                        <p>Current Color &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;&nbsp;</p>
                        <p>{signal.aspects.currentColor}</p>
                    </div>
                    <div className='flex m-1'>
                        <p>Duration &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :-&nbsp;&nbsp;</p>
                        <p>{signal.aspects.durationInSeconds}</p>
                    </div>
                    <div className='flex m-1'>
                        <p>Red &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :-&nbsp;&nbsp;</p>
                        <p>{signal.aspects.red}</p>
                        { }
                    </div>
                    <div className='flex m-1'>
                        <p>Yellow &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :-&nbsp;&nbsp;</p>
                        <p>{signal.aspects.yellow}</p>
                    </div>
                    <div className='flex m-1'>
                        <p>Green &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :-&nbsp;&nbsp;</p>
                        <p>{signal.aspects.green}</p>
                    </div>
                </div>}

        </>
    )
}
