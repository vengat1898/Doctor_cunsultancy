import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import styles from './styles/pharmacyStyles';

import pharmacy from '../../assets/images/pharmacyy.png';
import apolo from '../../assets/images/apolo.png';
import pharmacypluse from '../../assets/images/doctor.jpg';
import medpluse from '../../assets/images/doctor.jpg';
import labImage from '../../assets/images/doctor.jpg';

const medicines = [
  'Aspirin',
  'Ibuprofen',
  'Naproxen',
  'Paracetamol',
  'Zolmitriptan',
  'Dolo 650',
  'Diclofenac',
];

const pharmacyList = [
  { name: 'Apollo', image: apolo },
  { name: 'Pharmacy', image: pharmacy },
  { name: 'Pharmacy+', image: pharmacypluse },
  { name: 'MedPlus', image: medpluse },
  { name: 'Apollo', image: apolo },
  { name: 'Pharmacy', image: pharmacy },
];

export default function Pharmacy() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [filteredMedicines, setFilteredMedicines] = useState([]);

  const handleSearch = (text) => {
    setQuery(text);
    if (text.trim() === '') {
      setFilteredMedicines([]);
    } else {
      const filtered = medicines.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredMedicines(filtered);
    }
  };

  const handleSelectMedicine = (medicine) => {
    router.push({
      pathname: '/components/MedicineDetails',
      params: { medicine },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#116C89" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
 <TouchableOpacity
  onPress={() => router.push('/components/Home')}
  style={styles.backButton}
>
  <Ionicons name="arrow-back" size={22} color="#fff" />
</TouchableOpacity>


        <Text style={styles.headerTitle}>Pharmacy</Text>

        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={22} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileButton}>
            <Image source={labImage} style={styles.profileImage} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#888" style={{ marginRight: 6 }} />
          <TextInput
            placeholder="Search medicine"
            placeholderTextColor="#888"
            style={styles.searchInput}
            value={query}
            onChangeText={handleSearch}
          />
        </View>

        {filteredMedicines.length > 0 && (
          <View style={styles.searchResults}>
            {filteredMedicines.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => handleSelectMedicine(item)}>
                <Text style={styles.searchResultItem}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      {/* Pharmacy Near You */}
      <View style={{ paddingHorizontal: 16, paddingTop: 20 }}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Pharmacy Near You</Text>
          <TouchableOpacity onPress={() => alert('View All Pressed')}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pharmacyGrid}>
          {pharmacyList.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.pharmacyItem}
              onPress={() =>
                router.push({
                  pathname: '/components/PharmacyDetails',
                  params: { pharmacyName: item.name },
                })
              }
            >
              <Image source={item.image} style={styles.pharmacyImage} />
              <Text style={styles.pharmacyLabel}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}








