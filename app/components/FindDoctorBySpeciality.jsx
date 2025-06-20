import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles/findDoctorBySpecialityStyles';
import populardoctor1 from '../../assets/images/populardoctor1.png';

export default function FindDoctorBySpeciality() {
  const router = useRouter();
  const { speciality } = useLocalSearchParams();

  // Dummy doctor list
  const doctorList = [
    {
      id: 1,
      name: 'Dr. Vetrivel Muthu',
      speciality: 'Diabetology',
      experience: '15 YEARS',
      qualification: 'MBBS, MRCGP, DIP (Diabetes)',
      distance: '7 Km',
      location: 'Chennai',
      hospital: 'Vetrivel muthu Hospital, Chennai',
      fees: '₹500',
      image: populardoctor1,
    },
    {
      id: 2,
      name: 'Dr. Anjali Rao',
      speciality: 'Cardiologist',
      experience: '10 YEARS',
      qualification: 'MBBS, MD (Cardio)',
      distance: '5 Km',
      location: 'Chennai',
      hospital: 'Heart Care Clinic',
      fees: '₹600',
      image: populardoctor1,
    },
    {
      id: 3,
      name: 'Dr. Karthik Kumar',
      speciality: 'Neurologist',
      experience: '12 YEARS',
      qualification: 'MBBS, DM (Neuro)',
      distance: '6 Km',
      location: 'Chennai',
      hospital: 'Neuro Life Hospital',
      fees: '₹700',
      image: populardoctor1,
    },
    {
      id: 4,
      name: 'Dr. Priya Mehta',
      speciality: 'Dermatologist',
      experience: '8 YEARS',
      qualification: 'MBBS, DDVL',
      distance: '3 Km',
      location: 'Chennai',
      hospital: 'Skin Glow Clinic',
      fees: '₹400',
      image: populardoctor1,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#116C89" />

      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>
              {speciality ? `Find ${speciality} Doctors` : 'Speciality'}
            </Text>
          </View>
          <View style={{ width: 28 }} />
        </View>

        {/* Search Input */}
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#888" style={{ marginRight: 6 }} />
          <TextInput
            placeholder="Search doctor"
            placeholderTextColor="#888"
            style={styles.searchInput}
          />
        </View>
      </View>

      {/* Filter Options */}
      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[
            { label: 'Sort by', icon: true },
            { label: 'Filter', icon: true },
            { label: 'More than 5 years exp.' },
            { label: 'Within 5 Km' },
            { label: 'Within 15 Km' },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.filterBox}>
              <Text style={styles.filterText}>
                {item.label}
                {item.icon && ' \u25BE'}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Doctor Cards */}
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        {doctorList.map((doctor) => (
          <TouchableOpacity
            key={doctor.id}
            style={styles.doctorCard}
            activeOpacity={0.8}
            onPress={() => router.push('/components/DoctorDetils')}
          >
            <View style={styles.onlineStrip}>
              <Text style={styles.onlineText}>Also available for online consultant</Text>
            </View>

            <View style={styles.doctorInfoCard}>
              <View style={styles.imageContainer}>
                <Image source={doctor.image} style={styles.doctorImage} />
              </View>

              <View style={{ flex: 1, paddingLeft: 10 }}>
                <Text style={styles.doctorName}>{doctor.name}</Text>
                <Text style={styles.speciality}>{doctor.speciality}</Text>
                <Text style={styles.expText}>
                  <Text style={styles.years}>{doctor.experience}</Text> . {doctor.qualification}
                </Text>
                <Text style={styles.location}>{doctor.distance} . {doctor.location}</Text>
                <Text style={styles.hospital}>{doctor.hospital}</Text>

                <View style={styles.priceRow}>
                  <Text style={styles.price}>{doctor.fees}</Text>
                  <Text style={styles.noFees}>No booking fees</Text>
                </View>
              </View>
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="call" size={15} color="#fff" />
                <Text style={styles.actionText}>Call</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="chatbubble-ellipses" size={15} color="#fff" />
                <Text style={styles.actionText}>Enquiry Now</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="logo-whatsapp" size={15} color="#fff" />
                <Text style={styles.actionText}>Whatsapp</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}





