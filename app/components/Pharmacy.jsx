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

const labList = [
  {
    id: 1,
    name: 'Apollo',
    experience: '15 YEARS',
    distance: '7 Km · Chennai',
    address: 'Nanganallur, Chennai.',
    note: 'Reports within 10hrs',
    image: labImage,
  },
  {
    id: 2,
    name: 'pharmacy',
    experience: '10 YEARS',
    distance: '5 Km · Chennai',
    address: 'Velachery, Chennai.',
    note: 'Reports within 12hrs',
    image: labImage,
  },
  {
    id: 3,
    name: 'MedPlus',
    experience: '8 YEARS',
    distance: '3.5 Km · Chennai',
    address: 'Guindy, Chennai.',
    note: 'Same-day reports',
    image: labImage,
  },
];

export default function Pharmacy() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [selectedMedicineLabs, setSelectedMedicineLabs] = useState([]);
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
    setSelectedMedicine(medicine);
    setSelectedMedicineLabs(labList); // Simulated data
    setFilteredMedicines([]);
    setQuery('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#116C89" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
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

      {/* Selected Medicine Cards */}
      <ScrollView style={{ padding: 16 }}>
        {selectedMedicine && selectedMedicineLabs.map((lab, index) => (
          <View key={index} style={styles.labCard}>
            <View style={styles.labInfoRow}>
              <Image source={lab.image} style={styles.labImage} />
              <View style={styles.labDetails}>
                <Text style={styles.selectedMedicine}>
                  Medicine: {selectedMedicine}
                </Text>
                <Text style={styles.labTitle}>{lab.name}</Text>
                <Text style={styles.labExperience}>{lab.experience}</Text>
                <Text style={styles.labLocation}>{lab.distance}</Text>
                <Text style={styles.labLocation}>{lab.address}</Text>
                <Text style={styles.labNote}>{lab.note}</Text>
              </View>
            </View>

            <View style={styles.labButtonRow}>
              <TouchableOpacity style={styles.labButton}>
                <Ionicons name="call" size={16} color="#fff" />
                <Text style={styles.labButtonText}>Call</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.labButton}onPress={() => router.push('/components/Enquiry')}>
                <Ionicons name="help-circle-outline" size={16} color="#fff" />
                <Text style={styles.labButtonText}>Enquiry Now</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.labButton}>
                <Ionicons name="logo-whatsapp" size={16} color="#fff" />
                <Text style={styles.labButtonText}>Whatsapp</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}





