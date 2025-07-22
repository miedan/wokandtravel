import '../leafletConfig';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { JobOpportunity } from '../data/companies';

type MapViewProps = {
  companies: JobOpportunity[];  
  onContactCompany: (companyId:string) => void;
  contactedCompany:Set<string>;
};

const MapView: React.FC<MapViewProps> = ({ companies, onContactCompany, contactedCompany }) => {

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer
        center={[-27.85, 153.4]}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {companies.map((company) => (
          
          
          <Marker
            key={company.companyId}
            position={[company.latitude, company.longitude]}
          >
            <Popup>
              <div className='flex flex-col gap-[1px]'>
                <strong>{company.companyName}</strong><br />
                <span>{company.industry}</span><br />
                <span>{company.address}</span><br />
                <span>Email: {company.email}</span><br />
                <span>Phone: {company.phoneNumber}</span>
                 <button  
                 className='w-full bg-[#209C59] rounded-lg p-1.5 text-white hover:bg-[#39644d]'
                  onClick={(e) => {
                    e.stopPropagation();
                    onContactCompany(company.companyId);
                  }}
                >
                  {contactedCompany.has(company.companyId) ? 'Contacted' : 'Mark as Contacted'}
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
