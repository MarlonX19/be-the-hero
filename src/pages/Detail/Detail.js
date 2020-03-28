import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Image, StatusBar, Text, TouchableOpacity, Linking } from 'react-native';

import styles from './styles';

import logoImg from '../../assets/logo.png'

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();


  const incident = route.params.incident;
  const subject = 'Contato do App Hero | Ajuda'
  const description = `Olá ${incident.name}, estou interessado em ajudar!`

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    Linking.openURL(`mailto:${incident.email}?subject=${incident.title}&body=${description}`)
    title = "support@example.com"
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?text=${description}&phone=+5519999861755`)
  }


  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity
          onPress={navigateBack}
          style={styles.button}
        >
          <Text style={{ color: 'red' }}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={styles.incidentProperty}>ONG: </Text>
        <Text style={styles.incidentValue}>{incident.name}</Text>

        <Text style={styles.incidentProperty}>CASO: </Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>Valor </Text>
        <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso</Text>
        <Text style={styles.herodescription}>Entre em contato</Text>

        <View style={styles.actions}>
          <TouchableOpacity
            onPress={sendWhatsapp}
            style={styles.action}
          >
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={sendMail}
            style={styles.action}
          >
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
