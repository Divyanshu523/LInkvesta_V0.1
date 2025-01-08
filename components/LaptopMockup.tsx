import Image from "next/image";

export const LaptopMockup=async()=> {
    return (
        <div className="mockup-laptop relative">
       
        <Image
          src="/laptop-Mockup_.png"
          width={900}
          height={375}
          alt="laptop"
          className="w-full h-auto"
        />
  
        <div className="hidden md:block artboard rounded-xl bg-black border h-[285px] w-[445px] absolute top-[42px] left-[80px]">
      
          <div className="bg-black rounded-xl flex justify-center px-4 py-16">
          </div>
        </div>
      </div>
    )
};
