import React from 'react';
import bagImage from '../../assets/bagImag.png'
import vector1 from '../../assets/Vector1.png'

const HandBag = () => {
    return (
        <div className='px-3'>
            <h2 className='text-[#949494] text-[13px]'>Popular tags for handbag</h2>
            <div className='flex justify-between items-center my-4 px-2'>
                <div className='border-[2px] border-[#4C82EF] p-2 px-3 rounded-md cursor-pointer'>
                    <p className='text-[13px] text-[#4C82EF] font-bold'>Clutch</p>
                </div>
                <div className='border-[2px] border-[#4C82EF] p-2 px-3 rounded-md cursor-pointer'>
                    <p className='text-[13px] text-[#4C82EF] font-bold'>Fabric lining</p>
                </div><div className='border-[2px] border-[#4C82EF] p-2 px-3 rounded-md cursor-pointer'>
                    <p className='text-[13px] text-[#4C82EF] font-bold'>Baggit</p>
                </div><div className='border-[2px] border-[#4C82EF] p-2 px-3 rounded-md cursor-pointer'>
                    <p className='text-[13px] text-[#4C82EF] font-bold'>Multi</p>
                </div>
            </div>

            <div>
                <div className='text-[#333333] w-[65%] rounded-md font-normal p-2 text-[13px] bg-[#E6EEFF]  
                    '>
                        <div className='bg-[#FFFFFF] rounded-md p-2 flex items-center gap-4'>
                            <div>
                                <img src={bagImage} alt="" />
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
                        <h4 className='my-2 text-[13px] text-[#333333]'> Or set filter and help us choose the best bag for you.</h4>
                        </div>
                <h4 className='font-normal text-[10px] text-[#333333] ml-[1rem] my-2'>4:48 PM</h4>
            </div>
        </div>
    )
}

export default HandBag
