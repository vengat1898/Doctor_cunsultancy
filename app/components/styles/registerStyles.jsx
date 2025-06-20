import { StyleSheet } from 'react-native';

const registerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    padding: 24,
    paddingTop: 100,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#116C89',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
   
  },
  dateInput: {
  height: 50,
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 10,
  paddingHorizontal: 15,
  fontSize: 16,
  marginBottom: 20,
  backgroundColor: '#f9f9f9',
  flexDirection: 'row',
  alignItems: 'center',
},

  button: {
    backgroundColor: '#116C89',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default registerStyles;
