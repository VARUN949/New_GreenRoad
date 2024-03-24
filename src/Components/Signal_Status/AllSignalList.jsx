import React, { useEffect, useState } from 'react'
import SignalStatus from './SignalStatus';

export default function AllSignalList() {

    const [signalList, setsignalList] = useState({ signals: {} });

    const moreSignals = () => {
        document.getElementById("signalStatusList").style.height = "auto"
    }

    useEffect(() => {
        const AllSignals = async () => {
            const response = await fetch('https://greenroad-gr.onrender.com/app/p1/get-signal', {
                method: 'GET',
            });
            const data = await response.json()
            setsignalList(data)
            // console.log(data)

        }
        AllSignals()
        // eslint - disable - next - line react - hooks / exhaustive - deps
    }, [])

    return (
        <div className="bg-slate-700 h-[94vh] flex justify-center" id="signalStatusList">
            <div className='w-1/3 h-58  h-auto flex-col mt-20'>
                {Object.keys(signalList.signals).length > 0 &&
                    signalList.signals.map((signal, index) => {
                        return (
                            // <Circle circle={signal} key={index} />
                            <SignalStatus signal={signal} key={index} />
                        )
                    })
                }
                {
                    Object.keys(signalList.signals).length > 3 && moreSignals()
                }
            </div>
        </div>
    )
}
