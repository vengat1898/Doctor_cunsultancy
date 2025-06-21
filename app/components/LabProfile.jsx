import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles/labProfileStyles';

import populardoctor1 from '../../assets/images/populardoctor1.png';

export default function LabProfile() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('About Laboratory');

  const tabs = [
    'About Laboratory',
    'Work Experience',
    'Appointment schedule',
    'Ratings',
    'Photos',
  ];

  const renderContent = () => {
    if (activeTab === 'About Laboratory') {
      return (
        <Text style={styles.paragraph}>
          Apollo Diagnostics receives mixed reviews, with positive aspects like the convenience of home sample collection, the app's ease of use, and timely reports. However, some users have reported issues with staff professionalism, billing practices, and customer service. Overall, Apollo Diagnostics is a popular choice for diagnostic services, particularly for home sample collection, but it's essential to be aware of potential downsides.{"\n\n"}
          Positive Aspects:{"\n"}
          • Convenient Home Sample Collection: Many users appreciate the ease and comfort of having samples collected at home.{"\n"}
          • Apollo 24x7 App: The app is praised for its ease of use, prompt service, and direct report access.{"\n"}
          • Accurate and Reliable Results: Apollo Diagnostics is recognized for providing accurate and reliable test results.{"\n"}
          • Affordable Prices: Some users mention the affordability of the services offered by Apollo Diagnostics.
        </Text>
      );
    }

    return <Text style={styles.paragraph}>Content for {activeTab}</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#116C89" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Lab Profile</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Lab Profile Section */}
        <View style={styles.profileSection}>
          <Image source={populardoctor1} style={styles.profileImage} />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Apollo Diagnostics</Text>
            <Text style={styles.experience}>
              <Text style={styles.highlight}>15 YEARS</Text>
            </Text>
            <Text style={styles.location}>7 Km . Chennai</Text>
            <Text style={styles.hospital}>Nanganallur, Chennai.</Text>
            <Text style={styles.languages}>Reports within 10hrs</Text>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabs}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabButton,
                activeTab === tab && styles.tabButtonActive,
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.tabTextActive,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Tab Content */}
        <View style={styles.tabContent}>{renderContent()}</View>
      </ScrollView>

      {/* Bottom Action Buttons */}
      <View style={styles.footerButtons}>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="call" size={18} color="#fff" />
          <Text style={styles.footerButtonText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => router.push('/components/Enquiry')}
        >
          <Ionicons name="chatbubble-ellipses" size={18} color="#fff" />
          <Text style={styles.footerButtonText}>Enquiry Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="logo-whatsapp" size={18} color="#fff" />
          <Text style={styles.footerButtonText}>Whatsapp</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
