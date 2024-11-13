import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  useWindowDimensions,
} from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useHeaderHeight } from '@react-navigation/elements';

import { useDrivers } from '../../hooks/useDrivers';

import { styles } from './styles';


type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [page, setPage] = useState(0);

  const headerHeight = useHeaderHeight();
  const { height } = useWindowDimensions();
  const listHeight = height - headerHeight - styles.headerRow.height - styles.pagination.height;
  const rowsPerPage = listHeight / styles.row.height;

  const { drivers, isLoading, isError, totalDrivers, retry } = useDrivers(page, rowsPerPage);

  const totalPages = Math.ceil(totalDrivers / rowsPerPage);

  const isPrevPageDisabled = page === 0 || isLoading;
  const isNextPageDisabled = page >= totalPages - 1 || isLoading;

  return (
    <View style={styles.container}>
      <View style={styles.table}>
        {!isError && <View style={styles.headerRow}>
          <Text style={[styles.headerCell, styles.nameCell]}>Name</Text>
          <Text style={styles.headerCell}>Nationality</Text>
          <Text style={styles.headerCell}>Date of Birth</Text>
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
          drivers.map(driver => (
            <TouchableOpacity
              key={driver.driverId}
              onPress={() => navigation.navigate('DriverDetails', { driver })}
              style={styles.row}
            >
              <Text style={[styles.cell, styles.nameCell]}>{driver.permanentNumber ? `${driver.permanentNumber}. ` : ''}{driver.givenName} {driver.familyName}</Text>
              <Text style={styles.cell}>{driver.nationality}</Text>
              <Text style={styles.cell}>{driver.dateOfBirth}</Text>
            </TouchableOpacity>
          ))
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
