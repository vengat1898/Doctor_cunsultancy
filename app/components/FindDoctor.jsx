import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles/findDoctorStyles';

import GeneralPractitioner from '../../assets/images/GeneralPractitioner.png';
import Dermatology from '../../assets/images/Dermatology.png';
import Cardiology from '../../assets/images/Cardiology.png';
import Diabetology from '../../assets/images/Diabetology.png';
import Neurology from '../../assets/images/Neurology.png';
import Paediatrics from '../../assets/images/Paediatrics.png';
import Urology from '../../assets/images/Urology.png';
import ENT from '../../assets/images/ENT.png';

const specialties = [
  { name: 'General', image: GeneralPractitioner },
  { name: 'Dermatology', image: Dermatology },
  { name: 'Cardiology', image: Cardiology },
  { name: 'Diabetology', image: Diabetology },
  { name: 'Neurology', image: Neurology },
  { name: 'Paediatrics', image: Paediatrics },
  { name: 'Urology.', image: Urology },
  { name: 'ENT', image: ENT },
];

export default function FindDoctor() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#116C89' }}>
      <StatusBar barStyle="light-content" backgroundColor="#116C89" />
      <LinearGradient colors={['#116C89', '#116C89']} style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>

          <View style={styles.userInfo}>
            <Text style={styles.userName}>Harish Guest</Text>
            <Text style={styles.userLocation}>Chennai 600117</Text>
          </View>

          <View style={styles.rightIcons}>
            <TouchableOpacity style={styles.iconContainer}>
              <Ionicons name="notifications-outline" size={22} color="#fff" />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>2</Text>
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

        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#888" style={{ marginRight: 6 }} />
          <TextInput
            placeholder="Search doctors..."
            placeholderTextColor="#888"
            style={styles.searchInput}
          />
        </View>
      </LinearGradient>

      <ScrollView style={styles.body}>
        <View style={styles.specialityHeader}>
          <Text style={styles.specialityTitle}>Find a doctor by speciality</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.grid}>
          {specialties.map((item, index) => (
            <TouchableOpacity
  key={index}
  style={styles.gridItem}
  onPress={() => router.push({ pathname: '/components/FindDoctorBySpeciality', params: { speciality: item.name } })}

>
  <Image source={item.image} style={styles.gridImage} />
  <Text style={styles.gridLabel}>{item.name}</Text>
</TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

