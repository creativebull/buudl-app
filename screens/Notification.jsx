import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../constants/global.styles';
import OrdersScreen from '../components/notifications/OrdersTab';
import LikesScreen from '../components/notifications/LikesTab';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from "../constants/index";

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('OrdersTab');
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
        {/* Back Button */}
      <View style={globalStyles.notificationHeaderContainer}>
        <Text style={globalStyles.notificationHeaderTitle}>Notifications</Text>
      </View>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Ionicons name="chevron-back" size={30} color={COLORS.secondary}/>
                    </TouchableOpacity>
      <View style={globalStyles.notificationTabContainer}>
        {/* Orders Tab */}
        <TouchableOpacity
          style={[
            globalStyles.notificationTab,
            activeTab === 'OrdersTab' && globalStyles.notificationActiveTab,
          ]}
          onPress={() => setActiveTab('OrdersTab')}
        >
          <Text style={[
            globalStyles.notificationTabText,
            activeTab === 'OrdersTab' && globalStyles.notificationActiveTabText,
          ]}>Orders</Text>
        </TouchableOpacity>

        {/* Likes Tab */}
        <TouchableOpacity
          style={[
            globalStyles.notificationTab,
            activeTab === 'LikesTab' && globalStyles.notificationActiveTab,
          ]}
          onPress={() => setActiveTab('LikesTab')}
        >
          <Text style={[
            globalStyles.notificationTabText,
            activeTab === 'LikesTab' && globalStyles.notificationActiveTabText,
          ]}>Likes</Text>
        </TouchableOpacity>
      </View>

      {/* Active tab */}
      {activeTab === 'OrdersTab' ? <OrdersScreen /> : <LikesScreen />}
    </View>
  );
};

export default Notifications;
