"use client"
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
import { Button } from "@/components/ui/button";
import { FaShareAlt } from "react-icons/fa";
import { useToast } from "@/components/ui/use-toast"
import Link from 'next/link';
import Loading from "./Loading"

type Props = {
    type: string;
    products: any;
    loading: boolean
}

const PopularProduct = ({ type, products, loading }: Props) => {
    const { toast } = useToast()
    const data = [1, 2, 3, 4, 5];
    const handleCopyClick = (textToCopy: string) => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            console.log("Text copied to clipboard:", textToCopy);
            toast({
                title: "Text copied to clipboard",
            })
        }).catch(err => {
            console.error("Failed to copy text: ", err);
        });
    };
    return (
        <>
            <div className='px-[30px]'>
                <div className='p-10 font-bold text-2xl'>{type}</div>
                {
                    loading ? (<div className='flex items-center justify-center'><Loading /> </div>) : products && products.length > 0 ? (
                        <div className='grid md:px-6 lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-3'>
                            {
                                products.map((item: any, index: number) => (
                                    < Card key={index} className='rounded-md shadow-md hover:shadow-lg' >
                                        <CardHeader title={String(item)}>
                                            <div className='flex justify-center w-full h-full rounded-sm p-3 border-b-1'>
                                                <Image src={item.assets[0].image} alt='logo' width={200} height={150} objectFit='cover' />
                                            </div>
                                        </CardHeader>
                                        <Link key={index} href={`/products/${item.id}`}>
                                            <CardContent>
                                                <CardTitle>{item.name}</CardTitle>
                                                <CardDescription>
                                                    Product Description
                                                    <div className='flex justify-start font-bold mt-4'>₦{item.price}</div>

                                                </CardDescription>
                                            </CardContent>
                                        </Link>
                                        <CardFooter>
                                            <div className='flex justify-between hover:text-dark cursor-pointer gap-2 w-full text-center'>
                                                <div className='p-2' onClick={() => handleCopyClick(String(`http://localhost:3000/products/${item.id}`))}>
                                                    <FaShareAlt />
                                                </div>
                                                <Link href={"https://wa.me/message/TOEIZPY2U4UWD1"}>
                                                    <Button className="font-Poppins w-[80px] h-[30px] shadow-md text-[14px] text-white bg-main" type="button">
                                                        Order
                                                    </Button>
                                                </Link>

                                            </div>
                                        </CardFooter>
                                    </Card >
                                ))
                            }

                        </div>
                    ) : (
                        <div className='grid md:px-6 lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-3'>
                            {
                                data.map((item, index) => (
                                    <Link key={index} href={`/products/${index}`}>
                                        < Card key={index} className='rounded-md shadow-md hover:shadow-lg' >
                                            <CardHeader title={String(item)}>
                                                <div className='flex justify-center w-full h-full rounded-sm p-3 border-b-1'>
                                                    <Image src={'/images/oyin.jpg'} alt='logo' width={200} height={150} objectFit='cover' />
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <CardTitle>Product Name</CardTitle>
                                                <CardDescription>
                                                    Product Description
                                                    <div className='flex justify-start font-bold mt-4'>$100</div>

                                                </CardDescription>
                                            </CardContent>
                                            <CardFooter>
                                                <div onClick={() => handleCopyClick(String(item))} className='flex justify-between hover:text-dark cursor-pointer gap-2 w-full text-center'>
                                                    <div className='p-2'>
                                                        <FaShareAlt />
                                                    </div>
                                                    <Button className="font-Poppins w-[80px] h-[30px] shadow-md text-[14px] text-white bg-main" type="button">
                                                        Order
                                                    </Button>
                                                </div>
                                            </CardFooter>
                                        </Card >

                                    </Link>

                                ))
                            }

                        </div>
                    )
                }


            </div>


        </>
    )

}

export default PopularProduct
