import React, { useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


import { styles } from '../styles';
import { useRaces } from '../../hooks';

type DriverDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'DriverDetails'>;

export default function DriverDetailsScreen({
  route,
}: DriverDetailsScreenProps) {
  const driver = route.params.driver;

  const [page, setPage] = useState(0);

  const rowsPerPage = 10;

  const { races, isLoading, isError, total, retry } = useRaces(driver.driverId, page, rowsPerPage);

  const totalPages = Math.ceil(total / rowsPerPage);

  const isPrevPageDisabled = page === 0 || isLoading;
  const isNextPageDisabled = page >= totalPages - 1 || isLoading;

  return (
    <View style={styles.container}>
      <View style={styles.table}>
        {!isError && <View style={styles.headerRow}>
          <Text style={styles.headerCell}>Season</Text>
          <Text style={styles.headerCell}>Race Name</Text>
          <Text style={styles.headerCell}>Circuit</Text>
          <Text style={styles.headerCell}>Result</Text>
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
                <Text style={[styles.cell, styles.seasonCell]}>{race.season}</Text>
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

      <View style={styles.pagination}>
        <TouchableOpacity
          onPress={() => setPage(p => p - 1)}
          disabled={isPrevPageDisabled}
          style={[
            styles.button,
            isPrevPageDisabled && styles.buttonDisabled,
          ]}
        >
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>

        <Text style={styles.pageInfo}>
          Page {page + 1} of {totalPages}
        </Text>

        <TouchableOpacity
          onPress={() => setPage(p => p + 1)}
          disabled={isNextPageDisabled}
          style={[
            styles.button,
            isNextPageDisabled && styles.buttonDisabled,
          ]}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}