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
import styles from './styles/doctorDetailsStyles';
import populardoctor1 from '../../assets/images/populardoctor1.png';

export default function DoctorDetails() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('About Doctor');

  const tabs = ['About Doctor', 'Education & Work Experience', 'Appointment schedule'];

  const renderContent = () => {
    const contentText = `Dr. Vetrivel Muthu is a highly respected diabetologist, known for his deep expertise in diagnosing and managing all types of diabetes, including Type 1, Type 2, and gestational diabetes. With years of experience in the field of internal medicine and metabolic health, Dr. Vetrivel is committed to helping patients lead healthy, balanced lives through personalized diabetes care.\n\n`;
    return (
      <Text style={styles.paragraph}>
        {contentText + contentText + contentText}
      </Text>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#116C89" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Doctor Details</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Doctor Profile Section */}
        <View style={styles.profileSection}>
          <Image source={populardoctor1} style={styles.profileImage} />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Dr. Vetrivel Muthu</Text>
            <Text style={styles.speciality}>Diabetology</Text>
            <Text style={styles.experience}>
              <Text style={styles.highlight}>15 YEARS</Text> . MBBS, MRCGP, DIP (Diabetes)
            </Text>
            <Text style={styles.location}>7 Km . Chennai</Text>
            <Text style={styles.hospital}>Vetrivel muthu Hospital, Chennai</Text>
            <Text style={styles.languages}>Tamil, English, Hindi</Text>
            <View style={styles.feesRow}>
              <Text style={styles.fees}>₹500</Text>
              <Text style={styles.noFees}>No booking fees</Text>
            </View>
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
        <TouchableOpacity style={styles.footerButton}onPress={() => router.push('/components/Enquiry')}>
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

