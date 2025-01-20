import React from 'react'
import localFont from 'next/font/local'


const myFont = localFont({ src: '../fonts/Marianne-Bold.woff2' })

function CNI() {
  return (
    <div className='bg-blue-100 p-20 w-full'>
    <div className=' mb-8'>
        <p className={`${myFont.className} text-4xl leading-28 text-black`}>
        Démarches Passeport
        </p>
    </div>   
</div>
  )
}

export default CNI