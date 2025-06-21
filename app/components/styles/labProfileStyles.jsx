import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    backgroundColor: '#116C89',
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  contentContainer: {
    padding: 12,
    paddingBottom: 90,
  },
  profileSection: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  profileImage: {
    width: 70,
    height: 90,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  profileInfo: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  experience: {
    fontSize: 11,
    color: '#444',
    marginTop: 1,
  },
  highlight: {
    color: '#116C89',
    fontWeight: '600',
  },
  location: {
    fontSize: 11,
    color: '#555',
    marginTop: 1,
  },
  hospital: {
    fontSize: 11,
    color: '#555',
    marginTop: 1,
  },
  languages: {
    fontSize: 11,
    color: '#777',
    marginTop: 1,
  },

  tabs: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexWrap: 'wrap',
  },
  tabButton: {
    paddingVertical: 8,
    marginRight: 16,
    marginBottom: 6,
  },
  tabButtonActive: {
    borderBottomWidth: 2,
    borderColor: '#116C89',
  },
  tabText: {
    fontSize: 10,
    color: '#666',
  },
  tabTextActive: {
    fontWeight: 'bold',
    color: '#116C89',
  },

  tabContent: {
    paddingTop: 10,
  },
  paragraph: {
    fontSize: 12,
    color: '#444',
    lineHeight: 18,
  },

  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerButton: {
    flex: 1,
    backgroundColor: '#116C89',
    marginHorizontal: 4,
    paddingVertical: 8,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 11,
    marginLeft: 5,
  },
});

export default styles;
