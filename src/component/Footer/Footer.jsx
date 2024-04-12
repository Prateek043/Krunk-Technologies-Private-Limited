import React from 'react'
import fileIcon from '../../assets/fileIcon.png'
import logo from '../../assets/Logo.svg'
import rightArrow from '../../assets/rightArrow.png'

const Footer = () => {
    return (
        <div className='bg-[#EFF3FD] px-3 py-3 mt-4'>
            <div className='flex gap-2'>
                <div className='bg-white p-2 flex items-center justify-between rounded-md grow'>
                    <h4 className='text-[13px] text-[#949494]'>Type your message</h4>
                    <img src={fileIcon} alt="" />
                </div>
                <div className='bg-[#4C82EF] p-2 px-4 rounded-md'>
                    <img src={rightArrow} alt="" />

                </div>
            </div>

            <div className='flex items-center justify-center gap-1 pt-4'>
                <h2 className='text-[#B1B1B1] text-[13px]'>Powered by</h2>
                <h2> <span className='font-bold text-[#7A7F8C]'>Krunk.ai</span></h2>
                <img src={logo} alt="" />
            </div>
        </div>
    )
}

export default Footer
