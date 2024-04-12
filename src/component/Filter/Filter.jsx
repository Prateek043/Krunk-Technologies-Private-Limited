import React from 'react'
import filter from '../../assets/filter.png'

const Filter = () => {
    return (
        <div className='px-3'>
            <div className='flex justify-between items-center py-2'>
                <h3 className='text-[#949494] font-normal text-[13px]'>Select filters</h3>
                <div className='flex gap-2 items-center'>
                    <img src={filter} alt="" />
                    <h4 className='text-[13px] font-normal text-[#666666]'>Filter</h4>
                </div>
            </div>

            <div className='flex gap-3 my-1'>
                <div className='flex gap-2 items-center text-[13px] text-[#4C82EF] border border-[#4C82EF] bg-[#F6F9FF] py-1 px-2 w-fit rounded-md'>
                    <p>Strap - Long</p> 
                    <div>&times;</div>
                </div>
                <div className='flex gap-2 items-center text-[13px] text-[#737373] border border-[#737373] bg-[#F6F9FF] py-1 px-2 w-fit rounded-md'>
                    <p>Colour</p> 
                    <div>&times;</div>
                </div>
                <div className='flex gap-2 items-center text-[13px] text-[#737373] border border-[#737373] bg-[#F6F9FF] py-1 px-2 w-fit rounded-md'>
                    <p>Size</p> 
                    <div>&times;</div>
                </div>
            </div>
            <div className='flex gap-3 py-1'>
                <div className='flex gap-2 items-center text-[13px] text-[#737373] border border-[#737373] bg-[#F6F9FF] py-1 px-2 w-fit rounded-md'>
                    <p>Brand</p> 
                    <div>&times;</div>
                </div>
                <div className='flex gap-2 items-center text-[13px] text-[#737373] border border-[#737373] bg-[#F6F9FF] py-1 px-2 w-fit rounded-md'>
                    <p>Material</p> 
                    <div>&times;</div>
                </div>
            </div>
        </div>
    )
}

export default Filter
