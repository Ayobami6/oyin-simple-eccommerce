import React, { useState } from 'react'
import Image from 'next/image'

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


type Props = {
    product?: any
}

const ProductInfo = ({ product }: Props) => {
    const [activeImage, setActiveImage] = useState(product.assets[0].image)
    const [activeIndex, setActiveIndex] = useState(0);
    const handleChangeImage = (imageString: string, index: number) => {
        setActiveIndex(index)
        setActiveImage(imageString)
    }
    return (
        <>
            {/* large screen */}
            <div className='hidden md:block p-[80px]'>
                <div className='grid grid-cols-2'>
                    {/* photo sections */}
                    <div className='flex flex-col'>
                        <div className='w-[80%] h-[400px] rounded-lg border-2 border-gray-200'>
                            <div className='flex items-center pt-10 px-5 justify-center'>
                                {
                                    product ? (
                                        <Image src={activeImage} alt='logo' width={300} height={200} objectFit='cover' />
                                    ) : (
                                        <Image src={'/images/oyin.jpg'} alt='logo' width={400} height={300} objectFit='cover' />
                                    )
                                }
                            </div>
                        </div>

                        <div className='my-4'>
                            <Carousel
                                opts={{
                                    align: "start",
                                }}
                                className="w-full max-w-sm" >
                                <CarouselContent>
                                    {
                                        product && (
                                            product.assets.map((asset: any, index: number) => (
                                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                                    <div className="p-1">
                                                        <Card className={`cursor-pointer ${activeIndex === index ? "hover:border-3 border-2 border-gray-500" : "hover:border-2"}`} onClick={() => handleChangeImage(asset.image, index)}>
                                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                                <Image src={asset?.image} alt='logo' width={100} height={80} objectFit='cover' />
                                                            </CardContent>
                                                        </Card>
                                                    </div>
                                                </CarouselItem>
                                            ))
                                        )
                                    }
                                </CarouselContent>
                                {
                                    product && product.assets.length > 5 && (
                                        <>
                                            <CarouselPrevious />
                                            <CarouselNext />
                                        </>
                                    )

                                }

                            </Carousel>

                        </div>

                    </div>

                    {/* details section */}
                    <div className='flex flex-col'>
                        <h1 className=''>
                            Badge
                        </h1>
                        <h2 className=''>
                            Title
                        </h2>

                    </div>

                </div>

            </div>
            {/* mobile screen */}
        </>
    )
}

export default ProductInfo