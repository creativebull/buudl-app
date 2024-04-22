// MessageDetails.js
import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Image, 
  TextInput, 
  StyleSheet, 
  SafeAreaView, 
} from 'react-native';


const productData = {
  name: "Polo shirt",
  price: "₱200",
  imageUrl: "https://via.placeholder.com/150",
};

const messagesData = [
  { id: '1', text: 'Hello, are there any issues?', time: '10:34 AM', sender: 'buyer' },
  { id: '2', text: 'Hi, there are no issues. It’s in mint condition.', time: '10:35 AM', sender: 'seller' },

  { id: '3', text: 'That sounds great. Can I see more pictures?', time: '10:36 AM', sender: 'buyer' },
  { id: '4', text: 'Sure, I will send them over.', time: '10:37 AM', sender: 'seller' },
];

const MessageDetails = ({ route, navigation }) => {
  const { messageId } = route.params;
  const message = messagesData.find(msg => msg.id === messageId); 

  if (!message) {
    console.log(`No message found with id: ${messageId}`);
    return (
      <SafeAreaView style={styles.container}>
        <Text>Message not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
     
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerIcon}>
            <Text>{"<"}</Text>
          </TouchableOpacity>
          <Text style={styles.userName}>@danip</Text>
          <TouchableOpacity onPress={() => {}} style={styles.headerIcon}>
          </TouchableOpacity>
        </View>

        <View style={styles.productContainer}>
          <Image source={{ uri: productData.imageUrl }} style={styles.productImage} />
          <Text style={styles.productName}>{productData.name}</Text>
          <Text style={styles.productPrice}>{productData.price}</Text>
          <View style={styles.productActions}>
            <TouchableOpacity style={styles.offerButton}>
              <Text style={styles.offerButtonText}>Make offer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Buy now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Messages */}
        <ScrollView style={styles.messagesContainer}>
          {messagesData.map((msg) => (
            <View key={msg.id} style={[
              styles.messageBubble, 
              msg.sender === 'buyer' ? styles.messageBubbleBuyer : styles.messageBubbleSeller
            ]}>
              <Text style={styles.messageText}>{msg.text}</Text>
              <Text style={styles.messageTime}>{msg.time}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Input Area */}
        <View style={styles.inputArea}>
          <TextInput
            placeholder="Type a message..."
            style={styles.messageInput}
          />
          {/* send button */}
        </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9eb',
    paddingHorizontal: 15,
    paddingVertical:25,
    paddingTop: 10,
    marginTop:40,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  productContainer: {
    backgroundColor: 'white',
    padding: 16,
    alignItems: 'center',
  },
  productImage: {
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 22,
    marginVertical: 8,
  },
  productPrice: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productActions: {
    flexDirection: 'row',
    marginTop: 8,
  },
  offerButton: {
     backgroundColor: '#FFF',
    borderColor: '#F86F03',
    borderWidth: 1,
    paddingVertical: 7,
    marginEnd:5,
    paddingHorizontal: 70,
    borderRadius: 5,
    elevation: 2,
  },
  offerButtonText: {
    color: '#F86F03',
  },
  buyButton: {
    backgroundColor: '#F86F03',
    paddingVertical: 7,
    paddingHorizontal: 70,
    borderRadius: 5,
    elevation: 2,
  },
  buyButtonText: {
    color: 'white',
  },
  messagesContainer: {
    flex: 1,
  },
  messageBubble: {

    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    margin: 8,
    marginRight: 200,
    height:'auto',
  },
  messageBubbleBuyer: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    marginLeft: 10,
    borderWidth: 1,
  },
  messageBubbleSeller: {
    backgroundColor: '#D9D9D9',
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  messageText: {
    fontSize: 16,
  },
  messageTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  inputArea: {
    borderTopWidth: 1,
    borderTopColor: '#e9e9eb',
    padding: 10,
    flexDirection: 'row',
  },
  messageInput: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    marginRight: 10,
  },
});

export default MessageDetails;
