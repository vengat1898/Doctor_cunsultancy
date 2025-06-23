import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  userLocation: {
    fontSize: 10,
    color: '#555',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 20,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#ff3b30',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 1,
    zIndex: 1,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 28,
    height: 28,
    borderRadius: 18,
    backgroundColor: '#ccc',
  },
  searchBox: {
    marginTop: 10,
    marginHorizontal: 16,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  offerBanner: {
    marginTop: 10,
    marginHorizontal: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  offerText: {
    fontSize: 14,
    color: '#116C89',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
    color: '#116C89',
  },
  sectionHeading: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#116C89',
  },
  categoriesSection: {
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 16,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 16,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  categoryItem: {
    alignItems: 'center',
    width: '30%',
  },
  categoryBox: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 5,
    overflow: 'hidden',
    position: 'relative',
    flexDirection: 'column',
  },
  halfBoxTop: {
    flex: 1,
  },
  halfBoxBottom: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categoryImageOnBox: {
    width: 60,
    height: 80,
    borderRadius: 30,
    position: 'absolute',
    top: '25%',
    left: '50%',
    transform: [{ translateX: -30 }],
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#fff',
    zIndex: 1,
  },
  categoryLabel: {
    marginTop: 10,
    fontSize: 10,
    fontWeight: '500',
    color: '#333',
  },
  popularDoctorSection: {
    height: 220,
    marginHorizontal: 16,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    position: 'relative',
  },
  popularDoctorBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  popularDoctorOverlay: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  popularDoctorHeading: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  popularDoctorList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  popularDoctorCard: {
    backgroundColor: '#fff',
    width: 90,
    height: 110,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    marginBottom: 20,
  },
  popularDoctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 6,
  },
  popularDoctorName: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  labTestSection: {
    paddingHorizontal: 16,
    marginBottom: 30,
  },
  labTestHeading: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 14,
    color: '#333',
  },
  labTestGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  labTestCard: {
    width: '30%',
    backgroundColor: '#FFE9E3',
    borderRadius: 100,
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 12,
    overflow: 'hidden',
    height: 130,
  },
  labTestImageWrapper: {
    width: '90%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    marginTop: 6,
  },
  labTestImage: {
    width: 30,
    height: 30,
  },
  labTestName: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#333',
  },
  scrollContainer: {
    paddingBottom: 100, // ensures space above footer
  },
  bannerWrapper: {
    marginHorizontal: 13,
    marginVertical: 16,
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 3,
    backgroundColor: '#fff',
    marginBottom: 30,
  },
  bannerImage: {
    width: '100%',
    height: 140,
    borderRadius: 5,
  },
  footerNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 10,
    color: '#116C89',
    marginTop: 2,
  },
});

export const drawerStyles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    flexDirection: 'row',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawer: {
    width: width * 0.8,
    backgroundColor: '#fff',
    elevation: 16,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  drawerContent: {
    flex: 1,
  },
  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#f8f9fa',
  },
  drawerProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  drawerUserInfo: {
    flex: 1,
  },
  drawerUserName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  drawerUserEmail: {
    fontSize: 12,
    color: '#666',
  },
  closeButton: {
    padding: 5,
  },
  drawerItems: {
    flex: 1,
    paddingTop: 10,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e0e0e0',
  },
  drawerItemIcon: {
    marginRight: 15,
    width: 20,
  },
  drawerItemText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  logoutItem: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    marginTop: 20,
  },
  logoutText: {
    color: '#ff3b30',
  },
});

// Default export for backward compatibility
export default homeStyles;



