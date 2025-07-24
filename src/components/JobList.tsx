import React, {useState} from 'react';
import { JobOpportunity } from '../data/companies';
import { MapPin, Mail, Phone, Building2, CheckCircle2 } from 'lucide-react';
import { Badge } from './Badge';

export interface jobProps {
  jobs:JobOpportunity[];
  onContactCompany: (companyId:string) => void;
  contactedCompany:Set<string>;
}


const JobList:React.FC<jobProps> = ({
  jobs,
  onContactCompany,
  contactedCompany
}) => {

 if (jobs.length === 0) {
  return (
    <div className='bg-white   '> No available jobs</div>
  )
 }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4  overflow-y-auto md:'>
  {jobs.map((job) => {
    const isContacted = contactedCompany.has(job.companyId);
    return (
      <div key={job.companyId} className="bg-white rounded-xl border border-gray-300 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col">
        <div className='px-2 py-4 flex-grow flex flex-col'>
          <div className="flex-grow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg text-gray-800">{job.companyName}</h3>
                  {isContacted && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800 flex items-center gap-1 py-1 px-2 rounded-full text-xs">
                      <CheckCircle2 className="h-4 w-4" />
                      
                    </Badge>
                  )}
                </div>
                <div className='flex items-center gap-2 mt-2'>
                  <Badge variant='outline' className="border-gray-200 text-gray-600">{job.industry}</Badge>
                  <Badge variant='outline' className="border-gray-200 text-gray-600">{job.state}</Badge>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-y-3 mb-5 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <Building2 className="h-4 w-4 text-gray-400" />
                <span>{job.firstName} {job.lastName}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span>{job.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <a href={`mailto:${job.email}`} className="text-[#25D366] font-medium hover:underline">
                  {job.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <a href={`tel:${job.phoneNumber}`} className="text-[#25D366] font-medium hover:underline">
                  {job.phoneNumber}
                </a>
              </div>
            </div>
          </div>

          <button
            className={`w-full font-semibold py-3 px-4 rounded-lg transition-all duration-300 cursor-pointer ${
              isContacted
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-[#FFC800] text-black hover:bg-yellow-400'
            }`}
            onClick={() => onContactCompany(job.companyId)}
          >
            {isContacted ? 'Contacted' : 'Mark as Contacted'}
          </button>
        </div>
      </div>
    );
  })}
</div>
  );
};

export default JobList;
