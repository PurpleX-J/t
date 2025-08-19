import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import './ServiceDetailsForm.css'; // <-- Import CSS file

const ServiceDetailsForm = () => {
  const [serviceName, setServiceName] = useState('oracle_09_2023');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([
    { key: 'key_input', value: 'value_input' },
    { key: 'key2', value: 'value2' }
  ]);
  const [newTag, setNewTag] = useState({ key: '', value: '' });
  const [softwareRelease, setSoftwareRelease] = useState('Oracle 21c');
  const [version, setVersion] = useState('21.0.0.0.0');
  const [createAsContainer, setCreateAsContainer] = useState(false);

  const addTag = () => {
    if (newTag.key && newTag.value) {
      setTags([...tags, { ...newTag }]);
      setNewTag({ key: '', value: '' });
    }
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTag();
    }
  };

  return (
    <div className="service-form">
      {/* Header */}
      <div className="form-header">
        <h1 className="form-title">Service Details</h1>
        <p className="form-subtitle">Service Name, Service Description, Software Release</p>
      </div>

      {/* Service Name */}
      <div className="form-group">
        <label className="form-label">Service Name</label>
        <div className="select-wrapper">
          <select 
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            className="form-select"
            aria-label="Service Name"
          >
            <option value="oracle_09_2023">oracle_09_2023</option>
          </select>
          {/* <ChevronDown className="select-icon" /> */}
        </div>
      </div>

      {/* Description */}
      <div className="form-group">
        <label className="form-label">Description (optional)</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add a description"
          className="form-textarea"
        />
      </div>

      {/* Tags */}
      <div className="form-group">
        <label className="form-label">Tags</label>
        
        <div className="tag-inputs">
          <input
            type="text"
            value={newTag.key}
            onChange={(e) => setNewTag({ ...newTag, key: e.target.value })}
            onKeyPress={handleKeyPress}
            placeholder="Key"
            className="form-input"
          />
          <span className="tag-separator">:</span>
          <input
            type="text"
            value={newTag.value}
            onChange={(e) => setNewTag({ ...newTag, value: e.target.value })}
            onKeyPress={handleKeyPress}
            placeholder="Value"
            className="form-input"
          />
        </div>

        <div className="tag-list">
          {tags.map((tag, index) => (
            <div key={index} className="tag-item">
              <span>{tag.key} : {tag.value}</span>
              <button
                onClick={() => removeTag(index)}
                className="tag-remove"
                title={`Remove tag ${tag.key} : ${tag.value}`}
                aria-label={`Remove tag ${tag.key} : ${tag.value}`}
              >
                <X className="icon-small" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Engine Configuration */}
      <div className="engine-section">
        <h2 className="engine-title">Engine configuration</h2>
        <p className="engine-subtitle">Adjustable parameters, performance optimization, fine-tuning options</p>
      </div>

      {/* Software Release & Version */}
      <div className="form-row">
        <div>
          <label className="form-label">Software Release</label>
          <div className="select-wrapper">
            <select 
              value={softwareRelease}
              onChange={(e) => setSoftwareRelease(e.target.value)}
              className="form-select"
              aria-label="Software Release"
              title="Software Release"
            >
              <option value="Oracle 21c">Oracle 21c</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="form-label">Version</label>
          <div className="select-wrapper">
            <select 
              value={version}
              onChange={(e) => setVersion(e.target.value)}
              className="form-select"
              title="Version"
            >
              <option value="21.0.0.0.0">21.0.0.0.0</option>
            </select>
          </div>
        </div>
      </div>

      {/* Checkbox */}
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="containerDatabase"
          checked={createAsContainer}
          onChange={(e) => setCreateAsContainer(e.target.checked)}
          className="checkbox"
        />
        <label htmlFor="containerDatabase" className="form-label">
          Create as a Container Database
        </label>
      </div>
    </div>
  );
};

export default ServiceDetailsForm;
