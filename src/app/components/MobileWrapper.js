"use client"

const MobileWrapper = ({ children }) => {
    
  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-100 p-4">
      <div className="w-[375px] bg-white shadow-md rounded-xl overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default MobileWrapper;