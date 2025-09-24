"use client"

import React, { useState } from 'react'
import MobileWrapper from '../components/MobileWrapper'
import Button from '../components/Button'
import SessionTimeModal from '../components/SessionTimeModal'

const page = () => {
  const [sessionType, setSessionType] = useState("inPerson");
  const [onlineDetails, setOnlineDetails] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const [sessionMode, setSessionMode] = useState("");
  const [sessionDate, setSessionDate] = useState("");
  const [sessionTime, setSessionTime] = useState("");
  const [sessionDetails, setSessionDetails] = useState("");
  const [selectedSession, setSelectedSession] = useState([]);
   
  const [sessionDropdown, setSessionDropdown] = useState("Counselling");

     
   const handleConfirm = () => {
    const newSession = {
      sessionDropdown,
      sessionMode,
      sessionDate,
      sessionTime,
      onlineDetails,
      sessionDetails
    };

    setSelectedSession([...selectedSession, newSession]);
    if(selectedSession.length > 0){
      alert("Session Booked ✅");
    }else{
      alert("Please fill the form")
    }
  
    setSessionType("inPerson");
    setSessionMode("");
    setSessionDate("");
    setSessionTime("");
    setOnlineDetails("");
    setSessionDetails("");
    setSessionDropdown("");
  }

    const handleCancel = () => {
    setSessionType("");
    setSessionMode("");
    setSessionDate("");
    setSessionTime("");
    setOnlineDetails("");
    setSessionDetails("");
    setSessionDropdown("Counselling");
  };

  return (
    <MobileWrapper>
    <div style={{background: "linear-gradient(180deg, #DFDAFB 0%, #F9CCC5 100%)"}} className='pl-[15px] pr-[15px]'>

    {/* Header */}
      <div className='pt-5 pb-5'>
        <div className='flex items-center gap-2'>
          <img src='/assets/arrow_back_ios_white_24dp 1.svg' className='w-[24px] h-[24px]'/>
          <p className='font-quicksand font-semibold text-sm text-[#000000]'>Schedule Session</p>
        </div>
      </div>

    {/* patient */}
    <div>
      <div className='mb-2'>
        <p className='font-quicksand font-medium text-sm text-[#000000]'>Patient</p>
      </div>
      <div className='flex items-center gap-[12px] bg-[#FFFFFF80] rounded-[10px] pt-[8px] pr-[12px] pb-[8px] pl-[12px]'>
        <div>
          <img src='/assets/User1.svg' className='w-[42px] h-[42px]'/>
        </div>
        <div>
          <p className='font-quicksand font-semibold text-sm text-[#000000]'>Shubham Naik</p>
          <p className='font-quicksand font-medium text-[11px] text-[#6D6A5D]'>+91 9876543210</p>
        </div>
      </div>
    </div>

    {/* practitioner */}
    <div className='pt-5'>
      <div className='mb-2'>
        <p className='font-quicksand font-medium text-sm text-[#000000]'>Assign Practitioner</p>
      </div>
      <div className='flex  items-center gap-[12px] bg-[#FFFFFF80] rounded-[10px] pt-[8px] pr-[12px] pb-[8px] pl-[12px]'>
        <div>
          <img src='/assets/User1.svg' className='w-[42px] h-[42px]'/>
        </div>
        <div>
          <p className='font-quicksand font-semibold text-sm text-[#000000]'>Shubham Naik</p>
          <p className='font-quicksand font-medium text-[11px] text-[#6D6A5D]'>+91 9876543210</p>
        </div>
      </div>
    </div>

    {/* session type */}
    <div className=' pt-5'>
      <div className='mb-2'>
        <p className='font-quicksand font-medium text-sm text-[#000000]'>Session Type</p>
      </div>
      <div className='bg-[#FFFFFF80] rounded-[10px] pt-[8px] pr-[12px] pb-[8px] pl-[12px]'>
        <select className='w-full outline-none bg-transparent' 
            value={sessionDropdown}
            onChange={(e) => setSessionDropdown(e.target.value)}>
          <option value="Counselling">Counselling</option>
          <option value="Counselling(1 hour)">Counselling(1 hour)</option>
        </select>
      </div>

    </div>

    {/* session details */}
    <div className=' pt-5'>
      <div className='mb-2'>
        <p className='font-quicksand font-medium text-sm text-[#000000]'>Session Mode</p>
      </div>

      <div className="flex items-center gap-4">
        {/* Option 1 */}
         <div className="flex items-center gap-2">
        <input
          id="inPerson"
          type="radio"
          name="sessionType"
          value="inPerson"
          checked={sessionType === "inPerson"}
          onChange={(e) => setSessionType(e.target.value)}
          className="peer w-[20px] h-[20px] accent-black bg-transparent border border-black"
        />
        <label
          htmlFor="inPerson"
          className="font-quicksand text-base text-[#000000] cursor-pointer peer-checked:font-medium"
        >
          In-Person
        </label>
      </div>

        {/* Option 2 */}
        <div className="flex items-center gap-2">
        <input
          id="online"
          type="radio"
          name="sessionType"
          value="online"
          checked={sessionType === "online"}
          onChange={(e) => setSessionType(e.target.value)}
          className="peer w-[20px] h-[20px] accent-black border border-black bg-transparent"
        />
        <label
          htmlFor="online"
          className="font-quicksand text-base text-[#000000] cursor-pointer peer-checked:font-medium"
        >
          Online
        </label>
        </div>

      </div>

      {/* date and time */}
      <div className='flex items-center gap-2 mt-5'>
        <div>
          <p className='font-quicksand font-medium text-sm text-[#000000] mb-2'>Session Date</p>
          <div className='w-[166.15px] bg-[#FFFFFF] rounded-[7.26px] relative'>
            <input 
              placeholder='11/12/2024'
              value={sessionDate}
              onChange={(e) => setSessionDate(e.target.value)} 
              className='w-full pr-8 pl-4 py-3 rounded-[7.26px] focus:outline-none'
            />
            <img 
              src='/assets/calender.svg' 
              className='absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer' 
            />
          </div>
        </div>

        <div>
          <p className='font-quicksand font-medium text-sm text-[#000000] mb-2'>Session Time Slot</p>
          <div className='w-[166.15px] bg-[#FFFFFF] rounded-[7.26px] relative'>
            <input 
              placeholder='HH : MM'
              value={sessionTime}
              className='w-full pr-8 pl-4 py-3 rounded-[7.26px] focus:outline-none' 
              onClick={() => setIsModalOpen(true)}/>
            <img src='/assets/Time.svg'
              className='absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer'
               onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>

        {/* time Modal */}
      </div>
        <SessionTimeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={(time) => {
            setSessionTime(time);   
            setIsModalOpen(false);    
          }}
        />

      {sessionType === "online" && (
        <div className='mt-5'>
          <p className='font-quicksand font-medium text-sm text-[#000000] mb-2'>Online Session Link</p>
          <input
            type="text"
            placeholder="Add Online Session Link or WhatsApp Number"
            value={onlineDetails}
            onChange={(e) => setOnlineDetails(e.target.value)}
            className="block w-full px-4 py-2 bg-[#FFFFFF] text-xs font-quicksand font-medium rounded-[7.26px] focus:outline-none"
          />
        </div>
      )}

      <div className='mt-5'>
        <p className='font-quicksand font-medium text-sm text-[#000000] mb-2'>Session Details (Optional)</p>
        <textarea  
          rows={5} 
          value={sessionDetails}
          onChange={(e) => setSessionDetails(e.target.value)}
          placeholder='Enter session details here'
          className="block w-full px-4 py-3 bg-[#FFFFFF] text-xs font-quicksand font-medium rounded-[7.26px] focus:outline-none" />
      </div>
    </div>

    <div className='w-[100%] flex justify-between items-center mt-15 pb-10 gap-4'>
        <button
          onClick={handleCancel}
          className="w-[50%] h-[45px] rounded-lg border border-[#CC627B] bg-transparent hover:opacity-90 transition"
          >
        <span 
          className='text-[#CC627B] font-semibold text-sm font-quicksand'>Cancel</span>
        </button>
        
        <Button 
          title="Confirm"
          onClick={handleConfirm}
          width='50%'
          height="45px"
          titleClassName="text-[#FFFFFF] font-semibold text-sm font-quicksand"/>
       
    </div>

    </div>
    </MobileWrapper>
  )
}

export default page