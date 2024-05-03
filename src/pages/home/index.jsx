import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider'

import ModalPassword from '../../components/modal';
import Logo from '../../assets/logo.png'

import { styles } from './styles.js'

const charset = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%&*-+='

export function Home() {
  const [size, setSize] = useState(4)
  const [passwordValue, setPasswordValue] = useState('')
  const [ modalVisible, setModalVisible] = useState(false)

  function generatePassword() {
    let password = ''

    for(let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password)
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <Image 
        source={Logo}
        style={styles.logo}
      />

      <Text style={styles.caracteres}>{size} caracteres</Text>

      <View style={styles.sliderArea}>
        <Slider
         style={{height: 50}}
         minimumValue={4}
         maximumValue={12}
         maximumTrackTintColor='#ff0000'
         thumbTintColor='#392de9'
         value={size}
         onValueChange={(value) => setSize(Math.round(value))}
        />
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={generatePassword}
      >
        <Text style={styles.textButton}>Gerar senha</Text>
      </TouchableOpacity>

      
      <Modal
        visible={modalVisible}
        animationType='fade'
        transparent={true}
      >
        <ModalPassword 
          password={passwordValue}
          handleClose={() => setModalVisible(false)}
        />
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}