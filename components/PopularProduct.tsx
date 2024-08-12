import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import Image from 'next/image'


type Props = {
    type: string;
}

const PopularProduct = ({ type }: Props) => {
    const data = [1, 2, 3, 4, 5];
    return (
        <>
            <div className='px-[30px]'>
                <div className='p-10 font-bold text-2xl'>{type}</div>
                <div className='grid md:px-6 md:grid-cols-4 grid-cols-1 gap-3'>
                    {
                        data.map((item, index) => (
                            < Card key={index} className='rounded-md shadow-md hover:shadow-lg' >
                                <CardHeader title={String(item)}>
                                    <div className='flex justify-center w-full h-full rounded-sm p-3 border-b-1'>
                                        <Image src={'/images/oyin.jpg'} alt='logo' width={200} height={150} objectFit='cover' />
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardTitle>Product Name</CardTitle>
                                    <CardDescription>Product Description</CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <div className='text-center'>$100</div>
                                </CardFooter>
                            </Card >

                        ))
                    }

                </div>

            </div>


        </>
    )

}

export default PopularProduct
