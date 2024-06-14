import { FC } from 'react'

const Card: FC<{ title: string; name: string, bgColor: string; textColor: string, img: string, children: string }> =
  ({ title, name, bgColor, textColor, img, children }) => {

    return <>
      <li
      //  className="w-[853px] min-h-[408px] list-none flex mt-10 max-sm:w-[300px]  max-sm:flex-col max-sm:min-h-[408px] "
      
      className='max-w-[783px] mt-10 flex flex-col lg:flex-row px-10 py-10 gap-x-10 mx-10 lg:mx-10 max-sm:gap-y-4'
       style={{ backgroundColor: bgColor }}
       >
        <div className="flex items-center justify-center  max-sm:w-full ">
          <div className="w-[321px] h-[306px] max-sm:w-[200px] max-sm:h-[250px] flex justify-center items-center overflow-hidden"><img className="object-cover mt-5 md:mt-0" src={img} alt="" /></div>
        </div>
        <div className=" font-sofia flex items-center  justify-evenly flex-col max-sm:w-full" style={{ color: textColor }}>
          <p className="text-left font-bold text-[28px] max-sm:w-4/5 max-sm:text-[14px]">{title}</p>
          <p className="m-2 text-[15px] font-normal min-h-[80px]  max-sm:w-4/5 max-sm:text-[10px]">{children}</p>
          <p className="w-4/5 text-right text-[14px] font-bold pt-5 max-sm:w-4/5 max-sm:text-[12px] max-sm:p-2">{name}</p>
        </div>
      </li>
    </>

  }

export default Card;