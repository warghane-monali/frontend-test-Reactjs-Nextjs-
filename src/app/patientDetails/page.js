"use client"

import React, { useState } from 'react'
import MobileWrapper from '../components/MobileWrapper'
import Button from '../components/Button'

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    whatsapp: '',
    email: '',
    address: '',
    sameAsMobile: false,
  })

  const [patients, setPatients] = useState([])
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        sameAsMobile: checked,
        whatsapp: checked ? prev.mobile : '',
      }))
    } else {
      let newValue = value

      // only numbers allowed for mobile & whatsapp
      if (name === 'mobile' || name === 'whatsapp') {
        newValue = newValue.replace(/\D/g, '') // remove non-digits
        if (newValue.length > 10) newValue = newValue.slice(0, 10) // limit to 10
      }

      setFormData((prev) => ({
        ...prev,
        [name]: newValue,
        ...(name === 'mobile' && prev.sameAsMobile
          ? { whatsapp: newValue }
          : {}),
      }))
    }
  }

  const validate = () => {
    const newErrors = {}

    // mobile validation
    if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Enter a valid 10-digit mobile number'
    }

    // whatsapp validation
    if (formData.whatsapp && !/^\d{10}$/.test(formData.whatsapp)) {
      newErrors.whatsapp = 'Enter a valid 10-digit WhatsApp number'
    }

    // email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = () => {
    if (!formData.name || !formData.mobile) {
      alert('Name and Mobile are required')
      return
    }

    if (!validate()) return

    setPatients((prev) => [...prev, formData])
    setFormData({
      name: '',
      mobile: '',
      whatsapp: '',
      email: '',
      address: '',
      sameAsMobile: false,
    })
    setErrors({})
  }

  return (
    <MobileWrapper>
      <div
        style={{ background: 'linear-gradient(180deg, #DFDAFB 0%, #F9CCC5 100%)' }}
        className="pl-[15px] pr-[15px]"
      >
        {/* Header */}
        <div className="pt-5 pb-5">
          <div className="flex items-center gap-2">
            <img
              src="/assets/arrow_back_ios_white_24dp 1.svg"
              className="w-[24px] h-[24px]"
            />
            <p className="font-quicksand font-semibold text-sm text-[#000000]">
              Add Patient Information
            </p>
          </div>
        </div>

        <div>
          {/* name */}
          <div className="pb-2">
            <p className="font-quicksand font-medium text-sm text-[#000000] mb-2">
              Name
            </p>
            <div className="bg-[#FFFFFF] rounded-[10px] pt-[8px] pr-[12px] pb-[8px] pl-[12px]">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter patient name"
                className="w-full font-quicksand font-medium text-sm text-[#000000] border-none outline-none bg-transparent"
              />
            </div>
          </div>

          {/* mobile */}
          <div className="pb-2">
            <p className="font-quicksand font-medium text-sm text-[#000000] mb-2">
              Mobile Number
            </p>
            <div className="bg-[#FFFFFF] rounded-[10px] pt-[8px] pr-[12px] pb-[8px] pl-[12px]">
              <input
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter patient mobile number"
                className="w-full font-quicksand font-medium text-sm text-[#000000] border-none outline-none bg-transparent"
              />
            </div>
            {errors.mobile && (
              <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
            )}
          </div>

          {/* whatsapp */}
          <div className="pb-2">
            <p className="font-quicksand font-medium text-sm text-[#000000] mb-2">
              WhatsApp Number
            </p>
            <label className="flex items-center gap-2 font-quicksand font-medium text-xs text-[#6D6A5D] mt-2 mb-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.sameAsMobile}
                onChange={handleChange}
                disabled={!formData.mobile} // disable if mobile empty
              />
              Same as Mobile
            </label>
            <div className="bg-[#FFFFFF] rounded-[10px] pt-[8px] pr-[12px] pb-[8px] pl-[12px]">
              <input
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="Enter patient WhatsApp Number"
                disabled={formData.sameAsMobile}
                className="w-full font-quicksand font-medium text-sm text-[#000000] border-none outline-none bg-transparent"
              />
            </div>
            {errors.whatsapp && (
              <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>
            )}
          </div>

          {/* email */}
          <div className="pb-2">
            <p className="font-quicksand font-medium text-sm text-[#000000] mb-2">
              Email ID
            </p>
            <div className="bg-[#FFFFFF] rounded-[10px] pt-[8px] pr-[12px] pb-[8px] pl-[12px]">
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter patient email"
                className="w-full font-quicksand font-medium text-sm text-[#000000] border-none outline-none bg-transparent"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* address */}
          <div className="pb-2">
            <p className="font-quicksand font-medium text-sm text-[#000000] mb-2">
              Address
            </p>
            <div className="bg-[#FFFFFF] rounded-[10px] pt-[8px] pr-[12px] pb-[8px] pl-[12px]">
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={2}
                className="block w-full px-4 py-3 bg-[#FFFFFF] text-xs font-quicksand font-medium rounded-[7.26px] focus:outline-none"
                placeholder="Enter address"
              />
            </div>
          </div>
        </div>

        {/* submit button */}
        <div className="flex items-center justify-center mt-10 pb-5">
          <Button
            title="Submit"
            onClick={handleSubmit}
            width="50%"
            height="45px"
            titleClassName="text-[#FFFFFF] font-semibold text-sm font-quicksand"
          />
        </div>

        {/* Debug list */}
        {patients.length > 0 && (
          <div className="pb-5">
            <p className="font-bold text-sm mb-2">Submitted Patients:</p>
            <pre className="text-xs bg-white p-2 rounded">
              {JSON.stringify(patients, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </MobileWrapper>
  )
}

export default Page
