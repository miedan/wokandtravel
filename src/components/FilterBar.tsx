import React from 'react'
import { Filter, Building2, Users, Search } from 'lucide-react';
import { Badge } from './Badge';
import { states, industries } from '../data/companies';

interface JobFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedIndustry: string;
  onIndustryChange: (value: string) => void;
  selectedState: string;
  onStateChange: (value: string) => void;
  totalJobs: number;
  filteredJobs: number;
  contactedCount: number;
}

const FilterBar:React.FC<JobFiltersProps> = ({
    searchTerm,
    onSearchChange,
    selectedIndustry,
    onIndustryChange,
    
    selectedState,
    onStateChange,
    totalJobs,
    filteredJobs,
    contactedCount}
) => {
  return (
    <div className='space-y-6 bg-white px:4 xl:px-6 py-2  xl:py-6 rounded-lg shadow-sm'>
  <div className='space-y-4'>
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
        <Filter className="h-4 w-4 text-white" />
      </div>
      <h2 className="text-xl font-bold text-black">Browse Available Positions</h2>
    </div>

    <div className="flex flex-wrap gap-4">
      <Badge variant="secondary" className="flex items-center gap-2 bg-gray-100 text-black px-3 py-1 rounded-full">
        <Building2 className="h-4 w-4" />
        <span className="font-semibold">{filteredJobs}</span> of <span className="font-semibold">{totalJobs}</span> jobs
      </Badge>
      <Badge variant="secondary" className="flex items-center gap-2 bg-[#FFC800] text-black px-3 py-1 rounded-full">
        <Users className="h-4 w-4" />
        <span className="font-semibold">{contactedCount}</span> contacted
      </Badge>
    </div>
  </div>

  <div className='flex flex-col md:flex-row gap-2 xl:gap-4 '>
    <div className="relative flex-grow">
      <Search className=" hidden xl:block absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      <input
        placeholder="Search companies, locations, or contacts..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className=" xl:pl-12 w-full rounded-full px-4 py-3 border border-gray-300 text-sm focus:ring-2 focus:ring-[#FFC800] focus:border-[#FFC800] transition-shadow"
      />
    </div>
    <div className='flex gap-2 xl:gap-4'>
      <div className="flex-grow ">
        <select
          value={selectedIndustry}
          onChange={(e) => onIndustryChange(e.target.value)}
          className="w-full px-1 xl:px-4  py-3 border border-gray-300 rounded-full text-sm focus:ring-2 focus:ring-[#FFC800] focus:border-[#FFC800] transition-shadow"
        >
          <option  value="All Industries">All Industries</option>
          {industries.map((industry) => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-grow">
        <select
          value={selectedState}
          onChange={(e) => onStateChange(e.target.value)}
          className="w-full px-1 xl:px-4 py-3 border border-gray-300 rounded-full text-sm focus:ring-2 focus:ring-[#FFC800] focus:border-[#FFC800] transition-shadow"
        >
          <option value="All States">All States</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
    </div>
  </div>
</div>
  )
}

export default FilterBar
