import React, { useRef, useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  KeyboardAvoidingView, Platform, FlatList, Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import otpStyles from './styles/otpStyles';

import loginimg from '../../assets/images/login.jpg';
import loginimg1 from '../../assets/images/login1.jpg';
import loginimg2 from '../../assets/images/login2.jpg';
import { useRouter } from "expo-router";

const images = [loginimg, loginimg1, loginimg2];

export default function Otp() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputs = useRef([]);
  const flatListRef = useRef();
  const router = useRouter();

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < 3) inputs.current[index + 1].focus();
  };

  const handleVerify = () => {
    console.log('OTP Entered:', otp.join(''));
    router.push('/components/Register');
  };

  const handleResend = () => {
    console.log('Resend OTP');
  };

  const onScroll = (e) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width);
    setActiveIndex(index);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={otpStyles.container}
    >
      {/* Image Carousel */}
      <View style={otpStyles.carouselContainer}>
        <FlatList
          ref={flatListRef}
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          renderItem={({ item }) => (
            <View style={otpStyles.imageWrapper}>
              <Image source={item} style={otpStyles.image} />
              <LinearGradient
                colors={['transparent', 'rgba(255,255,255,0.9)', '#fff']}
                style={otpStyles.whiteShadow}
              />
            </View>
          )}
        />
        <View style={otpStyles.dotsWrapper}>
          {images.map((_, i) => (
            <View
              key={i}
              style={[otpStyles.dot, { opacity: i === activeIndex ? 1 : 0.3 }]}
            />
          ))}
        </View>
      </View>

      {/* OTP Form */}
      <View style={otpStyles.formContainer}>
        <Text style={otpStyles.heading}>OTP</Text>
        <View style={otpStyles.otpContainer}>
          {otp.map((digit, i) => (
            <TextInput
              key={i}
              ref={(ref) => (inputs.current[i] = ref)}
              style={otpStyles.otpBox}
              maxLength={1}
              keyboardType="number-pad"
              onChangeText={(text) => handleChange(text, i)}
              value={digit}
            />
          ))}
        </View>
        <TouchableOpacity style={otpStyles.button} onPress={handleVerify}>
          <Text style={otpStyles.buttonText}>Verify</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleResend}>
          <Text style={otpStyles.resendText}>
            Haven’t Received OTP? <Text style={otpStyles.resendLink}>Resend</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

