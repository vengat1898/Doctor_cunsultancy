import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  header: {
    paddingTop: 10,
    paddingHorizontal: 16,
    paddingBottom: 16,

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
    color: '#fff',
    fontWeight: 'bold',
  },
  userLocation: {
    fontSize: 12,
    color: '#fff',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileButton: {
    marginLeft: 12,
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },

  searchFilterWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    marginLeft: 8,
    color: '#333',
  },
  filterScroll: {
    flexDirection: 'row',
  },
  filterBox: {
    backgroundColor: '#E0F7FA',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
    marginRight: 10,
  },
  filterText: {
    fontSize: 12,
    color: '#116C89',
    fontWeight: '500',
  },

  labCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 2,
  },
  labInfo: {
    flexDirection: 'row',
  },
  labImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  labDetails: {
    marginLeft: 10,
    flex: 1,
  },
  labName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  labExp: {
    color: '#116C89',
    fontSize: 12,
    marginTop: 2,
  },
  labMeta: {
    fontSize: 11,
    color: '#555',
    marginTop: 2,
  },
  labAddress: {
    fontSize: 11,
    color: '#555',
    marginTop: 2,
  },
  labReport: {
    fontSize: 11,
    color: '#444',
    marginTop: 2,
  },

  labActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#116C89',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  actionText: {
    color: '#fff',
    marginLeft: 6,
    fontSize: 11,
    fontWeight: '600',
  },
});

export default styles;

