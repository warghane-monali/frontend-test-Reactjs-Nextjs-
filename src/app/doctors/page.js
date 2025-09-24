"use client"

import React from 'react'
import MobileWrapper from '../components/MobileWrapper'
import Button from '../components/Button'

const page = () => {
  return (
    <MobileWrapper>
    <div style={{background: "linear-gradient(180deg, #DFDAFB 0%, #F9CCC5 100%)"}} className='pb-40'>
      
      {/* Header */}
      <div className='pt-5 pb-5 pl-[15px] pr-[15px] bg-[#FFFFFF]'>
        <div className='flex items-center gap-2'>
          <img src='/assets/arrow_back_ios_white_24dp 1.svg' className='w-[24px] h-[24px]'/>
          <p className='font-quicksand font-semibold text-sm text-[#000000]'>Available Doctors</p>
        </div>
      </div>

      {/* Search */}
      <div className='flex justify-between items-center gap-2 pt-[11px] pb-[11px] pl-[16px] pr-[16px]'>
        <div className="relative flex-1 w-[263px] h-[40px]">
          <input
            placeholder="Search Psychologists..."
            className="w-full h-full rounded-[10px] bg-[#FFFFFF] text-[#9B9B9B] font-quicksand font-medium text-sm pr-10 pl-3 outline-none"
          />
          <img
            src="/assets/Search.svg"
            alt="search"
            className="absolute right-3 top-1/2 -translate-y-1/2"
          />
        </div>
                    
        <div className="w-[42px] h-[42px] bg-[#FFFFFF] rounded-[10px] flex items-center justify-center">
          <img src="/assets/grid_view.svg" alt="grid" />
        </div>

        <div className="w-[42px] h-[42px] bg-[#FFFFFF] rounded-[10px] flex items-center justify-center">
          <img src='/assets/filter_alt.svg'/>
        </div>         
      </div>

      {/* Doctor */}
      <div className='pt-[11px] pb-[11px]  mr-[16px] ml-[16px] bg-[#FFFFFFCC] rounded-xl'>
        <div className='flex justify-between pl-[16px] pr-[16px]'>
          <div className='flex items-center gap-[8px]'>
            <img src='/assets/User2.svg'/>
            <div>
              <p className='font-quicksand font-semibold text-sm text-[#000000]'>Dr. Tejas Sharma</p>
              <p className='font-quicksand font-medium text-xs text-[#6D6A5D]'>+91 98765 43210</p>
            </div>
          </div>
          <div className='item-top'>
            <img src='/assets/ArrowUp.svg'/>
          </div>
        </div>

        <div className='pt-4 pb-4'>
          <img src='/assets/Line 28.svg'/>
        </div>

        <div className='flex justify-between items-center pl-[16px] pr-[16px]'>
          <div className=''>
            <p className='font-quicksand font-semibold text-sm text-[#000000]'>Expertise</p>
            <p className='font-quicksand font-medium text-xs text-[#6D6A5D]'>Gynaecology</p>
          </div>

          <div>
            <p className='font-quicksand font-semibold text-sm text-[#000000]'>Gender</p>
            <p className='font-quicksand font-medium text-xs text-[#000000]'>Male</p>
          </div>
        </div>

        <div className='flex justify-between items-center pt-4 pl-[16px] pr-[16px]'>
          <div>
            <p className='font-quicksand font-semibold text-sm text-[#000000]'>Session mode</p>
            <p className='font-quicksand font-medium text-xs text-[#6D6A5D]'>In-Person & Online</p>
          </div>

          <div>
            <p className='font-quicksand font-semibold text-sm text-[#000000]'>Session Fee</p>
            <p className='font-quicksand font-medium text-xs text-[#6D6A5D]'>₹1,500/-</p>
          </div>
        </div>

         <div className='pt-4 pb-2'>
          <img src='/assets/Line 28.svg'/>
        </div>

        <div className='pl-[16px] pr-[16px]'>
          <Button title="Book Now"
                        width='100%'
                        height="45px"
                        titleClassName="text-[#FFFFFF] font-semibold text-sm font-quicksand"/>
        </div>
      </div>

       <div className='pt-[11px] pb-[11px]  mr-[16px] ml-[16px] bg-[#FFFFFFCC] rounded-xl mt-2'>
        <div className='flex justify-between pl-[16px] pr-[16px]'>
          <div className='flex items-center gap-[8px]'>
            <img src='/assets/User2.svg'/>
            <div>
              <p className='font-quicksand font-semibold text-sm text-[#000000]'>Dr. Tejas Sharma</p>
              <p className='font-quicksand font-medium text-xs text-[#6D6A5D]'>+91 98765 43210</p>
              <p className='font-quicksand font-bold text-xs text-[#565555]'>Physiologist</p>
            </div>
          </div>
          <div className='item-top'>
            <img src='/assets/Arrow.svg'/>
          </div>
        </div>
       </div>

        <div className='pt-[11px] pb-[11px]  mr-[16px] ml-[16px] bg-[#FFFFFFCC] rounded-xl mt-2'>
        <div className='flex justify-between pl-[16px] pr-[16px]'>
          <div className='flex items-center gap-[8px]'>
            <img src='/assets/User2.svg'/>
            <div>
              <p className='font-quicksand font-semibold text-sm text-[#000000]'>Dr. Tejas Sharma</p>
              <p className='font-quicksand font-medium text-xs text-[#6D6A5D]'>+91 98765 43210</p>
              <p className='font-quicksand font-bold text-xs text-[#565555]'>Physiologist</p>
            </div>
          </div>
          <div className='item-top'>
            <img src='/assets/Arrow.svg'/>
          </div>
        </div>
       </div>

        <div className='pt-[11px] pb-[11px]  mr-[16px] ml-[16px] bg-[#FFFFFFCC] rounded-xl mt-2'>
        <div className='flex justify-between pl-[16px] pr-[16px]'>
          <div className='flex items-center gap-[8px]'>
            <img src='/assets/User2.svg'/>
            <div>
              <p className='font-quicksand font-semibold text-sm text-[#000000]'>Dr. Tejas Sharma</p>
              <p className='font-quicksand font-medium text-xs text-[#6D6A5D]'>+91 98765 43210</p>
              <p className='font-quicksand font-bold text-xs text-[#565555]'>Physiologist</p>
            </div>
          </div>
          <div className='item-top'>
            <img src='/assets/Arrow.svg'/>
          </div>
        </div>
       </div>
    </div>
      
    </MobileWrapper>
  )
}

export default page