import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import globalStyles from "../../constants/global.styles";

const AccountTabs = ({ tabs, initialTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabPress = (index) => {
    setActiveTab(index);
  };

  if (tabs.length === 0) {
    return null; // Return null if no tabs are provided
  }

  return (
    <View>
      <View style={globalStyles.accountTabContainer}>
        {tabs?.map((tab, index) => (
            <TouchableOpacity
                key={index}
                style={[globalStyles.accountTab, activeTab === index && globalStyles.accountActiveTab]}
                onPress={() => handleTabPress(index)} // Ensure index is passed to handleTabPress
            >
                <Text style={[globalStyles.accountTabText, activeTab === index && globalStyles.accountActiveText]}>{tab.title}</Text>
            </TouchableOpacity>
        ))}

      </View>
      <View style={globalStyles.accountTabContent}>
        {tabs[activeTab].render()}
      </View>
    </View>
  );
};

export default AccountTabs;