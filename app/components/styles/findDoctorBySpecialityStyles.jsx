import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#116C89',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 14,
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
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
  filterContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#f7f7f7',
  },
  filterBox: {
    backgroundColor: '#e6f0f3',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
    marginRight: 10,
    justifyContent: 'center',
  },
  filterText: {
    fontSize: 10,
    color: '#116C89',
    fontWeight: '600',
  },

  // Doctor Card Styles (text sizes reduced)
  doctorCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  onlineStrip: {
    backgroundColor: '#E6F7FC',
    paddingVertical: 6,
    alignItems: 'center',
  },
  onlineText: {
    color: '#116C89',
    fontSize: 11, // reduced
  },
  doctorInfoCard: {
    flexDirection: 'row',
    padding: 10,
  },
  imageContainer: {
    width: 80,
    height: 100,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#eee',
  },
  doctorImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  doctorName: {
    fontSize: 14, // reduced
    fontWeight: 'bold',
    color: '#000',
  },
  speciality: {
    fontSize: 12, // reduced
    color: '#555',
    marginTop: 2,
  },
  expText: {
    fontSize: 11, // reduced
    color: '#444',
    marginTop: 2,
  },
  years: {
    color: '#116C89',
    fontWeight: '600',
  },
  location: {
    fontSize: 11, // reduced
    color: '#666',
    marginTop: 2,
  },
  hospital: {
    fontSize: 11, // reduced
    color: '#666',
    marginTop: 2,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  price: {
    fontSize: 13, // reduced
    fontWeight: 'bold',
    color: '#000',
    marginRight: 8,
  },
  noFees: {
    fontSize: 10, // reduced
    color: 'brown',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#116C89',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  actionText: {
    color: '#fff',
    marginLeft: 6,
    fontWeight: 'bold',
    fontSize: 10, // already small
  },
});

export default styles;






