import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './styles/homeStyles';

import doctor from '../../assets/images/doctor.jpg';
import pharmacy from '../../assets/images/pharmacy.jpg';
import labtest from '../../assets/images/labtest.jpg';
import populardoctorbg from '../../assets/images/populardoctor.jpg';
import populardoctor1 from '../../assets/images/populardoctor1.png';
import populardoctor2 from '../../assets/images/doctor.jpg';
import populardoctor3 from '../../assets/images/labtest.jpg';

import diabeties from '../../assets/images/diabeties.png';
import Dengutest from '../../assets/images/Dengutest.png';
import covidtest from '../../assets/images/covidtest.png';

import doctorbanner from '../../assets/images/doctorbanner.png';
import { useRouter } from "expo-router";

export default function Home() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const categoryData = [
  { name: 'Doctor', image: doctor, topColor: '#FDF5E0' },
  { name: 'Pharmacy', image: pharmacy, topColor: '#FDEFE6' },
  { name: 'Lab Test', image: labtest, topColor: '#FFFBD6' },
];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#C1FAFE' }}>
      <LinearGradient colors={['#C1FAFE', '#ffffff']} style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Harish Guest</Text>
            <Text style={styles.userLocation}>Chennai 600117</Text>
          </View>

          <View style={styles.rightIcons}>
            <TouchableOpacity style={styles.iconContainer}>
              <Ionicons name="notifications-outline" size={24} color="#333" />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>3</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/login2.jpg')}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search */}
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#888"
            style={styles.searchInput}
          />
        </View>

        {/* Scrollable Content */}
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          {/* Offer Banner */}
          <View style={styles.offerBanner}>
            <Text style={styles.offerText}>
              <Text style={styles.bold}>Up to 10% </Text>
              Offer For Doctor Consulting
            </Text>
          </View>

         {/* Categories Section */}
<View style={styles.categoriesSection}>
  <Text style={styles.sectionHeading}>OUR CATEGORIES</Text>
  <View style={styles.categoriesContainer}>
    {categoryData.map((item, index) => (
      <View style={styles.categoryItem} key={index}>
        <TouchableOpacity
          style={styles.categoryBox}
          onPress={() => {
            if (item.name === 'Doctor') {
              router.push('/components/FindDoctor');
            } else {
              console.log(item.name);
            }
          }}
        >
          <View style={[styles.halfBoxTop, { backgroundColor: item.topColor }]} />
          <View style={styles.halfBoxBottom} />
          <Image source={item.image} style={styles.categoryImageOnBox} />
        </TouchableOpacity>
        <Text style={styles.categoryLabel}>{item.name}</Text>
      </View>
    ))}
  </View>
</View>
          {/* Doctor Banner */}
<TouchableOpacity style={styles.bannerWrapper} onPress={() => console.log('Doctor banner pressed')}>
  <Image source={doctorbanner} style={styles.bannerImage} resizeMode="cover" />
</TouchableOpacity>


          {/* Popular Doctor Section */}
          <View style={styles.popularDoctorSection}>
            <Image source={populardoctorbg} style={styles.popularDoctorBackground} resizeMode="cover" />
            <View style={styles.popularDoctorOverlay}>
              <Text style={styles.popularDoctorHeading}>Popular Doctor</Text>
              <View style={styles.popularDoctorList}>
                {[
                  { image: populardoctor1, name: 'Dr. Meera' },
                  { image: populardoctor2, name: 'Dr. Rajiv' },
                  { image: populardoctor3, name: 'Dr. Latha' },
                ].map((doc, index) => (
                  <TouchableOpacity key={index} style={styles.popularDoctorCard} onPress={() => console.log(doc.name)}>
                    <Image source={doc.image} style={styles.popularDoctorImage} />
                    <Text style={styles.popularDoctorName}>{doc.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          {/* Popular Lab Tests */}
          <View style={styles.labTestSection}>
            <Text style={styles.labTestHeading}>Popular Lab Tests</Text>
            <View style={styles.labTestGrid}>
              {[
                { name: 'Diabeties', image: diabeties },
                { name: 'COVID Test', image: covidtest },
                { name: 'Dengue Test', image: Dengutest },
                { name: 'Diabeties', image: diabeties },
                { name: 'COVID Test', image: covidtest },
                { name: 'Dengue Test', image: Dengutest },
              ].map((test, index) => (
                <TouchableOpacity key={index} style={styles.labTestCard} onPress={() => console.log(test.name)}>
                  <View style={styles.labTestImageWrapper}>
                    <Image source={test.image} style={styles.labTestImage} resizeMode="contain" />
                  </View>
                  <Text style={styles.labTestName}>{test.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </LinearGradient>

      {/* Footer Nav */}
      <View style={[styles.footerNav, { paddingBottom: insets.bottom || 16 }]}>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="home-outline" size={22} color="#116C89" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="document-text-outline" size={22} color="#888" />
          <Text style={styles.footerText}>My Enquiry</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="help-circle-outline" size={22} color="#888" />
          <Text style={styles.footerText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="gift-outline" size={22} color="#888" />
          <Text style={styles.footerText}>Refer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}




