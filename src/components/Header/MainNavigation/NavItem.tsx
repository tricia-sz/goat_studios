import { ChevronDown } from "lucide-react"
import { ElementType } from "react"

export interface NavItemProps {
  title: string,
  icon: ElementType

}
export function NavItem({title, icon: Icon}: NavItemProps){
  return(
    <a href="" className="w-full group flex items-center gap-3 roudend px-8 py-3 hover:bg-slate-950 rounded-full ">
      <Icon className="h-5 w-5 text-sky-500 group-hover:text-sky-500 "/>
      <span className="font-medium text-slate-300 group-hover:text-sky-500 w-full">
        {title}
      </span>
    </a>
  )
}