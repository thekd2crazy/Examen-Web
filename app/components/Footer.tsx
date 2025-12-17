import { ReactNode } from "react"
import SocialIcons from "./SocialIcons"


type Footer = {
    title: string
    date: string
    children: ReactNode
}

export default function Footer(props: Footer) {

    return (
        <footer className="w-full bg-neutral-900 py-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-white px-4 gap-8">

                <p className=" px-65 text-center md:text-left text-sm md:text-base">
                    © {props.date} {props.title}. {props.children}
                </p>

                <div className="flex justify-center md:justify-end">
                    <SocialIcons />
                </div>

            </div>
        </footer>
    )
}