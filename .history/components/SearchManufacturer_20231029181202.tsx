"use client";
import { useState, Fragment } from 'react';
import Image from 'next/image';
import { Combobox, Transition } from '@headlessui/react'
import { SearchManufacturerProps } from '@/types'
import React from 'react'
import { manufacturers } from '@/constants';
import { relative } from 'path';

const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufacturerProps) => {
    const [query, Setquery] = useState('');
    const filteredManufacturers =
    query === ""
    ?manufacturers
    :manufacturers.filter((item) => (
        item.toLowerCase().replace(/\s+/g, "")
        .includes(query.toLowerCase().replace(/\s+/g,""))
    ))

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
             as={Fragment}
             leave = "transition ease-in durtion-100"
             leaveFrom='opacity-100'
             leaveTo='opacity-0'
             afterLeave={()=> Setquery('')}
             >
                <Combobox.Options>
                    {filteredManufacturers.length === 0 && query !== "" ?(
                        <Combobox.Option
                        value={query}
                        className="search-manufacturer__option">
                            Create "{query}"
                        </Combobox.Option>
                    ):(
                        filteredManufacturers.map((item)=>(
                            <Combobox.Option
                            key = {item}
                            className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
                            value={item}
                            >  
                            {({ selected, active})=>(
                                <>
                                <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                          </span>
                        ) : null}
                                </>
                        )}
                            </Combobox.Option>
                        ))
                    )}
                </Combobox.Options>
             </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer