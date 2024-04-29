import { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard'
import useStorage from '../../hooks/useStora';

import { styles } from './styles'

const charset = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%&*-+='

export default function ModalPassword({password, handleClose}) {
  const [passwordValue, setPasswordValue] = useState('')
  const {saveItem} = useStorage()

  async function handleCopyPassword() {
    await Clipboard.setStringAsync(password)

    alert("Senha copiada com sucesso!")

    handleClose()
  }

  async function handleSavePassword() {
    await saveItem("@pass", password)

    alert("Senha salva com sucesso!")
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Senha gerada
        </Text>

        <Pressable onLongPress={handleCopyPassword} style={styles.password}>
          <Text style={styles.passwordText}>
            {password}
          </Text>
        </Pressable>

        <View style={styles.buttonArea}>
          <TouchableOpacity onPress={handleClose} style={styles.button}>
            <Text style={styles.textVoltar}>
              Voltar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSavePassword} style={[styles.button, styles.buttonSave]}>
            <Text style={styles.textSalvar}>
              Salvar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}