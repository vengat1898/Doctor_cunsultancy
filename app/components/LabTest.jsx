import React from 'react';
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
import styles from './styles/labTestStyles';

import profileImage from '../../assets/images/populardoctor1.png';
import FemaleFertility from '../../assets/images/FemaleFertility.png';
import MaleFertility from '../../assets/images/MaleFertility.png';
import Dengutest from '../../assets/images/Dengutest.png';
import covidtest from '../../assets/images/covidtest.png';

export default function LabTest() {
  const router = useRouter();
  const notificationCount = 2;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#116C89" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>

        <View style={styles.userInfo}>
          <Text style={styles.userName}>Harish Guest</Text>
          <View style={styles.locationRow}>
            <Text style={styles.userLocation}>Chennai 600117</Text>
            <Ionicons name="chevron-down" size={14} color="#fff" />
          </View>
        </View>

        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={22} color="#fff" />
            {notificationCount > 0 && (
              <View style={styles.notificationBadge}>
                <Text style={styles.badgeText}>{notificationCount}</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileButton}>
            <Image source={profileImage} style={styles.profileImage} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#888" style={{ marginRight: 6 }} />
          <TextInput
            placeholder="Search lab test"
            placeholderTextColor="#888"
            style={styles.searchInput}
          />
        </View>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.testContainer} contentContainerStyle={{ paddingBottom: 30 }}>
        {/* Essential Fever */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Essential Fever</Text>
            <TouchableOpacity onPress={() => router.push('/components/CategoryTest')}>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              { label: 'Female Fertility', icon: FemaleFertility },
              { label: 'Male Fertility', icon: MaleFertility },
              { label: 'COVID Test', icon: covidtest },
              { label: 'Dengue Test', icon: Dengutest },
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.categoryBox}
                onPress={() => router.push('/components/CategoryTest')}
              >
                <Image source={item.icon} style={styles.categoryIcon} />
                <Text style={styles.categoryLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Vitamin Tests */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vitamin Tests</Text>
          <View style={styles.labTestGrid}>
            {[
              {
                name: 'Vitamin D & B12',
                bubbles: ['B12', 'D'],
                colors: ['#F44336', '#FFC107'],
              },
              {
                name: 'Complete Vitamin Check',
                bubbles: ['VIT'],
                colors: ['#FF9800'],
              },
              {
                name: 'Nutrition Checkups',
                bubbles: ['Mg', 'Bg'],
                colors: ['#E91E63', '#FF5722', '#4CAF50', '#FFEB3B'],
              },
            ].map((test, index) => (
              <TouchableOpacity
                key={index}
                style={styles.labTestCard}
                onPress={() => router.push({ pathname: '/components/CategoryTest', params: { category: 'Covid Test' } })}
              >
                <View style={styles.labTestImageWrapper}>
                  {test.bubbles.map((label, i) => (
                    <Text
                      key={i}
                      style={[
                        styles.vitaminBubble,
                        { backgroundColor: test.colors[i] || '#F44336' },
                      ]}
                    >
                      {label}
                    </Text>
                  ))}
                </View>
                <Text style={styles.labTestName}>{test.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}




