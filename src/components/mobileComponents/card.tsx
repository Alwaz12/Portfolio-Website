import React from 'react'
import Image from "next/image";
import Typescript, { TypewriterClass } from 'typewriter-effect';
import Typewriter from 'typewriter-effect';
import { FaCloudDownloadAlt, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { Button } from '../ui/button';

const MobileCard = () => {
  return (
    <div className='h-[90vh] flex flex-col items-center justify-center'>
        <div data-aos="zoom-in" className="card bg-blue-100 w-80 glass p-5 flex flex-col justify-center items-center">
        <Image
         src="/muhammad/muhammad.jpg"
         alt="profile-pic"
          width={200}
          height={200}
          className="rounded-md mx-auto"/>
  <div className="card-body">
    {/* Name Here */ }
    <h1 className="card-title text-2x1 text-center font-bold tracking-tight uppercase">
        Muhammad Alwaz
        </h1>
        <h2 className="text-md text-center font-semibold text-blue-800 ">
       <Typewriter
  options={{
    strings: ['Website Developer', 'UI/UX Designer', 'Full Stack Developer'],
    autoStart: true,
    loop: true,
  }}
/>
       </h2>
       {/* social media */ }
       <div className="grid grid-cols-3 gap-2">
           {/* linkedln */}
           <div className="mt-4">
            <Link href="https://www.linkedin.com/in/muhammad-alwaz-0775a92b7" target="_blank" className="text-gray-600 hover:text-[#0762C8]">
           <FaLinkedin className="text-4xl"/>
             </Link>
            </div>
           {/* Github */}
           <div className="mt-4">
            <Link href="https://github.com/Alwaz12?tab=repositories" target="_blank" className="text-gray-600 hover:text-[#6e5494]">
           <FaGithubSquare className="text-4xl"/>
             </Link>
            </div>
           <div></div>
        </div>
        {/* Download Cv Button */ }
        <Link href={'#'} className='mt-4' target="-blank">
      <Button>
        <FaCloudDownloadAlt className="mr-2 h-4 w-4" /> Download CV
      </Button>
      </Link>
  </div>
</div>
    </div>
  )
}

export default MobileCard