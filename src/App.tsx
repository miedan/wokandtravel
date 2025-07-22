import React, { useState, useEffect, useMemo} from 'react';
import JobList from './components/JobList';
// import MapView from './components/MapView';
import FilterBar from './components/FilterBar';
import  {JobOpportunities} from './data/companies'
import MapView from './components/mapView';
import Header from './components/header'

const App: React.FC = () => {

  const [filters, setFilters] = useState({ location: '', industry: '' });
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries')
  const [selectedState, setSelectedState] = useState('All States')
  const [contactedCompanies, setContactedCompanies] = useState<Set<string>>(new Set());



   const handleContactJob = (jobId: string) => {
    setContactedCompanies(prev => {
      const newSet = new Set(prev);
      if (newSet.has(jobId)) {
        newSet.delete(jobId);
      } else {
        newSet.add(jobId);
      }
      return newSet;
    });
  };


  const filteredJobs = useMemo(() => {
    return JobOpportunities.filter((job) =>{

      const matchesSearch = 
      job.companyName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      job.firstName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      job.lastName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      job.email.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      job.address.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ;
      const matchesIndustry = selectedIndustry === 'All Industries' || job.industry ===selectedIndustry
      const matchesState = selectedState === 'All States' || job.state === selectedState

      return matchesSearch && matchesIndustry && matchesState
     
    })

  },[searchTerm, selectedIndustry, selectedState])

  return (
  <div className="flex flex-col h-full bg-gray-100">
      <Header />

      <div className="flex flex-col md:flex-row gap-6 mx-6 mb-4 mt-6 md:overflow-y-hidden">
        <div className=" w-full md:w-1/2 flex flex-col rounded-lg bg-white shadow-lg shadow-gray-400 gap-0 p-4  ">
          <FilterBar
            searchTerm={searchTerm}
            selectedIndustry={selectedIndustry}
            selectedState={selectedState}
            onSearchChange={setSearchTerm}
            onIndustryChange={setSelectedIndustry}
            onStateChange={setSelectedState}
            totalJobs={JobOpportunities.length}
            filteredJobs={filteredJobs.length}
            contactedCount={contactedCompanies.size}
          />

          <div className="flex-1  mt-4">
            <JobList
              jobs={filteredJobs}
              onContactCompany={handleContactJob}
              contactedCompany={contactedCompanies}
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <MapView companies={JobOpportunities} onContactCompany={handleContactJob} contactedCompany={contactedCompanies} />
        </div>
      </div>
    </div>
);

};

export default App;