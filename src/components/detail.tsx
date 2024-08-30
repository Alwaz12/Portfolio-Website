import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GiSkills } from "react-icons/gi";
import { SiSkillshare } from "react-icons/si";
import { PiProjectorScreenDuotone } from "react-icons/pi";
import { GrProjects } from "react-icons/gr";
import Projects from "./projects";
import Skills from "./skills";
import { Contact2 } from "lucide-react";


export function Detail() {
  return (
    <Tabs defaultValue="education" className="w-full p-2">
      <TabsList className="grid w-full grid-cols-2">
        {/* Tabs Triger Button */}
        <TabsTrigger value="Skills">Skills</TabsTrigger>
        <TabsTrigger value="Projects">Projects</TabsTrigger>
        
      </TabsList>
      {/* Tabs Content Here */}
      {/* Skills */}
      <TabsContent value="Skills">
        <Skills/>
      </TabsContent>
      {/* Projects */}
      <TabsContent value="Projects">
        <Projects/>
      </TabsContent>
    </Tabs>
  );
}
