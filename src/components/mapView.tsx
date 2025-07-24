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
    <div style={{ height: '100%', width: '100%', zIndex: 0 }}>
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
              <div className="  w-64 p-2">
                <h3 className="font-bold text-base md:text-lg mb-2">{company.companyName}</h3>
                <div className="space-y-0.5 text-sm">
                  <p className="text-gray-600">{company.industry}</p>
                  <p className="text-gray-600">{company.address}</p>
                  <a href={`mailto:${company.email}`} className="text-[#25D366] font-medium hover:underline block truncate">{company.email}</a>
                  <a href={`tel:${company.phoneNumber}`} className=" font-medium hover:underline text-[#25D366] block truncate">{company.phoneNumber}</a>
                </div>
                <button
                  className={`w-full mt-2 md:mt-4 font-semibold p-1 md:py-2 md:px-4 rounded-lg transition-all duration-300 ${
                    contactedCompany.has(company.companyId)
                      ? 'bg-gray-200 text-black cursor-default'
                      : 'bg-[#FFC800] text-black hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300'
                  }`}
                  onClick={() => onContactCompany(company.companyId)}
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
