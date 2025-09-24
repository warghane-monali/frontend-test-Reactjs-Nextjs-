"use client"

import React from 'react'

const PastSessions = () => {
        const pastSessions = [
            {   id:1,
                time:"12:00AM",
                drName : "Dr.Ramesh Naik", 
                prevSession:"Tuesday, March 25, 2023"
            },
            {   id:2,
                time:"10:30AM",
                drName : "Dr.Suresh Sawant", 
                prevSession:"Tuesday, March 15, 2023"
            },
            {   id:3,
                time:"9:30AM",
                drName : "Dr.Neeta Singh", 
                prevSession:"Tuesday, Feb 25, 2023"
            }
        ]
  return (
    <div>  {
            pastSessions.length && pastSessions.map((item, index)=>{
                return ( 
                
                    <div key={item.id} className='bg-[#FFFFFF80] mt-2 rounded-2xl p-2.5 flex items-center gap-[10px]'>     
                        <p className='font-quicksand text-[13px] font-semibold text-[#000000]'>{item.time}</p>
                        <img src='/assets/Line.svg'/>
                        <div>
                            <p className='font-quicksand text-[13px] font-semibold text-[#000000]'>{item.drName}</p>
                            <p className='font-quicksand text-xs font-medium text-[#6D6A5D]'>Previous Session :</p>
                            <p className='font-quicksand text-xs font-medium text-[#6D6A5D]'>
                            {item.prevSession}</p>
                        </div>   
                    </div>
                )
            })
        }
    </div>
  
  )
}

export default PastSessions