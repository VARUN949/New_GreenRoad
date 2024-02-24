import React, { useEffect, useState } from 'react'

export default function Signal({ signalId }) {

    const [signal, setSignal] = useState({})

    const [status, setStatus] = useState()
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

    const deleteSignal = async (SignalID) => {
        try {
            const response = await fetch(`https://greenroad-gr.onrender.com/app/p1//signal/delete-signal`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "signalId": `${signal.signalId}` }),

            });

            if (response.ok) {
                alert('Signal deleted');
            }
            else {
                alert('Error submitting form data');
            }
        }

        catch (error) {
            alert('Error submitting form data');
        }
    }

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
        setStatus(signal.signalStatus)
    }, [])

    useEffect(() => {
        setStatus(signal.signalStatus)

    }, [signal])
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
                        <p>Signal Status &nbsp;&nbsp;&nbsp;&nbsp; :-&nbsp;&nbsp;</p>
                        <p>{status}</p>
                    </div>

                    <div className='flex m-1'>
                        <p>Signal Side &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :-&nbsp;&nbsp;</p>
                        <p>{signal.side}</p>
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
                    <div>
                        <button onClick={startSignal} className='rounded border bg-slate-500 w-20 m-3 text-white'>Start</button>
                        <button onClick={stopSignal} className='rounded border bg-slate-500 w-20 m-3 text-white'>Stop</button>
                        <button onClick={deleteSignal} className='rounded border bg-slate-500 w-20 m-3 text-white'>Delete</button>

                    </div>
                </div>}

        </>
    )
}
