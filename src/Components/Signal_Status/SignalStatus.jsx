import React, { useState } from 'react'

export default function SignalStatus({ signal }) {

    const [status, setStatus] = useState(signal.signalStatus)
    const startSignal = async () => {
        try {
            const response = await fetch(`https://greenroad-gr.onrender.com/app/p1/on-signal/${signal.signalId}`, {
                method: 'GET',
            });

            if (response.ok) {
                alert('Signal started');
                setStatus("working")
            }
            else {
                alert('Error submitting form data');
            }
        }

        catch (error) {
            alert('Error submitting form data');
        }
    }

    const stopSignal = async (SignalID) => {
        try {
            const response = await fetch(`https://greenroad-gr.onrender.com/app/p1/off-signal/${signal.signalId}`, {
                method: 'GET',
            });

            if (response.ok) {
                alert('Signal stopped');
                setStatus("not working")
            }
            else {
                alert('Error submitting form data');
            }
        }

        catch (error) {
            alert('Error submitting form data');
        }
    }



    return (
        <>

            <div className='bg-slate-300 rounded-md mr-32 mb-10'>
                <h2 className='font-bold flex justify-center'>{`Signal-${signal.signalId} Details`}</h2>
                <div className='border-black border  m-auto w-40 mb-5'></div>
                <div className='flex m-1'>
                    <p>Signal Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;&nbsp;</p>
                    <p>{signal.signalId}</p>
                </div>
                <div className='flex m-1'>
                    <p>Circle Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;&nbsp;</p>
                    <p>{signal.circleId}</p>
                </div>
                <div className='flex m-1'>
                    <p>Signal Status &nbsp;&nbsp;&nbsp;&nbsp; :-&nbsp;&nbsp;</p>
                    <p>{status}</p>
                </div>
                <div>
                    <button onClick={startSignal} className='rounded border bg-slate-500 w-20 m-3 text-white'>Start</button>
                    <button onClick={stopSignal} className='rounded border bg-slate-500 w-20 m-3 text-white'>Stop</button>
                </div>

            </div>

        </>
    )
}
