import React, { useState } from 'react';

import { 
  Grid3X3, 
  Database, 
  Settings, 
  Wrench, 
  Shield, 
  Play, 
  BookOpen, 
  Activity, 
  Server, 
  UserPlus, 
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import './SideBar.css';

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  hasDropdown?: boolean;
  isActive?: boolean;
}

const sidebarItems: SidebarItem[] = [
  { id: 'apps', label: 'Apps', icon: Grid3X3 },
  { id: 'db-services', label: 'DB Services', icon: Database, hasDropdown: true, isActive: true },
  { id: 'my-services', label: 'My services', icon: Settings },
  { id: 'provisioning', label: 'Provisioning', icon: Wrench },
  { id: 'availability-machines', label: 'Availability Machines', icon: Shield },
  { id: 'dataflix', label: 'Dataflix', icon: Play },
  { id: 'script-library', label: 'ScriptLibrary', icon: BookOpen },
  { id: 'benchmarks', label: 'Benchmarks', icon: Activity },
  { id: 'servers', label: 'Servers', icon: Server },
];

const bottomItems: SidebarItem[] = [
  { id: 'invite', label: 'Invite people', icon: UserPlus },
  { id: 'help', label: 'Help & Support', icon: HelpCircle },
];

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('db-services');

  return (
    <div className="tessell-sidebar">
      
      <div className="sidebar-header">
        <div className="sidebar-logo">
          {/* <div className="logo-icon"></div>
           */}
           <img src={require('./tessel.jpg')} alt="" />
          <span className="logo-text">Tessell</span>
        </div>
      </div>

    
      <div className="sidebar-content">
        <nav className="sidebar-nav">
          {sidebarItems.map((item) => (
            <div
              key={item.id}
              className={`sidebar-item ${activeItem === item.id ? 'active' : ''}`}
              onClick={() => setActiveItem(item.id)}
            >
              <div className="sidebar-item-content">
                <item.icon className="sidebar-icon" size={18} />
                <span className="sidebar-label">{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown className="sidebar-dropdown-icon" size={16} />
                )}
              </div>
            </div>
          ))}
        </nav>


        <div className="sidebar-bottom">
          {bottomItems.map((item) => (
            <div
              key={item.id}
              className="sidebar-item bottom-item"
              onClick={() => setActiveItem(item.id)}
            >
              <div className="sidebar-item-content">
                <item.icon className="sidebar-icon" size={18} />
                <span className="sidebar-label">{item.label}</span>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Sidebar;