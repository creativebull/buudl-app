// Message.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Offer from '../components/message/Offer';
import Chat from '../components/message/Chat';
import styles from '../constants/global.styles'

const Message = () => {
  const [activeTab, setActiveTab] = useState('Chat');
  const [activeSegment, setActiveSegment] = useState('Buying');

  return (
    <View style={styles.inboxContainer}>
      <View style={styles.inboxHeader}>
        <Text style={styles.inboxHeaderTitle}>Inbox</Text>
        <View style={styles.inboxSegmentedControlContainer}>
          {/* Buying Button */}
          <TouchableOpacity
            style={[
              styles.inboxSegmentButton,
              activeSegment === 'Buying' && styles.inboxSegmentButtonActive,
            ]}
            onPress={() => setActiveSegment('Buying')}
          >
            <Text
              style={[
                styles.inboxSegmentButtonText,
                activeSegment === 'Buying' && styles.inboxSegmentButtonTextActive,
              ]}
            >
              Buying
            </Text>
          </TouchableOpacity>

          {/* Selling Button */}
          <TouchableOpacity
            style={[
              styles.inboxSegmentButton,
              activeSegment === 'Selling' && styles.inboxSegmentButtonActive,
            ]}
            onPress={() => setActiveSegment('Selling')}
          >
            <Text
              style={[
                styles.inboxSegmentButtonText,
                activeSegment === 'Selling' && styles.inboxSegmentButtonTextActive,
              ]}
            >
              Selling
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Tab Selection */}
      <View style={styles.inboxTabsContainer}>
        <TouchableOpacity
          style={[
            styles.inboxTab,
            activeTab === 'Chat' && styles.inboxActiveTab,
          ]}
          onPress={() => setActiveTab('Chat')}
        >
          <Text
            style={[
              styles.inboxTabText,
              activeTab === 'Chat' && styles.inboxActiveTabText,
            ]}
          >
            Chats
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.inboxTab,
            activeTab === 'Offer' && styles.inboxActiveTab,
          ]}
          onPress={() => setActiveTab('Offer')}
        >
          <Text
            style={[
              styles.inboxTabText,
              activeTab === 'Offer' && styles.inboxActiveTabText,
            ]}
          >
            Offers
          </Text>
        </TouchableOpacity>
      </View>

      {/* Displaying active tab content */}
      {activeTab === 'Chat' ? <Chat /> : <Offer />}
    </View>
  );
};



export default Message;
