import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(24,24,24,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#fff',
    width: '85%',
    alignItems: 'center',
    justifyContent: 'cneter',
    borderRadius: 8,
    paddingBottom: 24,
    paddingTop: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 24
  },
  password: {
    backgroundColor: '#030303',
    width: '90%',
    alignItems: 'center',
    padding: 14,
    borderRadius: 8,
  },
  passwordText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  buttonArea: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 14,
    marginTop: 14,
    padding: 8
  },
  buttonSave: {
    backgroundColor: '#392de9',
    borderRadius: 8
  },
  textSalvar: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
