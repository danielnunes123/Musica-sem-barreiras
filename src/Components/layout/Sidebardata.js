import { Link } from "react-router-dom";
import { BoomBox } from "lucide-react";

export const Sidebardata = [
    {
        titulo:"Explore",
        link:"/explore",
        icon:<BoomBox size={20}/>
    },
    {
        titulo:"Albums",
        link:"/albums",
        icon:<BoomBox size={20}/>
    },
    {
        titulo:"Artistas",
        link:"/artistas",
        icon:<BoomBox size={20}/>
    },
    {
        titulo:"Radio",
        link:"/radio",
        icon:<BoomBox size={20}/>
    }
]