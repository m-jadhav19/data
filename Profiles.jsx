import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';

const Profiles = () => {
  const [switches, setSwitches] = useState([
    { id: 1, label: 'Light 1', isOn: false },
    { id: 2, label: 'Light 2', isOn: false },
    { id: 3, label: 'Light 3', isOn: false },
    // Add more lights as needed
  ]);
  
  const [selectedProfile, setSelectedProfile] = useState('Default');
  
  const handleToggle = (switchId) => {
    setSwitches(prevSwitches => {
      return prevSwitches.map(switchItem => {
        if (switchItem.id === switchId) {
          return {
            ...switchItem,
            isOn: !switchItem.isOn
          };
        }
        return switchItem;
      });
    });
  };

  const handleProfileChange = (event) => {
    setSelectedProfile(event.target.value);
    // Here you can define logic to update the switches based on the selected profile
    // You can update the switches state or trigger an API request to retrieve the switch settings for the profile
  };

  return (
    <div>
      <h1>Home Automation UI</h1>
      <div>
        <label>Select Profile:</label>
        <select value={selectedProfile} onChange={handleProfileChange}>
          <option value="Default">Default</option>
          <option value="Profile 1">Profile 1</option>
          <option value="Profile 2">Profile 2</option>
          {/* Add more profiles as needed */}
        </select>
      </div>
      <div>
        {switches.map(switchItem => (
          <ToggleSwitch
            key={switchItem.id}
            label={switchItem.label}
            isOn={switchItem.isOn}
            handleToggle={() => handleToggle(switchItem.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Profiles;
