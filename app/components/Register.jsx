import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import registerStyles from './styles/registerStyles';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    dob: null,
    address: '',
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const router = useRouter();

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleRegister = () => {
    console.log('User Data:', form);
    router.push('/components/Home');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={registerStyles.container}
    >
      <ScrollView contentContainerStyle={registerStyles.scroll}>
        <Text style={registerStyles.heading}>Register</Text>

        <TextInput
          style={registerStyles.input}
          placeholder="Name"
          placeholderTextColor="#888"
          value={form.name}
          onChangeText={(text) => handleChange('name', text)}
        />

        <TextInput
          style={registerStyles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
          value={form.email}
          onChangeText={(text) => handleChange('email', text)}
        />

        <TextInput
          style={registerStyles.input}
          placeholder="Mobile Number"
          placeholderTextColor="#888"
          keyboardType="phone-pad"
          maxLength={10}
          value={form.mobile}
          onChangeText={(text) => handleChange('mobile', text)}
        />

<TouchableOpacity
  style={registerStyles.dateInput}
  onPress={() => setShowDatePicker(true)}
  activeOpacity={0.8}
>
  <Ionicons name="calendar-outline" size={20} color="#888" style={{ marginRight: 10 }} />
  <Text style={{ color: form.dob ? '#000' : '#888' }}>
    {form.dob ? form.dob.toDateString() : 'Choose Date of Birth'}
  </Text>
</TouchableOpacity>



{showDatePicker && (
  <DateTimePicker
    value={form.dob || new Date()} // Fallback to current date if null
    mode="date"
    display="default"
    maximumDate={new Date()}
    onChange={(event, selectedDate) => {
      setShowDatePicker(false);
      if (selectedDate) handleChange('dob', selectedDate);
    }}
  />
)}

        <TextInput
          style={[registerStyles.input, {textAlignVertical: 'top' }]}
          placeholder="Current Address"
          placeholderTextColor="#888"
          multiline
          numberOfLines={4}
          value={form.address}
          onChangeText={(text) => handleChange('address', text)}
        />

        <TouchableOpacity style={registerStyles.button} onPress={handleRegister}>
          <Text style={registerStyles.buttonText}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
