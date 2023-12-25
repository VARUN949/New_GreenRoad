import React from 'react'

export default function NavbarItem({ name }) {
    return (
        <div className='m-20 text-2xl font-Comic font-extrabold text-white '>
            <a href={`/${name}`}>
                {
                    name.split(/(?=[A-Z])/).length > 1 ?
                        ` ${name.split(/(?=[A-Z])/)[0]} ${name.split(/(?=[A-Z])/)[1]}` :
                        `${name.split(/(?=[A-Z])/)[0]}`
                }
            </a>

        </div>
    )
}

