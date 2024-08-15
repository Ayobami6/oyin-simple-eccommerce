'use client'
import React from 'react'
import { useParams } from 'next/navigation';

type Props = {}

const ProductDetail = (props: Props) => {
  const { id } = useParams()
  return (
    <div>ProductDetail with id {id}</div>
  )
}

export default ProductDetail