import MaintenanceSettings from "./components/MaintenanceSettings";
import PricingCard from "./components/PricingCard";
import ServiceCard from "./components/ServiceCard";
import ServiceDetailsForm from "./components/ServiceDetailsForm";
import Sidebar from "./components/SideBar";
import OracleDbService from "./components/OracleDbService";
import './App.css';

function App() {
  return (
    <>
    <div className=".sidebar"><Sidebar /></div>
    <div className="app-container">
      

      <div className="main-content">
        {/* OracleDbService at the top */}
        
        <OracleDbService/>

        <div className="layout-grid">
          {/* Left column - ServiceCard and PricingCard stacked vertically */}
          <div className="left-column">
            <ServiceCard
              serviceDetails={{
                serviceName: "Oracle Para Profile",
                profileName: "Profile service for Oracle.",
              }}
              additionalSettings={{ preferences: ["Preference 1", "Preference 2"] }}
              monthlyPrice={29.99}
            />
            <PricingCard />
          </div>
          
          {/* Right column - ServiceDetailsForm and MaintenanceSettings stacked vertically */}
          <div className="right-column">
            <ServiceDetailsForm />
            <MaintenanceSettings />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;