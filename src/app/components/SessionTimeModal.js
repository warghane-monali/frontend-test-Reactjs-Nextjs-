// SessionTimeModal.js
import React, { useState } from 'react';
import MobileWrapper from './MobileWrapper';
import Button from './Button';

const times = {
  Morning: ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM"],
  Afternoon: ["12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM"],
  Evening: ["04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"],
  Night: ["08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM"],
};

const SessionTimeModal = ({ isOpen, onClose, onConfirm }) => {
  const [selectedTime, setSelectedTime] = useState("");

  const [expandedPeriods, setExpandedPeriods] = useState(
    Object.keys(times).reduce((acc, period) => {
      acc[period] = true;
      return acc;
    }, {})
  );

  const togglePeriod = (period) => {
    setExpandedPeriods(prev => ({
      ...prev,
      [period]: !prev[period],
    }));
  };

  if (!isOpen) return null;

  return (
    <MobileWrapper>
      <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40">
        <div
          className="w-[375px] rounded-t-[16px] p-5"
          style={{ background: "linear-gradient(180deg, #DFDAFB 0%, #F9CCC5 100%)" }}
        >
          {/* Header */}
          <div className="relative flex items-center justify-center mb-4">
            <h2 className="font-semibold text-[16px] text-[#000000] font-quicksand text-center">
              Select Session Time
            </h2>
            <img
              src="/assets/close.svg"
              alt="Close"
              className="absolute right-0 w-5 h-5 cursor-pointer"
              onClick={onClose}
            />
          </div>

          {/* Time Slots */}
          {Object.entries(times).map(([period, slots]) => {
            const isExpanded = expandedPeriods[period];
            return (
              <div key={period} className="mb-1 bg-[#FFFFFF80] rounded-xl p-[16px]">
                <div
                  className="flex justify-between items-center pb-2"
                //   onClick={() => togglePeriod(period)}
                >
                  <span className="font-semibold font-quicksand text-[16px] text-[#000000]">{period}</span>
                  <img
                  className='cursor-pointer'
                    src={isExpanded ? '/assets/ArrowUp.svg' : '/assets/Arrow.svg'}
                    alt={isExpanded ? 'Collapse' : 'Expand'}
                  />
                </div>

                {isExpanded && (
                  <div className="grid grid-cols-4 gap-2">
                    {slots.map((slot) => (
                      <button
                        key={slot}
                        disabled={slot === "06:00 AM" || slot === "06:00 PM"}
                        onClick={() => setSelectedTime(slot)}
                        className={`px-2 py-2 border rounded-lg text-xs font-quicksand font-medium transition
                          ${selectedTime === slot 
                        ? 'bg-[rgba(246,234,237,0.2)] border-[#E8A6B0] text-[#E8A6B0]' 
                            : 'bg-transparent border-[#CC627B] text-[#CC627B]'}
                          disabled:bg-gray-100 disabled:text-gray-300 disabled:border-gray-200`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={onClose}
              className="w-1/2 mr-2 py-2 rounded-lg border border-[#CC627B] text-[#CC627B] font-medium"
            >
              Cancel
            </button>
            <Button 
              onClick={() => onConfirm(selectedTime)}
              disabled={!selectedTime}
              title="Confirm"
              width='50%'
              height="45px"
              titleClassName="text-[#FFFFFF] font-semibold text-sm font-quicksand"
            />
          </div>
        </div>
      </div>
    </MobileWrapper>
  );
};

export default SessionTimeModal;
