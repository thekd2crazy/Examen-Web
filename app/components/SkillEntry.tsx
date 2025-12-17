import { ReactNode } from "react"

// l'objectif est de mettre un logo 
type SkillEntry = {
  title: string
  children: ReactNode
}

export default function SkillEntry(props: SkillEntry) {
  return (
    <div className="bg-[#3F4041] text-slate-50 flex flex-col items-center justify-center w-40 h-30  rounded-3xl hover:bg-[#E7BF76] transition-all duration-100">
      {props.children}
      <p className="text-lg text-center">{props.title}</p>
    </div>
  )
}
