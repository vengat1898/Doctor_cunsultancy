import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";

import loginimg from '../../assets/images/login.jpg';
import loginimg1 from '../../assets/images/login1.jpg';
import loginimg2 from '../../assets/images/login2.jpg';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const images = [loginimg, loginimg1, loginimg2];

export default function Login() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef();
  const router = useRouter();

  const handleGetOtp = () => {
    console.log('Mobile Number:', mobileNumber);
    router.push('/components/Otp');
    
  };

  const onScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
    setActiveIndex(index);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      {/* Image Carousel */}
      <View style={styles.carouselContainer}>
        <FlatList
          ref={flatListRef}
          data={images}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          renderItem={({ item }) => (
            <View style={styles.imageWrapper}>
              <Image source={item} style={styles.image} />
              <LinearGradient
                colors={['transparent', 'rgba(255,255,255,0.9)', '#fff']}
                style={styles.whiteShadow}
              />
            </View>
          )}
        />

        {/* Dot Indicator */}
        <View style={styles.dotsWrapper}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                { opacity: index === activeIndex ? 1 : 0.3 },
              ]}
            />
          ))}
        </View>
      </View>

      {/* Form Content */}
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter mobile number"
          placeholderTextColor="#888"
          keyboardType="phone-pad"
          maxLength={10}
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />
        <TouchableOpacity style={styles.button} onPress={handleGetOtp}>
          <Text style={styles.buttonText}>Get OTP</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  carouselContainer: {
    height: screenHeight * 0.5,
  },
  imageWrapper: {
    width: screenWidth,
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  whiteShadow: {
    position: 'absolute',
    bottom: 0,
    height: 80,
    width: '100%',
  },
  dotsWrapper: {
    position: 'absolute',
    bottom: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    height: 8,
    width: 8,
    backgroundColor: '#116C89',
    borderRadius: 4,
    marginHorizontal: 5,
  },
  formContainer: {
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#116C89',
    marginBottom: 30,
    textAlign:"center"
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#116C89',
    paddingVertical: 14,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});



