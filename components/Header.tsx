import React from 'react'
import Image from 'next/image'
import { FaSearch } from "react-icons/fa";

type Props = {
    searchText: string;
    setSearchText: (event: any) => void;
    handlePress: (event: any) => void;
}

const Header = ({ searchText, setSearchText, handlePress }: Props) => {
    return (
        <div className='bg-white h-[100px] flex p-10 items-center border-b-2 rounded-md'>
            <div className='flex justify-start items-center gap-5'>
                <div>
                    <Image src={'/images/oyin.jpg'} alt='logo' width={80} height={60} />
                </div>
                <div className='relative'>
                    <input
                        type="text" className='p-2 border-2 rounded-md w-[400px] pl-10'
                        placeholder='You looking for something?'
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={handlePress}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaSearch />
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Header