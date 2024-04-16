import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import globalStyles from '../constants/global.styles';
import Offer from '../components/message/Offer';
import Chat from '../components/message/Chat';

const Message = () => {
  const [activeTab, setActiveTab] = useState('Chat');


  return (
    <View style={{ flex: 1 }}>
      

      <View style={globalStyles.notificationHeaderContainer}>
        
        <Text style={globalStyles.notificationHeaderTitle}>Inbox</Text>
      </View>
      <View style={globalStyles.notificationTabContainer}>
        {/* Chats Tab */}
        <TouchableOpacity
          style={[
            globalStyles.notificationTab,
            activeTab === 'Chat' && globalStyles.notificationActiveTab,
          ]}
          onPress={() => setActiveTab('Chat')}
        >
          <Text style={[
            globalStyles.notificationTabText,
            activeTab === 'Chat' && globalStyles.notificationActiveTabText,
          ]}>Chats</Text>
        </TouchableOpacity>

        {/* Offers Tab */}
        <TouchableOpacity
          style={[
            globalStyles.notificationTab,
            activeTab === 'Offer' && globalStyles.notificationActiveTab,
          ]}
          onPress={() => setActiveTab('Offer')}
        >
          <Text style={[
            globalStyles.notificationTabText,
            activeTab === 'Offer' && globalStyles.notificationActiveTabText,
          ]}>Offers</Text>
        </TouchableOpacity>
      </View>

      {/* Active Tab */}
      {activeTab === 'Chat' ? <Chat /> : <Offer />}
    </View>
  );
};

export default Message;
