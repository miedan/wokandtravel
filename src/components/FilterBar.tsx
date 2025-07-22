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
    <div className='space-y-6 bg-white px-4 py-4 '>
      <div className='space-y-4'>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#209C59] rounded-full bg-gradient-ocean flex items-center justify-center">
            <Filter className="h-4 w-4 text-white" />
          </div>
          <h2 className="text-xl font-semibold">Browse availabe positions</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Building2 className="h-3 w-3" />
            {filteredJobs} of {totalJobs} jobs
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {contactedCount} contacted
          </Badge>
        </div>
      </div>

      <div className='flex flex-col gap-6'>
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input
              placeholder="Search companies, locations, or contacts..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 w-full rounded-lg  px-4 py-2 border border-neutral-300 text-sm"
            />
        </div>
        <div className='flex gap-4 items-center'>
        <div className="grid grid-cols-1 gap-4 w-1/2">
            <select
              value={selectedIndustry}
              onChange={(e) => onIndustryChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="All Industries">All Industries</option>
                {industries.map((industry) => (
                <option key={industry} value={industry}>
                    {industry}
                </option>
                ))}
            </select>      
        </div>

         <div className="grid grid-cols-1 gap-4 w-1/2">
            <select
              value={selectedState}
              onChange={(e) => onStateChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
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



