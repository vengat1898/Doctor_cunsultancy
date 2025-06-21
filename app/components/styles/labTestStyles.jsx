import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#116C89',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  userLocation: {
    color: '#fff',
    fontSize: 11,
    marginRight: 3,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginRight: 12,
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -4,
    right: -6,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  profileButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#ccc',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  searchWrapper: {
    backgroundColor: '#116C89',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 10,
    height: 40,
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
    color: '#333',
  },
  testContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  section: {
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom:10,
  },
  viewAll: {
    fontSize: 12,
    color: '#116C89',
    fontWeight: '600',
  },
  categoryBox: {
    alignItems: 'center',
    marginRight: 18,
    backgroundColor: '#FFF4EF',
    borderRadius: 14,
    padding: 10,
    width: 90,
  },
  categoryIcon: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
    marginBottom: 6,
  },
  categoryLabel: {
    fontSize: 11,
    textAlign: 'center',
    color: '#444',
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
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  labTestName: {
    marginTop: 8,
    fontSize: 8,
    textAlign: 'center',
    fontWeight: '500',
    color: '#333',
  },
  vitaminBubble: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 20,
    margin: 2,
  },
});

export default styles;



