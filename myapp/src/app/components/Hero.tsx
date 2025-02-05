
import Image from "next/image";
import sofa from "../assets/banner.png";


function Hero() {
  return (
    <>
      <section className="flex  flex-col-reverse md:flex-row justify-between lg:justify-center  items-center h-[500px] md:h-[400px] lg:h-[550px] bg-[#FBEBB5] px-3 py-5 md:py-0 md:px-[202px]">
        {/* Text Section */}
        <div className="md:w-[50%] lg:w-[500px] w-full text-center md:text-left ">
          <h2 className="text-[28px] md:text-[54px] font-medium leading-tight md:leading-[64px]">
            Rocket Single Seater
          </h2>
          <button className="border-b-2 border-black w-[140px] h-[50px] mt-5 md:mt-[34px] text-[16px] md:text-[20px] font-normal">
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[50%] mt-6 md:mt-0 flex justify-center">
          <Image

            src={sofa}
            alt="Sofa"
          objectFit="cover"
            className="w-[250px] h-auto md:w-[900px] lg:h-[600px] object-contain"
          />
        </div>
      </section>

     
    
    </>
  );
}

export default Hero;
