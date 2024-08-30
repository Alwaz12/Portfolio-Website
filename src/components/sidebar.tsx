import Image from "next/image";
import { Button } from "./ui/button";
import Typescript, { TypewriterClass } from 'typewriter-effect';
import Typewriter from 'typewriter-effect';
import { FaCloudDownloadAlt, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Link from "next/link";


export function Sidebar() {
  return (
    <div className="h-screen flex flex-col justify-center items-center p-3">
      {/* image*/}
       <Image src="/muhammad/muhammad.jpg" alt="profile-pic" width={200} height={200} className="rounded-md"/>
      {/* Name here*/}
       <div className="mt-2">
       <h1 className="text-2x1 font-bold tracking-tight uppercase">
        Muhammad Alwaz
        </h1>
       <h2 className="text-md text-center font-semibold tracking-tight text-gray-600 ">
       <Typewriter
  options={{
    strings: ['Website Developer', 'UI/UX Designer', 'Full Stack Developer'],
    autoStart: true,
    loop: true,
  }}
/>
       </h2>
       </div>
      {/* Social Media Account */}
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
      {/* Download CV Button */}
      <Link href={'#'} className='mt-4'>
      <Button>
        <FaCloudDownloadAlt className="mr-2 h-4 w-4" /> Download CV
      </Button>
      </Link>
    </div>
  )
}