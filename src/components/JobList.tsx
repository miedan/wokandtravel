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
    <div className='space-y-4 flex flex-col items-center    max-h-screen overflow-y-auto'>


      {
        jobs.map((job) => {

        const isContacted = contactedCompany.has(job.companyId)

        return (
          <div className="bg-white/70 md:w-3/4 rounded-md  group transition duration-300 hover:scale-105 hover:shadow-md hover:shadow-gray-400 ease-in-out transform cursor-pointer border-2 border-gray-200 px-2     ">
            <div className='px-4 md:px-10 py-2'>
              <div className="flex flex-col items-start justify-between mb-4">
               
                      <div className="flex flex-col  gap-2 mb-3 ">
                        <div className='flex items-center gap-2'>
                            <h3 className="font-semibold text-lg text-foreground">{job.companyName}</h3>
                            {isContacted && (
                              <CheckCircle2 className="h-5 w-5 text-green-800" />
                            )}
                        </div>
                        
                        <div className='flex items-center justify-start gap-3'>
                          <Badge variant='secondary' >{job.industry}</Badge>
                          <Badge variant='outline' >{job.state}</Badge>
                        </div>
                        
                      </div>
               

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm ">
                    <Building2 className="h-4 w-4" />
                    <span>Contact: {job.firstName} {job.lastName}</span>
                  </div>
                
                  <div className="flex items-center gap-2 text-sm ">
                    <MapPin className="h-4 w-4" />
                    <span>{job.address}</span>
                  </div>
                
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 " />
                    <a 
                      href={`mailto:${job.email}`} 
                      className="text-primary hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {job.email}
                    </a>
                  </div>
                
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 " />
                    <a 
                      href={`tel:${job.phoneNumber}`} 
                      className="text-primary hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {job.phoneNumber}
                    </a>
                  </div>
                </div>
                <button  
                 className='w-full bg-[#209C59] rounded-lg p-1.5 text-white hover:bg-[#39644d]'
                  onClick={(e) => {
                    e.stopPropagation();
                    onContactCompany(job.companyId);
                  }}
                >
                  {isContacted ? 'Contacted' : 'Mark as Contacted'}
                </button>
              </div>
            </div>
          </div>
        )

    

        })
      }

 
   

    </div>
  );
};

export default JobList;