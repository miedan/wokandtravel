import React, { useState, useEffect, useMemo} from 'react';
import JobList from './components/JobList';
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
  <div className="flex flex-col min-h-screen max-w-screen md:h-screen md:overflow-hidden">
      <Header />

      <main className="flex flex-col md:flex-row gap-6 p-4 md:flex-1 md:overflow-hidden">
        <div className="w-full md:w-1/2 flex flex-col bg-white rounded-2xl shadow-lg md:overflow-hidden">
          <div className="p-4">
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
          </div>
          <div className="px-6 pb-6 overflow-y-auto h-96 md:h-auto md:flex-1 mx-1 always-scrollbar">
            <JobList
              jobs={filteredJobs}
              onContactCompany={handleContactJob}
              contactedCompany={contactedCompanies}
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 h-64 md:h-auto rounded-2xl shadow-lg ">
          <MapView companies={filteredJobs} onContactCompany={handleContactJob} contactedCompany={contactedCompanies} />
        </div>
      </main>
    </div>
);

};

export default App;
