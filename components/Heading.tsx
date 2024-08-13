import React from 'react'
import Head from 'next/head'

type Props = {}

const Heading = (props: Props) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/images/oyin.jpg" sizes="42x42" type="image/png" />
            </Head>
            <title>Toke&apos;s Collection</title>
            <meta name='description' content="Men and Women's Clothings, Shoes, Slides, Bags..." />
            <meta name='keywords' content="Clothings, Bags, Slides" />
            <meta name='viewport' content='width=device-width, initial-scale=1' />


        </>
    )
}

export default Heading