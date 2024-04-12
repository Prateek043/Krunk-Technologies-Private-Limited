import React from 'react'

const Chat = () => {
    return (
        <div className=' px-3 pt-[2.5rem] pb-4'>
            
            <div>
                <div>
                    <h4 className='text-[#333333] w-[65%] rounded-[10px] font-normal p-2 text-[13px] bg-[#E6EEFF]  
                        '>Hi Sam! I am your personal <br /> shopping assistant , how can i <br /> help you today ?</h4>
                    <h4 className='font-normal text-[10px] text-[#333333] ml-[1rem] my-2'>4:45 PM</h4>
                </div>
                <div>
                    <h4 className='text-[#333333] w-[55%] ml-auto rounded-[10px] pr-2 font-normal text-end p-2 text-[13px] bg-[#DCF7C5]  
                        '>I am looking for a hand bag, <br /> with long strap .</h4>
                    <h4 className='w-fit ml-auto px-[2rem] font-normal text-[10px] text-[#333333] my-2'>4:46 PM</h4>
                </div>
            </div>
        </div>
    )
}

export default Chat
