import React, { useState } from 'react'
import NewSignal from './NewSignal';

export default function NewCircle() {

    const [newCircleData, setNewCircleData] = useState({
        circleId: '',
        coordinates: {
            latitude: parseFloat(23.105555),
            longitude: parseFloat(72.597444),
        },
        address: {
            circleName: " ",
            road: " ",
            area: " ",
            city: " ",
            pincode: 123456,
        }
    });
    const [numberOfSignals, setNumberOfSignals] = useState({
        number: 0,
        list: [],
        condition: []
    });

    const handleChange = (e) => {
        if (e.target.name === "circleName" || e.target.name === "road" || e.target.name === "area" || e.target.name === "city" || e.target.name === "pincode") {
            setNewCircleData({
                ...newCircleData,
                address: {
                    ...newCircleData.address,
                    [e.target.name]: e.target.value,
                }
            });
        }
        if (e.target.name === "circleId") {
            setNewCircleData({
                ...newCircleData,
                [e.target.name]: e.target.value.toString(),
            });

        }

        if (e.target.name === "latitude" || e.target.name === "longitude") {
            setNewCircleData({
                ...newCircleData,
                coordinates: {
                    ...newCircleData.coordinates,
                    [e.target.name]: parseFloat(e.target.value),
                }
            });
        }
        if (e.target.name === "numberOfSignals") {
            setNumberOfSignals({
                ...numberOfSignals,
                number: Number(e.target.value)
            })
        }
    };
    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            const response = await fetch('https://greenroad-gr.onrender.com/app/p1/add-circle', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCircleData),
            });


            if (response.ok) {
                alert('Form data submitted successfully!');
            }


        } catch (error) {
            alert('Error submitting form data');
        }
        setNumberOfSignals({
            ...numberOfSignals,
            list: Array.from({ length: numberOfSignals.number - 1 + 1 }, (_, index) => 1 + index),
            condition: Array.from({ length: numberOfSignals.number }, () => false)
        })
    };

    const moreSignals = () => {
        document.getElementById("newCircle").style.height = "auto"
    }
    const lessSignals = () => {
        console.log("Actived")
        document.getElementById("newCircle").style.height = "100vh"
    }

    return (
        < div className='h-[100vh] w-100 bg-slate-700 p-20' id='newCircle'>
            <div className=' flex p-5'>
                <div className='w-1/2'>
                    <form action="" className='flex border rounded-3xl p-5 bg-slate-600 flex-col' onSubmit={handleSubmit}>
                        <label className=" text-white mb-5 text-1xl">
                            circle Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;
                            <input type="text" name='circleId' className="ml-10 rounded-md text-black" onChange={handleChange} />
                        </label>

                        <label className="text-white mb-5 text-1xl">
                            Number of Signals&nbsp;&nbsp;:-
                            <input type="number" name="numberOfSignals" value={numberOfSignals.number} className="ml-10 rounded-md text-black" onChange={handleChange} />
                        </label>

                        <label className="text-white mb-5 text-1xl">
                            Circle Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;
                            <input type="text" name="circleName" value={newCircleData.address.circleName} className="ml-10 rounded-md text-black" onChange={handleChange} />
                        </label>

                        <label className="text-white mb-5 text-1xl">
                            Road Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;
                            <input type="text" name="road" value={newCircleData.address.road} className="ml-10 rounded-md text-black" onChange={handleChange} />
                        </label>

                        <label className="text-white mb-5 text-1xl">
                            area Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;
                            <input type="text" name="area" value={newCircleData.address.area} className="ml-10 rounded-md text-black" onChange={handleChange} />
                        </label>

                        <label className="text-white mb-5 text-1xl">
                            City Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;
                            <input type="text" name="city" value={newCircleData.address.city} className="ml-10 rounded-md text-black" onChange={handleChange} />
                        </label>

                        <label className="text-white mb-5 text-1xl">
                            Pincode&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;
                            <input type="number" name="pincode" value={newCircleData.address.pincode} className="ml-10 rounded-md text-black" onChange={handleChange} />
                        </label>



                        <label className="text-white mb-5 text-1xl">
                            latitude&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;
                            <input type="text" name="latitude" className="ml-10 rounded-md text-black" value={newCircleData.coordinates.latitude} onChange={handleChange} />
                        </label>

                        <label className="text-white mb-5 text-1xl">
                            longitude&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-&nbsp;
                            <input type="text" name="longitude" className="ml-10 rounded-md text-black" value={newCircleData.coordinates.longitude} onChange={handleChange} />
                        </label>


                        <div className='flex justify-center'>
                            <button className='rounded text-white border w-1/6' type="submit">submit</button>
                        </div>

                    </form>
                </div>
                <div className='w-1/2 ml-8'>
                    {numberOfSignals.list.map((signal, index) => {
                        return (
                            <NewSignal formData={newCircleData} numberOfSignals={numberOfSignals} setNumberOfSignals={setNumberOfSignals} key={index} ID={signal} />
                        )
                    })}

                    {numberOfSignals.list.length > 2 && moreSignals()}
                    {numberOfSignals.list.length < 3 && numberOfSignals.list.length > 0 && lessSignals()}

                </div>
            </div>
        </div >
    )
}
