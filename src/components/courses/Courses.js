import React, { useEffect, useState } from 'react';
import CourseDetails from './CourseDetails';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import ScrollToTop from 'react-scroll-to-top';

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        const url = 'https://polar-shore-69456.herokuapp.com/course'
        fetch(url)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <ScrollToTop smooth color="red" top='20' />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='bg-white lg:pt-10 md:pt-44 pt-32 pb-12 border border-b-2 shadow-2xl'>
                <p className='lg:text-5xl md:text-4xl text-3xl font-semibold text-center'>Courses</p>

            </div>
            <div className='lg:flex md:grid md:grid-cols-2 grid grid-cols-1 justify-center items-center gap-5 bg-accent '>
                {

                    courses.map(course => <CourseDetails
                        key={course.id}
                        course={course}
                    ></CourseDetails>)
                }
            </div>
            <MessengerCustomerChat
                pageId="107648688729749"
                appId="629979325282821"
                htmlRef="<REF_STRING>"
            />,
        </div>
    );
};

export default Courses;