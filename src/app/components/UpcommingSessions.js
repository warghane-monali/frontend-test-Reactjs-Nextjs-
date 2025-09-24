"use client"

import React from 'react'
import Button from './Button'

const UpcommingSessions = () => {
  return (
    <div className='bg-[#FFFFFF80] mt-2 rounded-2xl p-2.5'>
        <div className='flex justify-between'>
            <div>
                <p className='font-quicksand text-base font-semibold text-[#000000]'>11:00 AM</p>
                <p className='font-quicksand text-xs font-medium text-[#6D6A5D]'>Bandra</p>
            </div>
            
            <img src='/assets/Line.svg'/> 
            <img src='/assets/User1.svg'/>

            <div>
                <p className='font-quicksand text-base font-semibold text-[#000000]'>Dr.Kiran Rathi</p>
                <img src='/assets/call.svg'/>
            </div>

            <div className='align-top'>
                <img src='/assets/Arrow.svg'/>
            </div>
        </div>

        <div>
            <p className='font-quicksand text-xs font-medium text-[#6D6A5D]'>
                Session Duration: 01:00 HR
            </p>
            <div className='flex align-center gap-1'>
                <p className='font-quicksand text-xs font-medium text-[#6D6A5D]'>Session Mode: Online </p>
                <img src='/assets/Location.svg'/>
            </div>
        </div> 

        <div className='flex gap-[14px] pt-2'>
            <Button title="Mark as Completed"
                width='70%'
                titleClassName="text-[#FFFFFF] font-semibold text-xs font-quicksand"/>
            <div>
                <p className='font-quicksand text-xs font-medium text-[#6D6A5D]'>Previous Session: Tuesday, March 5, 2023</p>
            </div>
        </div>
    </div>
  )
}

export default UpcommingSessions