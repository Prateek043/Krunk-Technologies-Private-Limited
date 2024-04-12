import React from 'react'
import image1 from '../../assets/SIMPLE CHATBOTS.png'
import vector1 from '../../assets/Vector1.png'

const Navbar = () => {
    return (
        <div className='p-2 bg-[#EFF3FD] rounded-md flex justify-between items-center text-[#4C82EF] font-sans'>
        <div className='flex gap-4 items-center '>
            <div className='relative'>
                <img src={image1} alt="" />
                <div className='absolute bg-[#3FE225] right-0 bottom-1 rounded-xl w-2 h-2'></div>

            </div>
            <div className=''>
                <div className='flex items-center gap-2 font-bold text-lg'>
                    <h5>Timpu</h5>
                    <img src={vector1} alt="" />
                </div>
                <div>
                    <h4>Chat assistant</h4>
                </div>
            </div>
        </div>
        <div className='flex gap-2 items-center'>
            <div className=' bg-[#3FE225] rounded-xl w-2 h-2'></div>
            <p>Online</p>
        </div>
        </div>
    )
}

export default Navbar
