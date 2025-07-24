import React from 'react';
import { Globe, Briefcase } from 'lucide-react';
import { Badge } from './Badge';
import { JobOpportunities } from '../data/companies';

const Header = () => {
  return (

<header className="bg-white text-black shadow-md sticky top-0 z-50">
  <div className="container md:mx-auto px-4 md:px-5">
    <div className="flex items-center justify-between h-20">
      <div className="flex items-center gap-4">
        <div className=" h-8 w-8 md:w-12 md:h-12 rounded-lg bg-[#FFC800] flex items-center justify-center">
          <Briefcase className="h-6 w-6 text-black" />
        </div>
        <div>
          <h1 className="text-base md:text-base font-bold text-black tracking-tight">WORK AND </h1>
         <h1 className="text-base md:text-base font-bold text-black tracking-tight">TRAVEL GUIDE</h1>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-2 text-gray-600">
          <Briefcase className="h-5 w-5" />
          <span className="font-semibold">{JobOpportunities.length}</span>
          <span>Jobs Available</span>
        </div>
        <Badge variant="outline" className=" flex items-center gap-2 border-gray-300 text-black px-4 py-2 rounded-full">
          <Globe className="h-4 w-4" />
          Australia
        </Badge>
      </div>
    </div>
  </div>
</header>
  );
};

export default Header;
