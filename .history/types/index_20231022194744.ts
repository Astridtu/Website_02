import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    text : string;
    containerStyles?:string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>
    btnType? : "button" | "submit";
}