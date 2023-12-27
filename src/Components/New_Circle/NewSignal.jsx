import React, { useState } from 'react'


export default function NewSignal({ formData, ID, numberOfSignals, setNumberOfSignals }) {

    const [formSignalData, setFormSignalData] = useState({

        signalId: "",
        circleId: formData.circleId,
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
            circleName: formData.address.circleName,
            road: formData.address.road,
            area: formData.address.area,
            city: formData.address.city,
            pincode: formData.address.pincode,
        },

        location: {
            latitude: 23.105555,
            longitude: 72.597444,
            angle: 90,
        },
    });

    const handleChange = (e) => {
        if (e.target.name === "signalId") {
            setFormSignalData({
                ...formSignalData,
                signalId: e.target.value,
                circleId: formData.circleId,
            })
        }
        if (e.target.name === "latitude" || e.target.name === "longitude") {
            setFormSignalData({
                ...formSignalData,
                location: {
                    ...formSignalData.location,
                    [e.target.name]: parseFloat(e.target.value),
                },
                circleId: formData.circleId,
            });
        }
        if (e.target.name === "red" || e.target.name === "yellow" || e.target.name === "green") {
            setFormSignalData({
                ...formSignalData,
                aspects: {
                    ...formSignalData.aspects,
                    [e.target.name]: parseInt(e.target.value)
                },
                circleId: formData.circleId,

            })
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const updateCondition = [...numberOfSignals.condition]
        updateCondition[ID] = true
        setNumberOfSignals({
            ...numberOfSignals,
            condition: updateCondition
        })
        const element = document.getElementById(`signal${ID}`);
        try {
            const response = await fetch('https://greenroad-gr.onrender.com/app/p1/add-signal-light', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formSignalData),
            });
            if (response.ok) {
                alert('Form data submitted successfully!');
                element.style.display = "none"
                numberOfSignals.list.splice(ID - 1, 1);
            }
            else {
                alert('Error submitting form data');
            }

        } catch (error) {
            alert('Error submitting form data');
        }

    }
    return (
        <div id={`signal${ID}`} className=' mb-8'>
            <form onSubmit={handleSubmit} className="flex text-white border rounded-3xl p-5 bg-slate-600 flex-col">
                <h3 className="m-auto mt-3 mb-3"> signal {`${ID}`}</h3>
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
    )
}