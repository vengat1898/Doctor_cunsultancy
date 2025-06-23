import React, { useState } from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  Modal,
  Animated,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { homeStyles, drawerStyles } from './styles/homeStyles';

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

const { width } = Dimensions.get('window');

export default function Home() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [slideAnim] = useState(new Animated.Value(-width * 0.8));

  const categoryData = [
    { name: 'Doctor', image: doctor, topColor: '#FDF5E0' },
    { name: 'Pharmacy', image: pharmacy, topColor: '#FDEFE6' },
    { name: 'Lab Test', image: labtest, topColor: '#FFFBD6' },
  ];

  const drawerItems = [
    { name: 'Home', icon: 'home-outline', route: '/home' },
    { name: 'My Enquiry', icon: 'document-text-outline', route: '/enquiry' },
    { name: 'Terms and Conditions', icon: 'document-outline', route: '/terms' },
    { name: 'Doctor', icon: 'medical-outline', route: '/components/FindDoctor' },
    { name: 'Pharmacy', icon: 'medical-outline', route: '/components/Pharmacy' },
    { name: 'Lab Test', icon: 'flask-outline', route: '/components/LabTest' },
    { name: 'Notifications', icon: 'notifications-outline', route: '/notifications' },
    { name: 'Logout', icon: 'log-out-outline', route: '/logout' },
  ];

  const openDrawer = () => {
    setIsDrawerOpen(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(slideAnim, {
      toValue: -width * 0.8,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsDrawerOpen(false);
    });
  };

  const handleDrawerItemPress = (item) => {
    if (item.name === 'Logout') {
      // Handle logout logic here
      console.log('Logout pressed');
    } else if (item.route) {
      router.push(item.route);
    }
    closeDrawer();
  };

  const handleCategoryPress = (item) => {
    if (item.name === 'Doctor') {
      router.push('/components/FindDoctor');
    } else if (item.name === 'Lab Test') {
      router.push('/components/LabTest');
    } else if (item.name === 'Pharmacy') {
      router.push('/components/Pharmacy');
    } else {
      console.log(item.name);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#C1FAFE' }}>
      <LinearGradient colors={['#C1FAFE', '#ffffff']} style={homeStyles.container}>
        {/* Header */}
        <View style={homeStyles.header}>
          <View style={homeStyles.userInfo}>
            <Text style={homeStyles.userName}>Harish Guest</Text>
            <Text style={homeStyles.userLocation}>Chennai 600117</Text>
          </View>

          <View style={homeStyles.rightIcons}>
            <TouchableOpacity style={homeStyles.iconContainer}>
              <Ionicons name="notifications-outline" size={24} color="#333" />
              <View style={homeStyles.badge}>
                <Text style={homeStyles.badgeText}>3</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={openDrawer}>
              <Image
                source={require('../../assets/images/login2.jpg')}
                style={homeStyles.profileImage}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search */}
        <View style={homeStyles.searchBox}>
          <Ionicons name="search" size={20} color="#888" style={homeStyles.searchIcon} />
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#888"
            style={homeStyles.searchInput}
          />
        </View>

        {/* Scrollable Content */}
        <ScrollView contentContainerStyle={homeStyles.scrollContainer} showsVerticalScrollIndicator={false}>
          {/* Offer Banner */}
          <View style={homeStyles.offerBanner}>
            <Text style={homeStyles.offerText}>
              <Text style={homeStyles.bold}>Up to 10% </Text>
              Offer For Doctor Consulting
            </Text>
          </View>

          {/* Categories Section */}
          <View style={homeStyles.categoriesSection}>
            <Text style={homeStyles.sectionHeading}>OUR CATEGORIES</Text>
            <View style={homeStyles.categoriesContainer}>
              {categoryData.map((item, index) => (
                <View style={homeStyles.categoryItem} key={index}>
                  <TouchableOpacity
                    style={homeStyles.categoryBox}
                    onPress={() => handleCategoryPress(item)}
                  >
                    <View style={[homeStyles.halfBoxTop, { backgroundColor: item.topColor }]} />
                    <View style={homeStyles.halfBoxBottom} />
                    <Image source={item.image} style={homeStyles.categoryImageOnBox} />
                  </TouchableOpacity>
                  <Text style={homeStyles.categoryLabel}>{item.name}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Doctor Banner */}
          <TouchableOpacity style={homeStyles.bannerWrapper} onPress={() => console.log('Doctor banner pressed')}>
            <Image source={doctorbanner} style={homeStyles.bannerImage} resizeMode="cover" />
          </TouchableOpacity>

          {/* Popular Doctor Section */}
          <View style={homeStyles.popularDoctorSection}>
            <Image source={populardoctorbg} style={homeStyles.popularDoctorBackground} resizeMode="cover" />
            <View style={homeStyles.popularDoctorOverlay}>
              <Text style={homeStyles.popularDoctorHeading}>Popular Doctor</Text>
              <View style={homeStyles.popularDoctorList}>
                {[
                  { image: populardoctor1, name: 'Dr. Meera' },
                  { image: populardoctor2, name: 'Dr. Rajiv' },
                  { image: populardoctor3, name: 'Dr. Latha' },
                ].map((doc, index) => (
                  <TouchableOpacity key={index} style={homeStyles.popularDoctorCard} onPress={() => router.push('/components/FindDoctorBySpeciality')}>
                    <Image source={doc.image} style={homeStyles.popularDoctorImage} />
                    <Text style={homeStyles.popularDoctorName}>{doc.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          {/* Popular Lab Tests */}
          <View style={homeStyles.labTestSection}>
            <Text style={homeStyles.labTestHeading}>Popular Lab Tests</Text>
            <View style={homeStyles.labTestGrid}>
              {[
                { name: 'Diabeties', image: diabeties },
                { name: 'COVID Test', image: covidtest },
                { name: 'Dengue Test', image: Dengutest },
                { name: 'Diabeties', image: diabeties },
                { name: 'COVID Test', image: covidtest },
                { name: 'Dengue Test', image: Dengutest },
              ].map((test, index) => (
                <TouchableOpacity key={index} style={homeStyles.labTestCard} onPress={() => router.push('/components/LabTest')}>
                  <View style={homeStyles.labTestImageWrapper}>
                    <Image source={test.image} style={homeStyles.labTestImage} resizeMode="contain" />
                  </View>
                  <Text style={homeStyles.labTestName}>{test.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </LinearGradient>

      {/* Footer Nav */}
      <View style={[homeStyles.footerNav, { paddingBottom: insets.bottom || 16 }]}>
        <TouchableOpacity style={homeStyles.footerItem}>
          <Ionicons name="home-outline" size={22} color="#116C89" />
          <Text style={homeStyles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.footerItem}>
          <Ionicons name="document-text-outline" size={22} color="#888" />
          <Text style={homeStyles.footerText}>My Enquiry</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.footerItem}>
          <Ionicons name="help-circle-outline" size={22} color="#888" />
          <Text style={homeStyles.footerText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.footerItem}>
          <Ionicons name="gift-outline" size={22} color="#888" />
          <Text style={homeStyles.footerText}>Refer</Text>
        </TouchableOpacity>
      </View>

      {/* Drawer Modal */}
      <Modal
        animationType="none"
        transparent={true}
        visible={isDrawerOpen}
        onRequestClose={closeDrawer}
      >
        <View style={drawerStyles.modalOverlay}>
          <TouchableOpacity
            style={drawerStyles.backdrop}
            activeOpacity={1}
            onPress={closeDrawer}
          />
          <Animated.View
            style={[
              drawerStyles.drawer,
              {
                transform: [{ translateX: slideAnim }],
              },
            ]}
          >
            <SafeAreaView style={drawerStyles.drawerContent}>
              {/* Drawer Header */}
              <View style={drawerStyles.drawerHeader}>
                <Image
                  source={require('../../assets/images/login2.jpg')}
                  style={drawerStyles.drawerProfileImage}
                />
                <View style={drawerStyles.drawerUserInfo}>
                  <Text style={drawerStyles.drawerUserName}>Guest</Text>
                  <Text style={drawerStyles.drawerUserEmail}>Guest@example.com</Text>
                </View>
                <TouchableOpacity onPress={closeDrawer} style={drawerStyles.closeButton}>
                  <Ionicons name="close" size={24} color="#333" />
                </TouchableOpacity>
              </View>

              {/* Drawer Items */}
              <ScrollView style={drawerStyles.drawerItems}>
                {drawerItems.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      drawerStyles.drawerItem,
                      item.name === 'Logout' && drawerStyles.logoutItem
                    ]}
                    onPress={() => handleDrawerItemPress(item)}
                  >
                    <Ionicons
                      name={item.icon}
                      size={20}
                      color={item.name === 'Logout' ? '#ff3b30' : '#116C89'}
                      style={drawerStyles.drawerItemIcon}
                    />
                    <Text
                      style={[
                        drawerStyles.drawerItemText,
                        item.name === 'Logout' && drawerStyles.logoutText
                      ]}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </SafeAreaView>
          </Animated.View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}




