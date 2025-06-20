import { StyleSheet, Dimensions } from 'react-native';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const otpStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  carouselContainer: {
    height: screenHeight * 0.5,
  },
  imageWrapper: {
    width: screenWidth,
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  whiteShadow: {
    position: 'absolute',
    bottom: 0,
    height: 80,
    width: '100%',
  },
  dotsWrapper: {
    position: 'absolute',
    bottom: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    height: 8,
    width: 8,
    backgroundColor: '#116C89',
    borderRadius: 4,
    marginHorizontal: 5,
  },
  formContainer: {
    paddingHorizontal: 24,
    paddingTop: 30,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#116C89',
    textAlign: 'center',
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  otpBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 24,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#116C89',
    paddingVertical: 14,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  resendText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },
  resendLink: {
    color: '#116C89',
    fontWeight: '600',
  },
});

export default otpStyles;

