import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function OurProducts() {
    const product=[
        {img1:<Image src="/imagep1.png" alt="image" width={285} height={301} />, h6:"Syltherine",p:"Stylish cafe chair" ,h5:"Rp 2500.000 ", h51:"Rp 3500.000" },
        {img2:<Image src="/imagep2.png" alt="image" width={285} height={301} />, h6:"Leviosa",p:"Stylish cafe chair" ,h5:"Rp 2500.000  " },
        {img1:<Image src="/imagep3.png" alt="image" width={285} height={301} />, h6:"Lolito",p:"Luxury big sofa" ,h5:"Rp 7000.000", h51:"Rp 14,000.000" },
        {img1:<Image src="/imagep4.png" alt="image" width={285} height={301} />, h6:"Respira",p:"Stylish cafe chair" ,h5:"Rp 500.000" },
    ]
    
  return (
    <div>
       
        <div className='flex gap-5 lg:ml-16 ml-8 '>
            {
                product.map((item)=>{
                    return(
                        <div className='hover'>
                            <div className=' lg:w-[285px] lg:h-[301px] w-[150px]  '>
                               <Link href="">key={item.img1} </Link> 
                                <div>
                                <Link href="">key={item.img2} </Link> 
                                </div>
                               
                            
                            <div className='lg:w-[285px] lg:h-[145px] w-[150px] bg-[#f4f5f7] py-4   px-4'>
                            
                              <div className='font-semibold lg:text-2xl text-base '>  <Link href="">key={item.h6} </Link>   <br /></div>
                              <div className='font-medium text-[#898989] text-xs lg:text-base pt-2 '>  <Link href="">key={item.p} </Link>   <br /></div>
                              <div className='font-semibold lg:text-xl text-xs pt-2 flex '>  <Link href="">key={item.h5} </Link>  <br /><span className='font-normal text-xs lg:text-base text-[#B0B0B0] lg:pl-4 pl-1'><del><Link href="">key={item.h51} </Link> </del> </span> </div>
                                </div>
                                </div>
                            
                        </div>
                        
                    )
                })
            }
        </div>
    </div>
  )
}

export default OurProducts