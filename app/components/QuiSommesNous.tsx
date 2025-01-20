import React from 'react'
import localFont from 'next/font/local'
import Anats1 from "../anats1.png";
import Anats3 from "../anats3.png";

import Image from 'next/image'

const myFont = localFont({ src: '../fonts/Marianne-Bold.woff2' })
const myFont2 = localFont({ src: '../fonts/Marianne-Light.woff2' })


function QuiSommesNous() {

  return (
    <>
    <div className='bg-blue-100 p-20 w-full'>
        <div className=' mb-8'>
            <p className={`${myFont.className} text-4xl leading-28 text-black`}>
            Qui Sommes-Nous
            </p>
        </div>
        <div className=' w-full flex '>
            <div className='flex w-full '>
                <Image src={Anats1} className='w-full h-96 object-fit' alt=''/>
            </div>
            <div className='flex bg-white text-center '>
                <p className={`${myFont2.className} text-md leading-28 text-black my-20 font-bold p-12`}>
                    L&apos;agence vous accompagne dans la réalisation de vos démarche liées à l&apos;immatriculation 
                au permis de conduire et aux titres d&apos;indentités.</p>
            </div>
        </div>
    </div>

    <div className='bg-white p-20 w-full'>
        <div className=' mb-8'>
            <p className={`${myFont.className} text-4xl leading-28 text-black`}>
             Nos missions
            </p>
        </div>
        <div className=' w-full flex '>
            <div className='flex w-full object-contain '>
                <Image src={Anats3} className='w-full h-96 object-fit' alt=''/>
            </div>
            <div className='flex bg-zinc-100 text-center '>
                <p className={`${myFont2.className}  text-md leading-28 text-black my-20 font-extrabold p-12`}>
                <br/>L&apos;ANATS vous accompagne au quotidien dans vos démarches et vos déplacements.<br/> 
                Elle répond à vos questions concernant vos démarches en ligne Passport, cartes et permis de conduire.


.           </p>
            </div>
        </div>
        
    </div>

    </>
  )
}

export default QuiSommesNous