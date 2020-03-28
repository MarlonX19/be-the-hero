import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Text, Image, TouchableOpacity, StatusBar } from 'react-native';

import api from '../../services/api';

import styles from './styles';

import logoImg from '../../assets/logo.png'

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  async function loadIncidents(){

    if(loading){
      return
    }

    if(total > 0 && incidents.length === total){
      return
    }
    setLoading(true);
    const response  = await api.get('/incidents', {
      params: { page }
    })
    
    setIncidents([... incidents, ... response.data])
    setTotal(response.headers['x-total-count']);
    setPage(page + 1)
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents()
  }, [])

  function navigateToDetail(incident){
    navigation.navigate('Detail', { incident })


  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>Total de {total} casos</Text>
      </View>
      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.description}>Escolha um caso e seja o herói do dia</Text>


      <FlatList
        style={styles.incidentList}
        data={incidents}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        showsVerticalScrollIndicator={true}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO: </Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>Valor </Text>
            <Text style={styles.incidentValue}>{ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>

            <TouchableOpacity
              onPress={() => navigateToDetail(incident)}
              style={styles.detailButton}
            >
              <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
