import React from 'react'
import NavbarItem from './NavbarItem'

export default function NavbarList() {
    return (
        <div className=' h-full flex justify-center items-center '>
            <NavbarItem name="AllCircles" />
            <NavbarItem name="AddCircle" />
            <NavbarItem name="AddSignal" />
            <NavbarItem name="SignalStatus" />
            <NavbarItem name="AddTime" />
        </div>
    )
}
