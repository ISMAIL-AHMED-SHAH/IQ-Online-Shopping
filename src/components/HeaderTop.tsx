import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitterX, BsWhatsapp } from 'react-icons/bs';
const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
      <div className='container py-4'>
        <div className='flex justify-between items-center'>
            <div className='hidden lg:flex gap-1'>
                
    <div className="header_top__icon_wrapper">
        <a href="https://www.instagram.com/ahmedshahismail?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer">
            <BsInstagram className="text-2xl text-gray-400 hover:text-pink-500 transition-colors duration-300" />
        </a>
    </div>
    <div className="header_top__icon_wrapper">
        <a href="https://www.linkedin.com/in/ismail-ahmed-shah-2455b01ba/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin className="text-2xl text-gray-400 hover:text-blue-500 transition-colors duration-300" />
        </a>
    </div>
    <div className="header_top__icon_wrapper">
        <a href="https://github.com/ISMAIL-AHMED-SHAH" target="_blank" rel="noopener noreferrer">
            <BsGithub className="text-2xl text-gray-400 hover:text-gray-300 transition-colors duration-300" />
        </a>
    </div>
    <div className="header_top__icon_wrapper">
        <a href="https://wa.me/+923322241405" target="_blank" rel="noopener noreferrer">
            <BsWhatsapp className="text-2xl text-gray-400 hover:text-green-500 transition-colors duration-300" />
        </a>
    </div>
    <div className="header_top__icon_wrapper">
                    <BsFacebook/>
                </div>
                <div className="header_top__icon_wrapper">
                    <BsTwitterX/>
                </div>
                <div className='hidden lg:flex gap-1'>
</div>

            </div>
            <div className='text-gray-500 text--[12px]'>
                <b>Free Shipping</b> THIS WEEK ORDER - $1005
            </div>
            <div className='flex gap-4'>
                <select className='text-gray-500 text-[12px] w-[70px]'
                name='currency'
                id='currency'>
                    <option value="USD $">USD $</option>
                    <option value="EUR €">EUR €</option>
                    <option value="PKR Rs">PKR Rs</option>
                </select>

                <select className='text-gray-500 text-[12px] w-[80px]'
                name='language'
                id='language'>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                </select>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
