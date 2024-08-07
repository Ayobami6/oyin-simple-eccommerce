import React from 'react'
import Image from 'next/image'

type Props = {}

const Header = (props: Props) => {
    return (
        <div className='bg-white h-[100px] flex p-10 items-center border-b-2 rounded-md'>
            <div className='flex justify-start items-center gap-5'>
                <div>
                    <Image src={'/images/oyin.jpg'} alt='logo' width={80} height={60} />
                </div>
                <div>
                    <h1>Search</h1>
                </div>


            </div>

        </div>
    )
}

export default Header