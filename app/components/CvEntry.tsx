'user client'
import { ReactNode } from "react"
import { SlideIn } from "./Animation"

type CvEntry = {
    title: string
    employer: string
    children: ReactNode
}

export default function CvEntry(props: CvEntry) {
    return (

        <SlideIn>
            <div className="
                    border border-white
                    bg-bleu-500 
                
                    p-5 
                    rounded-xl
                    shadow-md 
                    hover:shadow-xl
                    transition-all 
                    duration-300
                    hover:-translate-y-1
                ">
                <h3 className="text-5-lg md:text-xl font-bold text-amber-50 ">{props.title}  {props.employer}</h3>
                <ul className="text-sm md:text-base mt-2 text-amber-50"> {props.children}</ul>
            </div>
        </SlideIn>

    )
}