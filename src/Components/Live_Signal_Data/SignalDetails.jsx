import React, { useState } from 'react'

export default function SignalDetails() {

    const [updationData, setUpdationData] = useState({
        signalId: "",
        duration: 0,
        color: ""
    })

    const [maxValues, setMaxValues] = useState({
        red: 0,
        green: 0,
        yellow: 0,
        Id: ""
    })

    const handleSubmit = async () => {
        const response = await fetch('https://greenroad-gr.onrender.com/app/p1/get-signal/byId', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ signalId: updationData.signalId }),
        });

        const data = await response.json()

        if (response.ok) {
            const response2 = await fetch(`https://greenroad-gr.onrender.com/app/p1/live-update/${data.signal._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ durationInSeconds: parseInt(updationData.duration), currentColor: updationData.color }),
            });
            if (response2.ok) {
                alert("time successfully updated")
            }
            else {
                alert("Error during submitting data")
            }
        }
        else {
            alert('Error submitting form data');
        }
    }

    const handleChange = (e) => {
        if (e.target.name === "signalId") {
            setUpdationData({
                ...updationData,
                signalId: e.target.value
            })
        }
        if (e.target.name === "duration") {
            setUpdationData({
                ...updationData,
                duration: e.target.value
            })
        }
        if (e.target.name === "red" || e.target.name === "green" || e.target.name === "yellow") {
            setUpdationData({
                ...updationData,
                color: e.target.value
            })
        }
        // console.log(updationData);
    }


    const handleChange2 = (e) => {

        setMaxValues({
            ...maxValues,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit2 = async () => {
        const response = await fetch('https://greenroad-gr.onrender.com/app/p1/signal/change-color', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Id: maxValues.Id, red: maxValues.red, green: maxValues.green, yellow: maxValues.yellow }),
        });



        if (response.ok) {
            alert("time successfully updated")
        }
        else {
            alert("Error during submitting data")
        }
    }
    return (
        <>
            <div className='h-[100vh] bg-slate-700 w-100 flex justify-center pt-28'>
                <div className='bg-slate-300 h-[230px] mt-28 mr-28 rounded-md'>
                    <div className='flex m-5'>
                        <p>Signal Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <input type="text" className='rounded' name='signalId' value={updationData.signalId} onChange={handleChange} />
                    </div>

                    <div className='flex m-5'>
                        <p> Duration&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <input type="number" className="rounded" name='duration' value={updationData.duration} onChange={handleChange} />
                    </div>

                    <div className='flex m-5'>
                        <p>Signal Color &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :-&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <select onChange={handleChange} className=" relative " id="role">
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="yellow">Yellow</option>
                        </select>
                    </div>

                    <div className='flex m-5'>
                        <button onClick={handleSubmit} className='rounded border bg-slate-600 w-20  text-white'>Submit</button>
                    </div>
                </div>

                <div className='bg-slate-300 h-[230px] mt-28 rounded-md'>

                    <div className='flex m-5'>
                        <p> Signal Id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <input type="text" className="rounded" name='Id' value={maxValues.Id} onChange={handleChange2} />
                    </div>

                    <div className='flex m-5'>
                        <p>Max Red &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <input type="number" className='rounded' name='red' value={maxValues.red} onChange={handleChange2} />
                    </div>

                    <div className='flex m-5'>
                        <p> Max Green&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <input type="number" className="rounded" name='green' value={maxValues.green} onChange={handleChange2} />
                    </div>

                    <div className='flex m-5'>
                        <p> Max Yellow&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <input type="number" className="rounded" name='yellow' value={maxValues.yellow} onChange={handleChange2} />
                    </div>

                    <div className='flex m-5'>
                        <button onClick={handleSubmit2} className='rounded border bg-slate-600 w-20  text-white'>Submit</button>
                    </div>

                </div>
            </div>




        </>
    )
}
