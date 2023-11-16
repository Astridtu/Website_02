"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Combobox, Transition } from '@headlessui/react'
import { SearchManufacturerProps } from '@/types'
import React from 'react'

const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufacturerProps) => {
    const [query, Setquery] = useState('')

  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className='relative w-full'>
             <Combobox.Button className="absolute top-[14px]">
                <Image 
                src="car-logo.svg"
                width={20}
                height={20}
                className="m1-4"
                alt= "Car Logo"
                />
             </Combobox.Button>
             <Combobox.Input
             className="search-manufacturer__input"
             placeholder='Volkswagen'
             displayValue={(manufacturer:string)=>manufacturer}
             onChange={(e) => Setquery(e.target.value)}
             />
             <Transition
             as = {Fragment}
             Leave = "tranistion ease-in duration-100"
             LeaveForm = "opacity-100"
             LeaveTo= "opacity-0"
             afterLeave={()=> setQuery('')}
             >
             </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer