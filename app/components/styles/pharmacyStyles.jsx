import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  header: {
    backgroundColor: '#116C89',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    marginRight: 12,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    marginLeft: -30,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginRight: 12,
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
    paddingBottom: 8,
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
  searchResults: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 6,
    marginTop: 6,
  },
  searchResultItem: {
    paddingVertical: 6,
    fontSize: 13,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    color: '#333',
  },

  labCard: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    elevation: 4,
  },
  labInfoRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  labImage: {
    width: 90,
    height: 90,
    borderRadius: 5,
    marginRight: 14,
    backgroundColor: '#eee',
  },
  labDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  labTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  labExperience: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#116C89',
    marginTop: 4,
  },
  labLocation: {
    fontSize: 12,
    color: '#444',
    marginTop: 2,
  },
  labNote: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
  labButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#116C89',
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  labButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 8,
    marginLeft: 6,
  },
  selectedMedicine: {
  fontSize: 13,
  color: '#116C89',
  fontWeight: '600',
  marginBottom: 2,
},

});

export default styles;



