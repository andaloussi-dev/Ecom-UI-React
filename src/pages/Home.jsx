import React from 'react'
import Announcments from '../components/Announcments'
import { Navbar } from '../components/Navbar'
import Slider from '../components/Slider'

const Home = () => {
    return (
        <div>
            <Announcments />
            <Navbar />
            <Slider />
        </div>
    )
}

export default Home  