import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

type Props = {
    bannerText: string
    loading: boolean
}

const Banner = ({ bannerText, loading }: Props) => {
    return (
        <div className='bg-submain h-[80px] flex items-center' >
            <div className='flex justify-center p-5 w-full'>
                {
                    loading ?
                        (
                            <>
                                <Box >
                                    <CircularProgress color='secondary' />
                                </Box>
                            </>


                        ) : (
                            <h1 className='text-center'>
                                {bannerText}
                            </h1>

                        )
                }

            </div>


        </div>
    )
}

export default Banner