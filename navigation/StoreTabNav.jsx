import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const tabs = [
  {
    key: 'relevance',
    name: 'Relevance',
  },
  {
    key: 'latest',
    name: 'Latest',
  },
  {
    key: 'topSales',
    name: 'Top Sales',
  },
  {
    key: 'price',
    name: 'Price',
  },
];

export default function Home() {
  const [tab, setTab] = useState('relevance');

  return (
    <View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {tabs.map(tabItem => {
          const active = tabItem.key === tab;
          return (
            <TouchableOpacity
              key={tabItem.key}
              onPress={() => setTab(tabItem.key)}
              style={active ? styles.activeTab : styles.defaultTab}>
              <Text>{tabItem.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {tab === 'relevance' ? (
        <View>
          <Text>Relevance</Text>
        </View>
      ) : tab === 'latest' ? (
        <View>
          <Text>Latest</Text>
        </View>
      ) : tab === 'topSales' ? (
        <View>
          <Text>Top Sales</Text>
        </View>
      ) : tab === 'price' ? (
        <View>
          <Text>Price</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  defaultTab: {},
  activeTab: {},
});