import React, { useEffect, useState } from 'react'
import Circle from './Circle'

export default function CirclesList() {

    const [circleList, setCircleList] = useState({ circle: {} });

    const activeCircles = () => {
        document.getElementById("circlelist").style.height = "auto"
    }

    useEffect(() => {

        const AllCircle = async () => {
            const response = await fetch('https://greenroad-gr.onrender.com/app/p1/get-circle', {
                method: 'GET',
            });
            const data = await response.json()
            setCircleList(data)
            // console.log(circleList)

        }
        AllCircle()
        // eslint - disable - next - line react - hooks / exhaustive - deps
    }, [])

    return (
        <div className="bg-slate-700 h-[94vh] flex justify-center" id="circlelist">
            <div className='w-1/3 h-58  h-auto flex-col mt-28'>


                {Object.keys(circleList.circle).length > 0 &&
                    circleList.circle.map((circle, index) => {
                        return (
                            <Circle circle={circle} key={index} />
                        )
                    })
                }
                {
                    Object.keys(circleList.circle).length > 3 && activeCircles()
                }
            </div>
        </div>
    )
}
