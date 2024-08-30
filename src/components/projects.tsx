import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
import { Link } from 'lucide-react';

const Projects = () => {
    // My Project here
    let projects = [
      {
        name:"ATM Machine",
        detail:"typescript in atm machine",
        link:"#",
        image:"atm.jpeg",

      },
      {
        name:"My OOP Bank",
        detail:"My OOP Bank in typescript",
        link:"#",
        image:"myoopbank.jpeg",

      },
      {
        name:"Number Guessing Game in Typescript",
        detail:"typescript in 45 Assignment",
        link:"#",
        image:"numberguessinggame.jpeg",

      },
    ];
    

    return (
        <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold tracking-tight uppercase">
                    Projects
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
    <div className="flex flex-wrap -m-4">
      {/* my projects here */}
      {projects.map((item,i)=>(
        <div key={i} className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative h-64">
          <Image
            alt="gallery"
            width={2000}
            height={2000}
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={`/muhammad/projects/${item.image}`}
         />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 cursor-pointer duration-300">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              {item.name}
            </h2>
            <p className="mt-3 leading-relaxed line-clamp-3">
              {item.detail}
            </p>
            <Link
            href={item.detail}
            target="_blank"
            className="text-sm font-medium tracking-tight hover:text-blue-500 hover:underline">
              <p className="mt-3">View Project</p>
            </Link>
          </div>
             </div>
      </div>
      ))}
      
      </div>

            </CardContent>
        </Card>
    )
}

export default Projects;