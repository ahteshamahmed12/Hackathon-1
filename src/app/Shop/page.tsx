import React from 'react'
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Footer from '../Components/Footer';
function page() {

   const product=[
          {img1:<Image src="/imagep1.png" alt="image" width={285} height={301} />, h6:"Syltherine",p:"Stylish cafe chair" ,h5:"Rp 2500.000 ", h51:"Rp 3500.000" },
          {img2:<Image src="/imagep2.png" alt="image" width={285} height={301} />, h6:"Leviosa",p:"Stylish cafe chair" ,h5:"Rp 2500.000  " },
          {img1:<Image src="/imagep3.png" alt="image" width={285} height={301} />, h6:"Lolito",p:"Luxury big sofa" ,h5:"Rp 7000.000", h51:"Rp 14,000.000" },
          {img1:<Image src="/imagep4.png" alt="image" width={285} height={301} />, h6:"Respira",p:"Stylish cafe chair" ,h5:"Rp 500.000" },
      ]
      
  return (
    <main >
    
        <div className="lg:w-[1440px]  lg:h-[316px] w-[770px] h-[300px] bg-[url('/bg.png')] bg-cover  ">
       <h1 className='text-center font-medium lg:text-5xl lg:pt-40 pt-32 text-5xl'>Shop</h1>
       <div className='flex justify-center'>
       <p className='text-center font-medium lg:text-[16px] lg:top-[1px] top-1  lg:pr-2 pr-5 text-xl'>Home</p>
       <div className='relative lg:right-2 lg:top-[3px] top-1 right-4 '><ChevronRight/></div>
       <p className='relative lg:right-1 font-light  lg:top-[1px] lg:text-[16px] text-xl right-5'>Shop</p>
       </div>

        </div>
       
        <div className='flex gap-5 lg:ml-16 ml-8 mt-8 '>
            {
                product.map((item)=>{
                    return(
                        <div className='hover'>
                            <div className=' lg:w-[285px] lg:h-[301px] w-[150px]  '>
                               <Link href="SingleProduct/">{item.img1} </Link> 
                                <div>
                                <Link href="SingleProduct/">{item.img2} </Link> 
                                </div>
                               
                            
                            <div className='lg:w-[285px] lg:h-[145px] w-[150px] bg-[#f4f5f7] py-4   px-4'>
                            
                              <div className='font-semibold lg:text-2xl text-base '>  <Link href="SingleProduct/">{item.h6} </Link>   <br /></div>
                              <div className='font-medium text-[#898989] text-xs lg:text-base pt-2 '>  <Link href="SingleProduct/">{item.p} </Link>   <br /></div>
                              <div className='font-semibold lg:text-xl text-xs pt-2 flex '>  <Link href="SingleProduct/">{item.h5} </Link>  <br /><span className='font-normal text-xs lg:text-base text-[#B0B0B0] lg:pl-4 pl-1'><del><Link href="SingleProduct/">{item.h51} </Link> </del> </span> </div>
                                </div>
                                </div>
                            
                        </div>
                        
                    )
                })
            }
        </div>

        <div className='flex gap-5 lg:ml-16 ml-8 lg:mt-40 mt-12  '>
            {
                product.map((item)=>{
                    return(
                        <div className='hover'>
                            <div className=' lg:w-[285px] lg:h-[301px] w-[150px]  '>
                               <Link href="">{item.img1} </Link> 
                                <div>
                                <Link href="">{item.img2} </Link> 
                                </div>
                               
                            
                            <div className='lg:w-[285px] lg:h-[145px] w-[150px] bg-[#f4f5f7] py-4   px-4'>
                            
                              <div className='font-semibold lg:text-2xl text-base '>  <Link href="">{item.h6} </Link>   <br /></div>
                              <div className='font-medium text-[#898989] text-xs lg:text-base pt-2 '>  <Link href="">{item.p} </Link>   <br /></div>
                              <div className='font-semibold lg:text-xl text-xs pt-2 flex '>  <Link href="">{item.h5} </Link>  <br /><span className='font-normal text-xs lg:text-base text-[#B0B0B0] lg:pl-4 pl-1'><del><Link href="">{item.h51} </Link> </del> </span> </div>
                                </div>
                                </div>
                            
                        </div>
                        
                    )
                })
            }
        </div>
        <div className='flex gap-5 lg:ml-16 ml-8 lg:mt-40 mt-12'>
            {
                product.map((item)=>{
                    return(
                        <div className='hover'>
                            <div className=' lg:w-[285px] lg:h-[301px] w-[150px]  '>
                               <Link href="">{item.img1} </Link> 
                                <div>
                                <Link href="">{item.img2} </Link> 
                                </div>
                               
                            
                            <div className='lg:w-[285px] lg:h-[145px] w-[150px] bg-[#f4f5f7] py-4   px-4'>
                            
                              <div className='font-semibold lg:text-2xl text-base '>  <Link href="">{item.h6} </Link>   <br /></div>
                              <div className='font-medium text-[#898989] text-xs lg:text-base pt-2 '>  <Link href="">{item.p} </Link>   <br /></div>
                              <div className='font-semibold lg:text-xl text-xs pt-2 flex '>  <Link href="">{item.h5} </Link>  <br /><span className='font-normal text-xs lg:text-base text-[#B0B0B0] lg:pl-4 pl-1'><del><Link href="">{item.h51} </Link> </del> </span> </div>
                                </div>
                                </div>
                            
                        </div>
                        
                    )
                })
            }
        </div>
        <div className='flex gap-5 lg:ml-16 ml-8 lg:mt-40 mt-12'>
            {
                product.map((item)=>{
                    return(
                        <div className='hover'>
                            <div className=' lg:w-[285px] lg:h-[301px] w-[150px]  '>
                               <Link href="">{item.img1} </Link> 
                                <div>
                                <Link href="">{item.img2} </Link> 
                                </div>
                               
                            
                            <div className='lg:w-[285px] lg:h-[145px] w-[150px] bg-[#f4f5f7] py-4   px-4'>
                            
                              <div className='font-semibold lg:text-2xl text-base '>  <Link href="">{item.h6} </Link>   <br /></div>
                              <div className='font-medium text-[#898989] text-xs lg:text-base pt-2 '>  <Link href="">{item.p} </Link>   <br /></div>
                              <div className='font-semibold lg:text-xl text-xs pt-2 flex '>  <Link href="">{item.h5} </Link>  <br /><span className='font-normal text-xs lg:text-base text-[#B0B0B0] lg:pl-4 pl-1'><del><Link href="">{item.h51} </Link> </del> </span> </div>
                                </div>
                                </div>
                            
                        </div>

                        
                        
                    )
                })
            }
        </div>
       
        <div className='flex lg:mt-40 '   >
            <div className='w-[60px] h-[60px] bg-[#b88e2f] rounded-[10px] mt-10 ml-96  '>
                <button className='text-white pt-4 pl-6'><Link href="">1</Link></button>
            </div>

            <div className='w-[60px] h-[60px] bg-[#f9f1e7] rounded-[10px] mt-10 ml-8  '>
                <button className='text-black pt-4 pl-6'><Link href="">2</Link></button>
            </div>

            <div className='w-[60px] h-[60px] bg-[#f9f1e7] rounded-[10px] mt-10 ml-8  '>
                <button className='text-black pt-4 pl-6'><Link href="">3</Link></button>
            </div>

            <div className='w-[98px] h-[60px] bg-[#f9f1e7] rounded-[10px] mt-10 ml-8  '>
                <button className='text-[#000000] pt-4 font-light text-[20px] pl-6'><Link href="">Next</Link></button>
            </div>
        </div>

         <div className='w-[770px] lg:w-[1440px] lg:h-[270px] h-[150px] relative bottom-20 lg:bottom-4 lg:mt-2 top-[1640px] md:top-[1800px] lg:top-0 bg-[#faf3ea] '>
                <div className='flex lg:pt-[110px] lg:pl-12 pt-12 pl-2'>
               <Image  src="/trophy1.png" alt="trophy" width={52.77} height={60}></Image>
                <div>
                    <p className='lg:font-semibold font-normal lg:text-[25px] text-sm pl-1 pt-3 lg:pt-1 lg:pl-2 text-[#242424] '>High Quality</p>
                    <p className='lg:font-medium font-light lg:text-[20px] text-xs pl-1 lg:pt-3 lg:pl-2 text-[#898989]'>crafted from top materials</p>
        
                </div>
                
                <Image className='ml-3 lg:ml-16' src="/trophy2.png" alt="trophy" width={60} height={58}></Image>
                <div>
                    <p className='lg:font-semibold font-normal lg:text-[25px] pt-3 text-sm pl-1 lg:pt-1 lg:pl-2 text-[#242424] '>Warranty Protection</p>
                    <p className='lg:font-medium font-light lg:text-[20px] text-xs pl-1 lg:pt-3 lg:pl-2 text-[#898989]'>over 2 year</p>
        
                </div>
        
                <Image className='ml-3 lg:ml-16' src="/trophy3.png" alt="trophy" width={60} height={58}></Image>
                <div>
                    <p className='lg:font-semibold font-normal lg:text-[25px] pt-3 text-sm pl-1 lg:pt-1 lg:pl-2 text-[#242424] '>Free Shipping</p>
                    <p className='lg:font-medium font-light lg:text-[20px] text-xs pl-1 lg:pt-3 lg:pl-2 text-[#898989]'>Order over 150 $</p>
        
                </div>
        
                <Image className='ml-3 lg:ml-16' src="/trophy4.png" alt="trophy" width={60} height={58}></Image>
                <div>
                    <p className='lg:font-semibold font-normal lg:text-[25px] pt-3 text-sm pl-1 lg:pt-1 lg:pl-2 text-[#242424] '>24 / 7 Support</p>
                    <p className='lg:font-medium font-light lg:text-[20px] text-xs pl-1 lg:pt-3 lg:pl-2 text-[#898989]'>Dedicated support</p>
        
                </div>
               </div>
        
               
            </div> 
       
        <div className='relative top-[1640px] md:top-[10px] lg:top-10 '> <Footer/> </div> 
         
    </main>
  )
}

export default page