import React, { useState } from 'react';
import { ChevronDown, Calendar, Clock, Trash2, X } from 'lucide-react';
import './MaintenanceSettings.css';

interface TableRow {
  id: number;
  type: string;
  title: string;
}

const MaintenanceSettings: React.FC = () => {
  const [windowPreference, setWindowPreference] = useState<string>('select');
  const [startDay, setStartDay] = useState<string>('Sunday');
  const [startTime, setStartTime] = useState<string>('04:00');
  const [duration, setDuration] = useState<string>('0.5');
  const [autoUpdate, setAutoUpdate] = useState<boolean>(true);
  const [sla, setSla] = useState<string>('Dev-QA-SLA');
  const [snapshotTime, setSnapshotTime] = useState<string>('04:00');
  const [showNotification, setShowNotification] = useState<boolean>(true);
  const [rows, setRows] = useState<TableRow[]>([
    { id: 1, type: 'Link', title: 'Row Title' },
    { id: 2, type: 'Link', title: 'Row Title' },
    { id: 3, type: 'Link', title: 'Row Title' },
    { id: 4, type: 'Link', title: 'Row Title' },
  ]);

  const handleWindowPreferenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWindowPreference(e.target.value);
  };

  const handleStartDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStartDay(e.target.value);
  };

  const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartTime(e.target.value);
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDuration(e.target.value);
  };

  const handleAutoUpdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAutoUpdate(e.target.checked);
  };

  const handleSlaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSla(e.target.value);
  };

  const handleSnapshotTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSnapshotTime(e.target.value);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  const handleDeleteRow = (id: number) => {
    setRows(prevRows => prevRows.filter(row => row.id !== id));
  };

  return (
    <div className="maintenance-settings">
      {/* Header */}
      <div className="header">
        <h1 className="header-title">Additional settings</h1>
        <p className="header-subtitle">Maintenance Window, Availability machine</p>
      </div>

      {/* Maintenance Window Section */}
      <div className="section">
        <h2 className="section-title">Maintenance Window</h2>
        <p className="section-description">Describing what maintenance window is</p>

        {/* Window Preference */}
        <div style={{ marginBottom: '24px' }}>
          <h3 className="subsection-title">Window Preference</h3>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="windowPreference"
                value="none"
                checked={windowPreference === 'none'}
                onChange={handleWindowPreferenceChange}
                className="radio-input"
              />
              <span className="radio-label">No Preferences</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="windowPreference"
                value="select"
                checked={windowPreference === 'select'}
                onChange={handleWindowPreferenceChange}
                className="radio-input"
              />
              <span className="radio-label">Select Window</span>
            </label>
          </div>
        </div>

        {/* Time Settings - First Row: Start day and Start time */}
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">Start day</label>
            <div className="form-input-wrapper">
              <select
                value={startDay}
                onChange={handleStartDayChange}
                className="form-select"
                title='Start day'
              >
                <option>Sunday</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
              </select>
              <Calendar className="form-icon" />
            </div>
            
          </div>
          
          <div className="form-group">
            <label className="form-label">Start time</label>
            <div className="form-input-wrapper">
              <input
                type="text"
                value={startTime}
                onChange={handleStartTimeChange}
                className="form-input"
                title='Start time'
              />
              <Clock className="form-icon" />
            </div>
          </div>
        </div>

        {/* Duration - Second Row: Duration only */}
        <div className="form-grid-duration">
          <div className="form-group">
            <label className="form-label">Duration</label>
            <div className="form-input-wrapper">
              <select
                value={duration}
                onChange={handleDurationChange}
                className="form-select"
                title='Duration'
              >
                <option value="0.5">0.5</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="8">8</option>
              </select>
              <ChevronDown className="form-icon" />
            </div>
          </div>
        </div>

        {/* Auto Update Checkbox */}
        <label className="checkbox-wrapper">
          <input
            type="checkbox"
            checked={autoUpdate}
            onChange={handleAutoUpdateChange}
            className="checkbox-input"
          />
          <span className="checkbox-label">Enable auto minor version update</span>
        </label>
      </div>

      {/* Availability Machine Section */}
      <div className="section">
        <h2 className="section-title">Availability Machine Preferences</h2>
        <p className="section-description">
          Here you can define your data protection SLA and schedule. Once the database has been created, you can further define the data availability 
          and access policies from the Availability Machine app.
        </p>

        {/* SLA and Snapshot Time */}
        <div className="form-grid-2">
          <div className="form-group">
            <label className="form-label">SLA</label>
            <input
              type="text"
              value={sla}
              onChange={handleSlaChange}
              className="form-input"
              title='SLA'
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Snapshot time</label>
            <div className="form-input-wrapper">
              <input
                type="text"
                value={snapshotTime}
                onChange={handleSnapshotTimeChange}
                className="form-input"
                title='Snapshot time'
              />
              <Clock className="form-icon" />
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-container">
        {/* Table Header */}
        <div className="table-header">
          <div className="table-header-cell">
            <input type="checkbox" className="table-checkbox" title='checkbox'/>
          </div>
          <div className="table-header-cell">
            <span className="table-header-text">Header</span>
            <ChevronDown className="table-header-icon" />
          </div>
          <div className="table-header-cell">
            <span className="table-header-text">Header</span>
            <ChevronDown className="table-header-icon" />
          </div>
          <div className="table-header-cell justify-between">
            <span className="table-header-text">Header</span>
            <ChevronDown className="table-header-icon" />
          </div>
        </div>
        
        {/* Table Rows */}
        {rows.map((row) => (
          <div key={row.id} className="table-row">
            <div className="table-cell">
              <input type="checkbox" className="table-checkbox" title='checkbox' />
            </div>
            <div className="table-cell">
              <a href="#" className="table-link">{row.type}</a>
            </div>
            <div className="table-cell">
              <span className="table-text">{row.title}</span>
            </div>
            <div className="table-cell-end">
              <button 
                className="delete-button"
                onClick={() => handleDeleteRow(row.id)}
              >
                <Trash2 className="delete-icon" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Notification */}
      {showNotification && (
        <div className="notification">
          <div className="notification-content">
            <div className="notification-icon">
              i
            </div>
            <span className="notification-text">
              Projecting an estimate total count of 71 snapshots with the above configuration.
            </span>
          </div>
          <button 
            onClick={handleCloseNotification}
            className="notification-close"
            title='Close notification'
          >
            <X className="notification-close-icon" />
          </button>
        </div>
      )}
    </div>
  );
};

export default MaintenanceSettings;