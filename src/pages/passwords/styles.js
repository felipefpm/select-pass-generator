import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    backgroundColor: '#392de9',
    paddingTop: 58,
    paddingBottom: 14,
    paddingRight: 14,
    paddingLeft: 14,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  passwordContent: {
    flexDirection: 'row',
  },
  password: {
    flex: 2,
    marginRight: 6,
    backgroundColor: '#030303',
    padding: 14,
    borderRadius: 8,
    marginBottom: 14
  },
  passwordText: {
    color: '#fff',
  },
  deleteIcon: {
    backgroundColor: '#fff',
    paddingHorizontal: 6,
    paddingTop: '3%',
    marginBottom: '4%',
    borderWidth: 1,
    borderColor: '#fff',
    elevation: 1,
    borderRadius: 8
  }
});
