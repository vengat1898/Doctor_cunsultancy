import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#116C89',
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  formContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  input: {
    height: 45,
    backgroundColor: '#f2f2f2',
    borderRadius: 6,
    paddingHorizontal: 12,
    marginBottom: 14,
    fontSize: 13,
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#116C89',
    borderRadius: 6,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
