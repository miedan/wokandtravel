import React from 'react';
import { Globe, Briefcase } from 'lucide-react';
import { Badge } from './Badge';
import { JobOpportunities } from '../data/companies';

const Header = () => {
  return (

<header className="bg-[#209C59]  backdrop-blur-sm sticky top-0 z-50" 
>
        <div className="px-4  md:px-6 ">
          <div className="flex items-center justify-between h-18">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center shadow-soft border border-white/30">
                <Briefcase className="h-4 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-[18px] font-medium text-white tracking-tight">Work & Travel Guide</h1>
                <p className="text-white/80 text-sm font-medium">Find Jobs. Explore Australia.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-4 text-white/90 text-sm">

               
                <span>{JobOpportunities.length} Jobs Available</span>
              </div>
              <Badge variant="secondary" className="flex items-center gap-2 bg-white/15 text-white border-white/20 hover:bg-white/25 transition-all duration-300 px-4 py-2">
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
