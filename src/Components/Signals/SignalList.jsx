import React, { useEffect } from 'react'
import Signal from './Signal'

export default function SignalList({ signalIds }) {

    useEffect(() => {
        if (signalIds.length < 3) {
            const signalListElement = document.getElementById("signalList");
            if (signalListElement) {
                signalListElement.style.height = "100vh";
            }
        }
    }, [signalIds]);
    return (
        <>
            <div id='signalList' >
                {
                    signalIds.map((signalId, index) => {
                        return (<Signal signalId={signalId} key={index} />)
                    })
                }
            </div>
        </>
    )
}
