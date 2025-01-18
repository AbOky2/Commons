import React from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
import Permis from "../permis.png";
import Passport from "../passport.png";
import Car from "../car.png";
import { ChevronRightIcon } from '@heroicons/react/24/outline';

//👇 Configure our local font object
const myFont = localFont({ src: '../fonts/Marianne-Bold.woff2' })

function Accueil() {
  return (
    <div className='p-20 bg-gray-200'>
      <div>
        <p className={`${myFont.className} text-4xl leading-28`}>
             Bienvenue sur le site <br/> officiel de l&apos;ANATS - Agence<br/> nationale des titres sécurisés
        </p>

        <p className={`${myFont.className} text-3xl font-bold leading-28 mt-16`}>
        Votre démarche concerne...
        </p>
      </div>

      {/*Elements*/}
      <div className='flex w-full justify-between gap-4 mt-16 '>
        <div className=' bg-blue-400 p-6 w-full  '>
            <div className='text-white'>
              <Image src={Passport} width={30} height={30} alt='' className=''/>
            </div>
            <div>
                <p className='text-gray-300 font-bold '>Passport</p>
            </div>
            <div className='flex  justify-end p-4 '>
                <ChevronRightIcon width={30} height={30} className=' cursor-pointer'/>
            </div>
        </div>

        <div className=' bg-blue-700 p-4 w-full '>
            <div className=''>
              <Image src={Permis} width={30} height={30} alt='' className=''/>
            </div>
            <div>
                <p>Permis</p>
            </div>
            <div className='flex  justify-end p-4 '>
                <ChevronRightIcon width={30} height={30} className=' cursor-pointer' />
            </div>
        </div>

        <div className=' bg-amber-600 p-4 w-full '>
            <div className=''>
              <Image src={Car} width={30} height={30} alt='' className=''/>
            </div>
            <div>
                <p>Immatriculation</p>
            </div>
            <div className='flex  justify-end p-4 '>
                <ChevronRightIcon width={30} height={30} className=' cursor-pointer' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Accueil
