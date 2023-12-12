import Image from 'next/image';
import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import { MdFileDownload } from "react-icons/md";
import { MdChangeCircle } from "react-icons/md";

const Banner = () => {
    return (
        <div className=''>
            <div
                className='w-10/12 mx-auto h-80 bg-cover relative'
                style={{
                    backgroundImage: 'url("https://i.ibb.co/TbvKQ0d/pexels-yulia-ilina-9463157.jpg")',
                }}>
                <div className='border-2 border-yellow-950 h-72 my-auto w-11/12 mx-auto relative'>
                    <div className='absolute  top-0  bg-slate-800 flex items-center px-4 py-2 text-white gap-2 rounded-full'>

                        <Image src={'https://raw.githubusercontent.com/ruksana03/ruksana03/main/image/dp.jpg'} alt='my image' width={200} height={200} className='rounded-full' />
                        <div className='absolute top-1/2 right-0'>
                        <MdChangeCircle className='text-xl' />
                        </div>
                    </div>
                    <div className='absolute bottom-0 right-0 bg-slate-800 flex items-center px-4 py-2 text-white gap-2'>
                        <FaPlus />
                        <p>Add Photo</p>
                    </div>
                    <div className='absolute bottom-0 left-0   bg-slate-800 flex items-center px-4 py-2 text-white gap-2'>

                        <p>Download Resume</p>
                        <a href="https://drive.google.com/drive/folders/1HR0Ovc862jxXOsKUqNByD6KtkPIvfW1S"><MdFileDownload /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

