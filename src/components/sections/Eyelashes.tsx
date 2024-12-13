import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Compatible } from "../SectionQualities/Compatible";
import { Efficient } from "../SectionQualities/Efficient";
import { Secure } from "../SectionQualities/Secure";
import { Light } from "../SectionQualities/Light";

const Eyelashes = () => {
  return (
    <Tabs className="mt-10 ssm:w-full md:w-[75%] mx-auto" defaultValue="compatible">
      <TabsList className="w-full flex bg-white" defaultValue="compatible">
        <TabsTrigger className="flex-1 data-[state=active]:shadow-none py-4 px-2 bg-customGreen text-white md:text-[1.7rem]" value="compatible">compatible</TabsTrigger>
        <TabsTrigger className="flex-1 data-[state=active]:shadow-none py-4 px-2 bg-customGreen text-white md:text-[1.7rem]" value="eficiente">eficiente</TabsTrigger>
        <TabsTrigger className="flex-1 data-[state=active]:shadow-none py-4 px-2 bg-customGreen text-white md:text-[1.7rem]" value="seguro">seguro</TabsTrigger>
        <TabsTrigger className="flex-1 data-[state=active]:shadow-none py-4 px-2 bg-customGreen text-white md:text-[1.7rem]" value="ligero">ligero</TabsTrigger>
      </TabsList>
      <TabsContent className="flex items-center justify-center ssm:w-full h-[20rem] data-[state=inactive]:hidden" value="compatible"><Compatible /></TabsContent>
      <TabsContent className="flex items-center justify-center ssm:w-full h-[20rem] data-[state=inactive]:hidden " value="eficiente"><Efficient /></TabsContent>
      <TabsContent className="flex items-center justify-center w-full h-[20rem] data-[state=inactive]:hidden" value="seguro"><Secure /></TabsContent>
      <TabsContent className="flex flex-col justify-center items-center w-full h-[20rem] data-[state=inactive]:hidden" value="ligero"><Light /></TabsContent>
    </Tabs>
  );
};

export default Eyelashes;
