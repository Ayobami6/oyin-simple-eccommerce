import React from 'react'
import Image from 'next/image'
import { FaSearch } from "react-icons/fa";

type Props = {
    searchText: string;
    setSearchText: (event: any) => void;
    handlePress: (value: string) => void;
}

const Header = ({ searchText, setSearchText, handlePress }: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSearchText(event.target.value);
        handlePress(event.target.value);

    };
    return (
        <div className='bg-white h-[100px] flex p-10 items-center border-b-2 rounded-md'>
            <div className='flex justify-start items-center gap-5'>
                <div>
                    <Image src={'/images/oyin.jpg'} alt='logo' width={80} height={60} />
                </div>
                <div className='relative'>
                    <input
                        type="text" className='p-2 border-2 rounded-md w-full pl-10'
                        placeholder='You looking for something?'
                        onChange={handleChange}
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