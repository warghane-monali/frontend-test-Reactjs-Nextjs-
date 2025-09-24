"use client"

import React from 'react'
import MobileWrapper from '../components/MobileWrapper'
import Button from '../components/Button'
import UpcommingSessions from '../components/UpcommingSessions'
import PastSessions from '../components/PastSessions'

const page = () => {

  return (
    <MobileWrapper>
        <div  style={{background: "linear-gradient(180deg, #DFDAFB 0%, #F9CCC5 100%)"}}>
            <div className='pl-[15px] pr-[15px] pt-16 rounded-bl-[12px] rounded-br-[12px]' 
            style={{background: "linear-gradient(90deg, rgba(176, 164, 245, 1) 0%, rgba(237, 161, 151, 1) 100%",}}>
                <div className='flex justify-between items-center'>
                    <div>
                        <p className='font-quicksand font-medium text-xs text-[#FFFFFF]' 
                        >Good morning,</p>
                        <p className='font-quicksand font-semibold text-[19px] text-[#FFFFFF]' >Manjunath Naik</p>
                    </div>
                    <div>
                        <img src="/assets/User1.svg" alt="User" />
                    </div>   
                </div>

                <div className='flex justify-between items-center gap-[10px] pt-2 pb-2'>
                    <div className="relative flex-1">
                        <input placeholder='Search Psychologists...' 
                        className='w-full text-[#9B9B9B] bg-[#FFFFFF] rounded-[10px] py-[8px] pr-[40px] pl-[16px] font-quicksand font-medium text-sm'/>
                        <img src='/assets/Search.svg' 
                        className='absolute right-3 top-1/2 -translate-y-1/2 '/>
                    </div>
                    
                    <div className='bg-[#FFFFFF] rounded-[10px] pt-[11px] 
                                    pb-[11px] pr-[16px] pl-[16px]'>
                        <img src='/assets/filter_alt.svg'/>
                    </div>
                </div>
            </div>

            <div className="pl-[15px] pr-[15px]">
                <p className='font-quicksand text-sm font-semibold pt-2'>Upcoming Session</p>
                <UpcommingSessions/>

                <p className='font-quicksand text-sm font-semibold pt-2'>Past Sessions</p>
                <PastSessions/>
                
                <div className='mt-40 pb-5'>
                    <Button title="Schedule Now"
                        width='100%'
                        height="45px"
                        titleClassName="text-[#FFFFFF] font-semibold text-lg font-quicksand"/>
                </div>
                
            </div>
        </div>
        
    </MobileWrapper>
  )
}

export default page