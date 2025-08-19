import { ChevronRight, Code, MessageSquare, HelpCircle, Bell, User } from 'lucide-react';
import './OracleDbService.css';

export default function OracleDbService() {
  return (
    <div className="oracle-container">

      <div className="top-nav">

        <div className="breadcrumb">
          <span className="breadcrumb-link">Provisioning</span>
          <ChevronRight className="breadcrumb-icon" />
          <span className="breadcrumb-link">Relational Databases</span>
          <ChevronRight className="breadcrumb-icon" />
          <span className="breadcrumb-current">Oracle Server</span>
        </div>

        <div className="nav-right">
          <div className="credits">
            <span>Credits: $365</span>
          </div>
          <div className="nav-icons">
            <MessageSquare className="icon" />
            <HelpCircle className="icon" />
            <Bell className="icon" />
            <div className="user-avatar">
              <User className="avatar-icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="content-header">
        <div className="content-header-inner">
          <h1>Create New Oracle Database Service</h1>
          <button className="code-btn">
            <Code className="code-icon" />
            <span>Code</span>
          </button>
        </div>
      </div>
    </div>
  );
}
