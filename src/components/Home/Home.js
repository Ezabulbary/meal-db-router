import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Home = () => {
    const naviget = useNavigate();

    const { about } = useParams();

    const handleAddToDetail = () => {
        naviget('/about')
    }
    return (
        <div className='flex justify-evenly'>
            <div className='p-4 mt-52 text-center'>
                <h1 className='text-6xl'>Order Your <span className='text-rose-300'>Best Meal</span></h1>
                <p className='text-justify p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit excepturi veniam quidem sapientevero voluptatibus ipsam, quos fugiat doloremque rem iure mollitia quisquam dicta aspernatur voluptatum consequuntur quidem natus labore sint! Quisquam eaque porro temporibus fugit ea!</p>
                <button onClick={() => handleAddToDetail(about)} className='border-4 rounded bg-blue-300 p-2'>About More</button>
            </div>
            <img className='w-[600px] h-[700px] m-12' src="https://www.honestfoodcompany.de/static/e2e076138bd9b743ccee6e825ea0fee3/39fae/Honest_Food_by_Mjam_Header_02.jpg" alt="" />
        </div>
    );
};

export default Home;