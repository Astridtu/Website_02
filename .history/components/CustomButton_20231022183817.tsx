"use client";

import { CustomButtonProps } from '@/types';
import image from 'next/image';

const CustomButton = ({title, containerStyles, handleClick}:CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={'custom-btn'}
      onClick={handleClick}
    >
        <span 
           {title}
        </span>

    </button>
  )
}

export default CustomButton