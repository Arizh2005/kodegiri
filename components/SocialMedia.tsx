import { Facebook, Github, Instagram, Youtube } from 'lucide-react'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import Link from 'next/link'
import { cn } from '@/lib/utils';

const socialLink = [
    {
        title : "Youtube",
        href : "https://www.youtube.com/@arnaldyriswan.p9984",
        icon : <Youtube className="w-5 h-5" />
    },
    {
        title : "Github",
        href : "https://github.com/Arizh2005",
        icon : <Github className="w-5 h-5" />
    },
    {
        title : "Instagram",
        href : "https://www.instagram.com/a_rizpl",
        icon : <Instagram className="w-5 h-5" />   
    },
    { 
        title : "Facebook",
        href : "",
        icon : <Facebook className="w-5 h-5" />

    },
];

interface Props {
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
}

const SocialMedia = ({className, iconClassName, tooltipClassName}:Props) => {
  return <TooltipProvider>
    <div className={cn("flex items-center gap-3.5", className)}>
        {socialLink?.map((item)=>(
            <Tooltip key={item?.title}>
                <TooltipTrigger asChild>
                    <Link
                    key={item?.title}
                    target="_blank"
                    rel="noopener noreferrer" 
                    href={item?.href}
                    className={cn("p-2 border rounded-full hover:text-white hover:border-kodegiri-light-green hoverEffect", iconClassName)}>
                    {item?.icon}
                    </Link>
                </TooltipTrigger>
                <TooltipContent className={cn("bg-white text-darkColor font-semibold", tooltipClassName)}>
                    {item?.title}
                </TooltipContent>
            </Tooltip> 
        ))}
    </div>
    
  </TooltipProvider>
}

export default SocialMedia
