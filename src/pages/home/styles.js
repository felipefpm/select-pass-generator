import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 20
  },
  caracteres: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#392de9"
  },
  sliderArea: {
    marginTop: 24,
    marginBottom: 24,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8
  },
  button: {
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },
  textButton: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  }
});
