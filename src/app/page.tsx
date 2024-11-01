import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto relative w-[1440px] mt-2 h-[1132px] bg-[#252b42]">
      <div className="absolute w-[1440px] h-[1132px] inset top[-520px] left[-720px]">
        <div className="w-[1322px] h-[91px] ml-[59px] relative">
          <div className="w-[187px] h-[58px] text-white absolute inset top-[17px] left-[136px]  
        "><h3 className="font-bold text-[24px] font-montserrat text-white leading-[32px] tracking-[0.1px] w-[152px] h-[32px] absolute inset top-[13px]">BrandName</h3></div>

          <div className="w-[815px] h-[58px] absolute inset top-[16px] left-[364px]">

            <div className="w-[275px] h-[24px] absolute top-[17px] gap-[21px] flex">
              <Link className="text-[14px] font-montserrat text-white leading-[22px] tracking-[0.2px] font-bold hover:text-blue-500 hover:text-[18px]"href="">Home</Link>
              <Link className="text-[14px] font-montserrat text-white leading-[22px] tracking-[0.2px] font-bold hover:text-blue-500 hover:text-[18px]" href="">Product</Link>
              <Link className="text-[14px] font-montserrat text-white leading-[22px] tracking-[0.2px] font-bold hover:text-blue-500 hover:text-[18px]"href="">Pricing</Link>
              <Link className="text-[14px] font-montserrat text-white leading-[22px] tracking-[0.2px] font-bold hover:text-blue-500 hover:text-[18px]"href="">Contact</Link>
            </div>

          <div className="w-[189px] h-[52px] absolute top-[3px] left-[620px] gap-[45px] flex">
          <div>
            <button className="w-[41px] h-[22px]  mt-[15px] text-[14px] leading-[22px] tracking-[0.2px] font-bold text-right font-montserrat text-white hover:text-blue-500 hover:text-[18px]">Login</button>
            </div>
            <div className="w-[214px] h-[52px]">
              <div className="w-[110px] h-[52px] bg-[#23a6f0] rounded-[5px] px-[25px] py-[15px] gap-[15px] flex hover:bg-blue-700">
            <button className="text-[14px] font-montserrat text-white leading-[22px] tracking-[0.2px] font-bold">Join Us</button>
          </div> 
          </div>
          </div>
            
            
          </div>
          <div className="absolute inset top-[39px] left-[1298px] w-[24px] h-[13.71px]"></div>
        </div>
        
      </div>
      <div className="w-[1046px] h-[1028px] absolute inset top-[104px] left-[197px] py-[80px] gap-[80px] flex justify-center">
        <div className="fixed w-[701px] h-[496px]">
          <div className="grid grid-cols-1 place-items-center w-[699px] h-[496px] py-[40px]">
            <div className="w-[77px] h-[24px]">
            <h5 className="text-center text-[16px] leading-[24px] tracking-[0.1px] font-montserrat text-white">Welcome</h5>
            </div>
            <div className="">
            <h1 className="w-[550px] h-[160px] text-[58px] leading-[80px] tracking-[0.2px] font-bold text-center font-montserrat text-white">Selling on the<br/>internet like a pro</h1>
            {/* <h1 className="text-[58px] leading-[80px] tracking-[0.2px] font-bold text-center font-montserrat text-white">internet like a pro</h1> */}
            </div>
            <div className="w-[536px] h-[60px]">
              <h4 className="text-[20px] leading-[30px] tracking-[0.2px] font-normal text-center font-montserrat text-white">We know how large objects will act, but things on a</h4>
              <h4 className="text-[20px] leading-[30px] tracking-[0.2px] font-normal text-center font-montserrat text-white">small scale just do not act that way.</h4>
            </div>
            <div className="w-[365px] h-[52px] flex">
              <div className="w-[193px] h-[52px] rounded-[5px] py-[15px] px-[40px] bg-[#23a6f0] hover:bg-blue-700">
              <button className="w-[113px] h-[22px] flex text-[14px] text-center font-montserrat text-white">Get quote now</button>
              </div>
              <div className="w-[162px] h-[52px] rounded-[5px] border-[1px] border-[#23a6f0] py-[15px] px-[40px] gap-[10px] hover:border-blue-700">
              <button className="w-[113px] h-[22px] flex text-center font-montserrat text-white">Learn more</button>
              </div>
              
              </div>
             </div>
            
            </div>          
              <div className="w-[1046px] h-[292px] mt-[550px] grid grid-cols-3 gap-[20px]">

                <div className="bg-[#ffffff] w-[328px] h-[292px] relative">
                  <div className="w-[70px] h-[76px] py-[22px] px-[19px] rounded-[10px] gap[10px] bg-[#ffdcd1] absolute top-[20px] left-[20px]"></div>
                  <h3 className="w-[135px] h-[24px] absolute inset top-[116px] left-[20px] text-[16px] leading-[24px] tracking-[0.1px]
                   text-[#252b42] font-montserrat font-bold">Training courses</h3>
                  <div className="w-[50px] h-[2px] bg-[#e74040] absolute inset top-[156px] left-[20px]"></div>
                  <div className="w-[222px] h-[60px] absolute inset top-[178px] left-[20px] font-montserrat"><p>The gradual accumulation of 
                                  information about atomic and 
                                  small-scale behaviour...</p></div>
                </div> 

                <div className="bg-[#ffffff] w-[328px] h-[292px] relative">
                  <div className="w-[70px] h-[76px] py-[22px] px-[19px] rounded-[10px] gap[10px] bg-[#b9eaa8] absolute top-[20px] left-[20px]"></div>
                  <h3 className="w-[168px] h-[24px] absolute inset top-[116px] left-[20px] text-[16px] leading-[24px] tracking-[0.1px]
                   text-[#252b42] font-montserrat font-bold">2,769 online courses</h3>
                  <div className="w-[50px] h-[2px] bg-[#e74040] absolute inset top-[156px] left-[20px]"></div>
                  <div className="w-[222px] h-[60px] absolute inset top-[178px] left-[20px] font-montserrat"><p>The gradual accumulation of 
                                  information about atomic and 
                                  small-scale behaviour...</p></div>

                  
                </div>

                <div className="bg-[#23a6f0] w-[328px] h-[292px] relative">
                  <div className="w-[70px] h-[76px] py-[22px] px-[19px] rounded-[10px] gap[10px] bg-[#ffffff] absolute top-[20px] left-[20px]"></div>
                  <h3 className="w-[135px] h-[24px] absolute inset top-[116px] left-[20px] text-[16px] leading-[24px] tracking-[0.1px]
                   text-[#ffffff] font-montserrat font-bold">Training courses</h3>
                  <div className="w-[50px] h-[2px] bg-[#ffff] absolute inset top-[156px] left-[20px]"></div>
                  <div className="w-[222px] h-[60px] absolute inset top-[178px] left-[20px] font-montserrat text-[#ffffff]"><p>The gradual accumulation of 
                                  information about atomic and 
                                  small-scale behaviour...</p></div>
                </div>

              </div> 
    </div> 
          </div>
       
  );
}
