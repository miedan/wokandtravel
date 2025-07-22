export interface Company {
  id: string;
  email: string;
  state: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  companyName: string;
  address: string;
  latitude: number;
  longitude: number;
  industry: string;
}

export interface Job {
  company: Company;
  position: string;
  description: string;
  location: string;
  postedDate: string;
}