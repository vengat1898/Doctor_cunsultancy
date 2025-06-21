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
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles/categoryTestStyles';

import populardoctor1 from '../../assets/images/populardoctor1.png';

export default function CategoryTest() {
  const router = useRouter();
  const { category } = useLocalSearchParams();

  const labList = [
    {
      id: 1,
      name: 'Apollo Diagnostics',
      experience: '15 YEARS',
      distance: '7 Km',
      location: 'Chennai',
      address: 'Nanganallur, Chennai.',
      reportTime: 'Reports within 10hrs',
      image: populardoctor1,
    },
    {
      id: 2,
      name: 'Apollo Diagnostics',
      experience: '15 YEARS',
      distance: '7 Km',
      location: 'Chennai',
      address: 'Nanganallur, Chennai.',
      reportTime: 'Reports within 10hrs',
      image: populardoctor1,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#116C89" />

      {/* Header */}
      <LinearGradient colors={['#116C89', '#1FB5C7']} style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>

          <View style={styles.userInfo}>
            <Text style={styles.userName}>{category || 'Category Test'}</Text>
            <Text style={styles.userLocation}>Chennai 600117</Text>
          </View>

          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={22} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileButton}>
              <Image source={populardoctor1} style={styles.profileImage} />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

      {/* Search & Filter */}
      <View style={styles.searchFilterWrapper}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#888" />
          <TextInput
            placeholder="Search Lab Test"
            placeholderTextColor="#888"
            style={styles.searchInput}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filterScroll}
        >
          {[
            'Sort by',
            'Filter',
            'More than 5 years exp.',
            'Within 5 Km',
            'Within 15 Km',
          ].map((filter, index) => (
            <TouchableOpacity key={index} style={styles.filterBox}>
              <Text style={styles.filterText}>{filter}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Lab List */}
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        {labList.map((lab) => (
          <TouchableOpacity
            key={lab.id}
            style={styles.labCard}
            onPress={() => router.push('/components/LabProfile')}
            activeOpacity={0.8}
          >
            <View style={styles.labInfo}>
              <Image source={lab.image} style={styles.labImage} />
              <View style={styles.labDetails}>
                <Text style={styles.labName}>{lab.name}</Text>
                <Text style={styles.labExp}>{lab.experience}</Text>
                <Text style={styles.labMeta}>
                  {lab.distance} . {lab.location}
                </Text>
                <Text style={styles.labAddress}>{lab.address}</Text>
                <Text style={styles.labReport}>{lab.reportTime}</Text>
              </View>
            </View>

            <View style={styles.labActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="call" size={15} color="#fff" />
                <Text style={styles.actionText}>Call</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="chatbubble-ellipses-outline" size={15} color="#fff" />
                <Text style={styles.actionText}>Enquiry</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="logo-whatsapp" size={15} color="#fff" />
                <Text style={styles.actionText}>WhatsApp</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}




