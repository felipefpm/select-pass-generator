import { useState, useEffect } from 'react';
import { Text, View, FlatList, Pressable, TouchableOpacity } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Clipboard from 'expo-clipboard'
import { FontAwesome } from '@expo/vector-icons';
import useStorage from '../../hooks/useStora';

import { styles } from './styles'

export function Passwords() {
  const [listPassword, setListPassword] = useState([])
  const focused = useIsFocused()
  const { getItem, removeItem } = useStorage()

  useEffect(() => {

    async function loadPassword() {
      const passwords = await getItem("@pass")

      setListPassword(passwords)
    }

    loadPassword()
  }, [focused])

  async function handleCopyPassword(password) {
    await Clipboard.setStringAsync(password)

    alert("Senha copiada com sucesso!")
  }

  async function handleDeletePassword(item) {
    const password = await removeItem("@pass", item)

    alert("Senha removida com sucesso!")

    setListPassword(password)
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas senhas</Text>
      </View>

      <View style={styles.content}>
        <FlatList 
          keyExtractor={(item) => String(item)}
          style={{
            flex: 1,
            paddingTop: 14,
          }}
          data={listPassword}
          renderItem={({item}) =>
            <View style={styles.passwordContent}>
              <Pressable onLongPress={() => handleCopyPassword(item)} style={styles.password}>
                <Text style={styles.passwordText}>{item}</Text>
              </Pressable>
              <TouchableOpacity onPress={() => handleDeletePassword(item)} style={styles.deleteIcon} activeOpacity={0.8}>
                <FontAwesome name="trash-o" size={24} color='#ff0000' />
              </TouchableOpacity>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}