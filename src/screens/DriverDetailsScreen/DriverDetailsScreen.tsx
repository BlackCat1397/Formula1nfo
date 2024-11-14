import React, { useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


import { styles } from '../styles';
import { useRaces } from '../../hooks';
import { Pagination } from '../../components';

type DriverDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'DriverDetails'>;

export default function DriverDetailsScreen({
  route,
}: DriverDetailsScreenProps) {
  const driver = route.params.driver;

  const [page, setPage] = useState(0);

  const rowsPerPage = 10;

  const { races, isLoading, isError, total, retry } = useRaces(driver.driverId, page, rowsPerPage);

  const totalPages = Math.ceil(total / rowsPerPage);

  return (
    <View style={styles.container}>
      <View style={styles.table}>
        {!isError && <View style={styles.headerRow}>
          <Text style={[styles.headerCell, styles.seasonHeaderCell]}>Season</Text>
          <Text style={[styles.headerCell, styles.raceNameCell]}>Race Name</Text>
          <Text style={[styles.headerCell, styles.circuitCell]}>Circuit</Text>
          <Text style={[styles.headerCell, styles.resultCell]}>Result</Text>
        </View>}

        { isLoading ? (
          <ActivityIndicator style={styles.loader} size="large" />
        ) : isError ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>Oups, somegthing went wrong...</Text>
            <TouchableOpacity style={styles.button} onPress={retry}>
              <Text>Retry</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <ScrollView>
            { races.map(race => (
              <View
                key={`${race.date}${race.raceName}${race.round}`}
                style={styles.row}
              >
                <Text style={styles.cell}>{race.season}</Text>
                <Text style={[styles.cell, styles.raceNameCell]}>{race.raceName} Round {race.round}</Text>

                <Text adjustsFontSizeToFit style={[styles.cell, styles.circuitCell]}>{race.Circuit.Location.country} - {race.Circuit.Location.locality} - {race.Circuit.circuitName}</Text>
                <View style={styles.resultCell}>
                  <Text style={styles.cell}>Pos: {race.Results[0].positionText}</Text>
                  <Text style={styles.cell}>Pts: {race.Results[0].points}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        )}
      </View>

      <Pagination
        page={page}
        totalPages={totalPages}
        isDisabled={isLoading}
        onPrevPagePress={() => setPage(p => p + 1)}
        onNextPagePress={() => setPage(p => p - 1)}
      />
    </View>
  );
}
