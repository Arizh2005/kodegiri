import React, {FC} from 'react'
import Logo from './Logo';
import { X } from 'lucide-react';
import { headerData } from '@/constants/data';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SidebarProps> = ({isOpen,onClose}) => {
  const pathname = usePathname()
  return (
    <div className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white/70 shadow-xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} hoverEffect`}>
      <div className="min-w-7 max-w-96 bg-black h-screen p-10 border-r border-r-kodegiri-dark-green flex flex-col gap-6">
        <div className="flex items-center justify-between gap-5">
          <Logo className="text-white" 
            spanDesign="group-hover:text-white"/>
          <button onClick={onClose} className="hover:text-kodegiri-light-green hoverEffect">
            <X />
          </button>
        </div>

        <div className="flex flex-col space-y-3.5 font-semibold tracking-wide">
          {headerData?.map((item) => (
            <Link
              href={item?.href}
              key={item?.title}
              className={`hover:text-kodegiri-light-green hoverEffect ${pathname === item?.href && "text-white"}`}
            >
              {item?.title}
            </Link>
          ))}
        </div>

        
      </div>
    </div>
  )
}

export default SideMenu
