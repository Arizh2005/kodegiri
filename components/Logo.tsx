import  React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';


const Logo = ({className}:{className?:string}) => {
    return (
        <Link href={"/"}>
            <h2 className={cn("text-2xl text-kodegiri-dark-green font-black tracking-wider uppercase hover:text-kodegiri-light-green hoverEffect group font-sans",className)}>
                Sayur<span className="text-kodegiri-light-green group-hover:text-kodegiri-dark-green hoverEffect">Box</span>
            </h2>
        </Link>

    );
};

export default Logo;