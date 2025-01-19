import React from 'react'
import Image from 'next/image'
import logo from "../logo.png"
import anats3 from "../anats2.png"


function Header() {


  return (
    <div className='bg-white  flex flex-col'>
        <div className='flex p-4 mx-12 my-1  justify-between '>
            <div>
                <Image
            src={logo}
            width={60}
            height={60}
            alt='logo'
            />
            </div>
            <div className=' px-1 -my-3'>
                <Image
                src={anats3}
                width={60}
                height={60}
                alt='logo'
                />
            </div>
            
        </div>

        <div className='text-gray-700  border-t-1 border-gray-200 p-6 flex gap-12 px-20 justify-start shadow-md'>
            <div>
                <p>Acceuil</p>
            </div>
            <div>
                <p>Vos Demarches</p>
            </div>
            <div>
                <p>L&apos;Agence</p>
            </div>
            <div>
                <p>Aide & Contact</p>
            </div>
            <div>
                <p>Actualités</p>
            </div>
        </div>

      
    </div>
  )
}

export default Header
