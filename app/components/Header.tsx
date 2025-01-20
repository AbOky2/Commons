"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import logo from "../logo.png"
import anats3 from "../anats2.png"
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@heroui/react";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';


function Header() {
    const [chevrone, setChevrone] = useState(true);

    const handleClick =() =>{
        setChevrone(!chevrone);
    }


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

        <div className='text-gray-700  border-t-1 border-gray-200  flex gap-12 px-20 justify-start shadow-md'>
            <div className='p-6 hover:bg-zinc-200 cursor-pointer'>
                <Link href="/">
                Acceuil
                </Link>
            </div>
            <div className='hover:bg-zinc-200 cursor-pointer p-6 flex  gap-3'>
                <div className='w-full'>
                    <Dropdown  className='bg-gray-100 mx-16 mt-4 border-1 border-gray-100 rounded-sm text-gray-700'>
                    <DropdownTrigger onClick={handleClick} className='' >
                        <p>Vos démarches</p>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions" onClose={handleClick} >
                            <DropdownItem key="new" className='border-b-1 rounded-none'>
                                <Link href="passeport">
                                    Passeport
                                </Link>
                            </DropdownItem>
                        <DropdownItem key="copy" className='border-b-1 rounded-none'>
                            <Link href="cni">CNI
                            </Link>
                        </DropdownItem>
                        <DropdownItem key="edit">
                            <Link href="permis">Permis
                            </Link>
                        </DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                </div>
                <div className=' w-6 items-center flex'>
                    {chevrone ? (<ChevronDownIcon  />):(<ChevronUpIcon/>)}
                </div>
            
            
            </div>
            <div className='p-6'>
                <p>L&apos;Agence</p>
            </div>
            <div className='p-6'>
                <p>Aide & Contact</p>
            </div>
            <div className='p-6'>
                <p>Actualités</p>
            </div>
        </div>

      
    </div>
  )
}

export default Header
