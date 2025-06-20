import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import styles from './styles/enquiryStyles';

export default function Enquiry() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    speciality: '',
    date: '',
    consultationType: '',
    time: '',
    message: '',
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    // Add validation or API call here
    console.log('Submitted:', form);
    alert('Enquiry submitted successfully!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#116C89" barStyle="light-content" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Enquiry</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.formContainer}>
        {[
          { label: 'Enter your name', key: 'name' },
          { label: 'Enter Mobile Number', key: 'mobile', keyboardType: 'numeric' },
          { label: 'Specialization', key: 'speciality' },
          { label: 'Select date', key: 'date' },
          { label: 'Consultation Type', key: 'consultationType' },
          { label: 'Select time', key: 'time' },
          { label: 'Enter your message', key: 'message', multiline: true },
        ].map((item, index) => (
          <TextInput
            key={index}
            placeholder={item.label}
            placeholderTextColor="#888"
            value={form[item.key]}
            onChangeText={(text) => handleChange(item.key, text)}
            keyboardType={item.keyboardType || 'default'}
            multiline={item.multiline || false}
            style={[
              styles.input,
              item.multiline && { height: 100, textAlignVertical: 'top' },
            ]}
          />
        ))}

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
