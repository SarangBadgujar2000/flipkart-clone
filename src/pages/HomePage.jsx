import React from 'react';
import sliderBg from '../assets/sliderBg.jpg'
import { useNavigate } from 'react-router-dom';
const Homepage = () => {
    const navigate=useNavigate();
    const handleNavigation=()=>{
        navigate('/products')
    }
    return (
        <div className="relative">
            <img src={sliderBg} alt="Image 1" className="w-full h-auto" />
            <div class="absolute inset-y-0 left-0 my-32 mx-32 ">
                <p className="text-7xl font-bold text-red-500">Sale 20% Off</p>
                <p className="text-7xl font-semibold text-gray-700">On Everything</p>
                <div className={'w-96 my-4 mx-2'}>
                    <p className={'font-extralight'}>You can shop the latest products here.</p>
                </div>
                <button onClick={handleNavigation} className={"text-white bg-orange-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}>Shop Now</button>
            </div>
        </div>
    );
}

export default Homepage;