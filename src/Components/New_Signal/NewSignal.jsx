import React, { useState } from 'react'

export default function NewSignal() {

    const [formSignalData, setFormSignalData] = useState({

        signalId: "",
        circleId: "",
        signalStatus: "working",
        junctionType: "crossroads with traffic light",

        aspects: {
            currentColor: "red",
            durationInSeconds: 120,
            red: 20,
            yellow: 5,
            green: 5
        },
        address: {
            circleName: "",
            road: "",
            area: "",
            city: "",
            pincode: "",
        },

        location: {
            latitude: 23.105555,
            longitude: 72.597444,
            angle: 90,
        },
    });

    const handleChange = (e) => {


        if (e.target.name === "circleId") {
            setFormSignalData({
                ...formSignalData,
                circleId: e.target.value,
            })
        }

        if (e.target.name === "signalId") {
            setFormSignalData({
                ...formSignalData,
                signalId: e.target.value,
            })
        }
        if (e.target.name === "latitude" || e.target.name === "longitude") {
            setFormSignalData({
                ...formSignalData,
                location: {
                    ...formSignalData.location,
                    [e.target.name]: parseFloat(e.target.value),
                },
            });
        }
        if (e.target.name === "red" || e.target.name === "yellow" || e.target.name === "green") {
            setFormSignalData({
                ...formSignalData,
                aspects: {
                    ...formSignalData.aspects,
                    [e.target.name]: parseInt(e.target.value)
                },

            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('https://greenroad-gr.onrender.com/app/p1/get-circle/byId', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ circleId: formSignalData.circleId }),
        });

        if (response.ok) {
            const data = await response.json()
            console.log(data.circle.address)
            setFormSignalData({
                ...formSignalData,
                address: data.circle.address
            })
            const response2 = await fetch('https://greenroad-gr.onrender.com/app/p1/add-signal-light', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formSignalData),
            });
            if (response2.ok) {
                alert('Form data submitted successfully!');
            }
            else {
                alert('Error submitting form data');
            }
            console.log(formSignalData)
        }

    }



    return (
        <div>
            <div className='h-[100vh] W-100 mb-8'>
                <div className='w-1/3 m-auto mt-40'>
                    <form onSubmit={handleSubmit} className="flex w-auto text-white border rounded-3xl p-5 bg-slate-600 flex-col">
                        <label className="mb-5 text-1xl">
                            Circle ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-
                            <input type="text" className="text-black ml-8 rounded-md" name="circleId" value={formSignalData.circleId} onChange={handleChange} />
                        </label>
                        <label className="mb-5 text-1xl">
                            Signal ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-
                            <input type="text" className="text-black ml-8 rounded-md" name="signalId" value={formSignalData.signalID} onChange={handleChange} />
                        </label>

                        <label className="mb-5 text-1xl">
                            latitude&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-
                            <input type="number" className="text-black ml-8 rounded-md" name="latitude" value={formSignalData.location.latitude} onChange={handleChange} />
                        </label>

                        <label className="mb-5 text-1xl">
                            longitude&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-
                            <input type="number" className="text-black ml-8 rounded-md" name="longitude" value={formSignalData.location.longitude} onChange={handleChange} />
                        </label>

                        <label className="mb-5 text-1xl">
                            Red&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-
                            <input type="number" className="text-black ml-8 rounded-md" name="red" value={formSignalData.aspects.red} onChange={handleChange} />
                        </label>

                        <label className="mb-5 text-1xl">
                            Yellow&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-
                            <input type="number" className="text-black ml-8 rounded-md" name="yellow" value={formSignalData.aspects.yellow} onChange={handleChange} />
                        </label>

                        <label className="mb-5 text-1xl">
                            Green&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-
                            <input type="number" className="text-black ml-8 rounded-md" name="green" value={formSignalData.aspects.green} onChange={handleChange} />
                        </label>

                        <div className='flex justify-center'>
                            <button className='rounded text-white border w-1/6' type="submit">submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
