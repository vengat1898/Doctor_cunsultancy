import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles/pharmacyStyles';
import medicineIcon from '../../assets/images/pharmacyy.png';

const availableMedicines = [
  {
    name: 'Paracetamol',
    dosage: '500mg',
    price: '₹20 / strip',
    availability: 'In Stock',
  },
  {
    name: 'Dolo 650',
    dosage: '650mg',
    price: '₹30 / strip',
    availability: 'In Stock',
  },
  {
    name: 'Ibuprofen',
    dosage: '400mg',
    price: '₹25 / strip',
    availability: 'Limited Stock',
  },
  {
    name: 'Aspirin',
    dosage: '75mg',
    price: '₹18 / strip',
    availability: 'Out of Stock',
  },
];

export default function PharmacyDetails() {
  const router = useRouter();
  const { pharmacyName } = useLocalSearchParams();
  const [query, setQuery] = useState('');
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  const filtered = availableMedicines.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelectMedicine = (medicine) => {
    setSelectedMedicine(medicine);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#116C89" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>

        <View style={{ flex: 1 }}>
          <Text style={[styles.headerTitle, { textAlign: 'center' }]}>Pharmacy Near You</Text>
          <Text style={{ fontSize: 18, color: '#fff', textAlign: 'center',fontWeight: 'bold', }}>
            {pharmacyName}
          </Text>
        </View>

        <View style={styles.rightIcons} />
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
            onChangeText={(text) => {
              setQuery(text);
              setSelectedMedicine(null);
            }}
          />
        </View>
      </View>

      <ScrollView style={{ padding: 16 }}>
        {selectedMedicine ? (
          <View style={styles.labCard}>
            <View style={styles.labInfoRow}>
              <Image source={medicineIcon} style={styles.labImage} />
              <View style={styles.labDetails}>
                <Text style={styles.labTitle}>{selectedMedicine.name}</Text>
                <Text style={styles.labNote}>Dosage: {selectedMedicine.dosage}</Text>
                <Text style={styles.labNote}>Price: {selectedMedicine.price}</Text>
                <Text style={styles.labNote}>Availability: {selectedMedicine.availability}</Text>
              </View>
            </View>

            <View style={styles.labButtonRow}>
              <TouchableOpacity style={styles.labButton}>
                <Ionicons name="call" size={16} color="#fff" />
                <Text style={styles.labButtonText}>Call</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.labButton}
                onPress={() => router.push('/components/Enquiry')}
              >
                <Ionicons name="help-circle-outline" size={16} color="#fff" />
                <Text style={styles.labButtonText}>Enquiry</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.labButton}>
                <Ionicons name="logo-whatsapp" size={16} color="#fff" />
                <Text style={styles.labButtonText}>Whatsapp</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          filtered.map((medicine, index) => (
            <TouchableOpacity
              key={index}
              style={styles.labCard}
              onPress={() => handleSelectMedicine(medicine)}
            >
              <View style={styles.labInfoRow}>
                <Image source={medicineIcon} style={styles.labImage} />
                <View style={styles.labDetails}>
                  <Text style={styles.labTitle}>{medicine.name}</Text>
                  <Text style={styles.labNote}>Dosage: {medicine.dosage}</Text>
                  <Text style={styles.labNote}>Price: {medicine.price}</Text>
                  <Text style={styles.labNote}>Availability: {medicine.availability}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
