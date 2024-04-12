import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Chat from '../../component/Chat/Chat'
import HandBag from '../../component/HandBag/HandBag'
import Filter from '../../component/Filter/Filter'
import Footer from '../../component/Footer/Footer'

const LandingPage = () => {
    return (
        <div className='bg-[#FFFFFF] rounded-[1rem] p-2 w-[380px]'>
            <Navbar/>
            <Chat/>
            <HandBag/>
            <Filter/>
            <Footer/>
        </div>
    )
}

export default LandingPage
