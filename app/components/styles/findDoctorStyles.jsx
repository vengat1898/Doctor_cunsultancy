import { StyleSheet } from 'react-native';

const FindDoctorStyles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 14,
    backgroundColor: '#116C89',
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  userLocation: {
    fontSize: 11,
    color: '#e0e0e0',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 12,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -6,
    backgroundColor: '#ff3b30',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#ccc',
  },
  searchBox: {
    marginTop: 14,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 40,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  body: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  bodyText: {
    fontSize: 16,
    color: '#333',
  },
  specialityHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 12,
},
specialityTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#333',
},
viewAll: {
  fontSize: 13,
  color: '#116C89',
  fontWeight: '600',
},
grid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginBottom: 20,
},
gridItem: {
  width: '23%',
  alignItems: 'center',
  marginBottom: 26,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  padding: 6,
  backgroundColor: '#fff',
},
gridImage: {
  width: 40,
  height: 40,
  resizeMode: 'contain',
  marginBottom: 4,
},
gridLabel: {
  fontSize: 10,
  color: '#333',
  textAlign: 'center',
},

});

export default FindDoctorStyles;
