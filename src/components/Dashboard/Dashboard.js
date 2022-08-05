import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { CgFileDocument } from 'react-icons/cg';
import { ImBlogger2 } from 'react-icons/im';
import { MdRateReview, MdOutlineVideoStable } from 'react-icons/md';
import { FaCentercode } from 'react-icons/fa';
import OurAreaChart from './OurAreaChart';

const Dashboard = () => {
    return (
        <div>
            <div className='p-8'>
                <div className='grid grid-cols-1 gap-8'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                        <div className='flex h-28 items-center justify-between rounded-md bg-white p-4'>
                            <div>
                                <p className='mb-2 text-xs font-medium uppercase text-gray-500 '>users</p>
                                <p className='bg-green-100 text-green-500 px-2 py-px text-xl w-10 text-center rounded-md font-bold'>15</p>
                            </div>
                            <div className='text-3xl text-gray-400'><FaUsers /></div>
                        </div>
                        <div className='flex h-28 items-center justify-between rounded-md bg-white p-4'>
                            <div>
                                <p className='mb-2 text-xs font-medium uppercase text-gray-500 '>Documentations</p>
                                <p className='bg-green-100 text-green-500 px-2 py-px text-xl w-10 text-center rounded-md font-bold'>3</p>
                            </div>
                            <div className='text-3xl text-gray-400'><CgFileDocument /></div>
                        </div>
                        <div className='flex h-28 items-center justify-between rounded-md bg-white p-4'>
                            <div>
                                <p className='mb-2 text-xs font-medium uppercase text-gray-500 '>Blogs</p>
                                <p className='bg-green-100 text-green-500 px-2 py-px text-xl rounded-md font-bold w-10 text-center'>8</p>
                            </div>
                            <div className='text-3xl text-gray-400'>< ImBlogger2 /></div>
                        </div>
                        <div className='flex h-28 items-center justify-between rounded-md bg-white p-4'>
                            <div>
                                <p className='mb-2 text-xs font-medium uppercase text-gray-500 '>Reviews</p>
                                <p className='bg-green-100 text-green-500 px-2 py-px text-xl rounded-md font-bold w-10 text-center'>6</p>
                            </div>
                            <div className='text-3xl text-gray-400'><MdRateReview /></div>
                        </div>
                        <div className='flex h-28 items-center justify-between rounded-md bg-white p-4'>
                            <div>
                                <p className='mb-2 text-xs font-medium uppercase text-gray-500 '>Courses</p>
                                <p className='bg-green-100 text-green-500 px-2 py-px text-xl rounded-md font-bold w-10 text-center'>0</p>
                            </div>
                            <div className='text-3xl text-gray-400'>< FaCentercode /></div>
                        </div>
                        <div className='flex h-28 items-center justify-between rounded-md bg-white p-4'>
                            <div>
                                <p className='mb-2 text-xs font-medium uppercase text-gray-500 '>Tutorials</p>
                                <p className='bg-green-100 text-green-500 px-2 py-px text-xl rounded-md font-bold w-10 text-center'>3</p>
                            </div>
                            <div className='text-3xl text-gray-400'><MdOutlineVideoStable /></div>
                        </div>
                    </div>
                </div>
                <div>
                    <OurAreaChart></OurAreaChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;