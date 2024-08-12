'use client'
import React, { useRef } from 'react'
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'



type Props = {}

const CarouselPlugin = (props: Props) => {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
    )

    return (
        <div className='flex justify-center mt-5'>
            <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-5xl"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent className=''>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card className=''>
                                    <CardContent className="flex h-[300px] items-center justify-center p-6">
                                        <Image src={'/images/oyin.jpg'} alt='logo' width={200} height={150} objectFit='cover' />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div >

    )
}

export default CarouselPlugin