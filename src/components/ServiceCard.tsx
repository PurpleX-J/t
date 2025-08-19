
import "./ServiceCard.css";

interface ServiceDetailsProps {
  serviceName: string;
  profileName: string;
  status?: "error" | "success" | "warning";
}

interface AdditionalSettingsProps {
  preferences: string[];
}

interface ServiceCardProps {
  serviceDetails: ServiceDetailsProps;
  additionalSettings: AdditionalSettingsProps;
  monthlyPrice: number;
  onCreateService?: () => void;
  onViewDetails?: () => void;
}


const ServiceCard = ({ 
  serviceDetails, 
  additionalSettings, 
  monthlyPrice,
//   onCreateService,
//   onViewDetails 
}: ServiceCardProps) => {
  return (

  <div className="service-card-container"> 
      <div className="service-card">

        <div className="service-card-content">
          <div className="service-details-section">


              <p className="service-details-title">Service Details</p>
            
              <p className="service-details-content">
                  Oracle_service | oracle_para_profile
              </p>
          </div>

          <div>
              <div className="additional-setting">Additional Settings</div>
              <div className="additional-setting-content">
                <p> No Preference Enabled Minor version update |</p> 
                  <p>7-day PITR 01:00 snapshot time |</p>
              </div>

          </div>
          
      </div>
    </div>
  </div>
  );
};

export default ServiceCard;