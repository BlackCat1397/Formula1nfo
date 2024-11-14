import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  useWindowDimensions,
  Linking,
} from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useHeaderHeight } from '@react-navigation/elements';

import { useDrivers } from '../../hooks/useDrivers';

import { Pagination } from '../../components';

import { styles } from '../styles';


type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [page, setPage] = useState(0);

  const headerHeight = useHeaderHeight();
  const { height } = useWindowDimensions();
  const listHeight = height - headerHeight - styles.headerRow.height - styles.pagination.height;
  const rowsPerPage = listHeight / styles.row.minHeight;

  const { drivers, isLoading, isError, totalDrivers, retry } = useDrivers(page, rowsPerPage);

  const totalPages = Math.ceil(totalDrivers / rowsPerPage);

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
              <TouchableOpacity
                style={[styles.cell, styles.nameCell]}
                onPress={() => driver.url && Linking.openURL(driver.url)}
              >
                <Text style={[styles.cell, styles.nameCell]}>{driver.permanentNumber ? `${driver.permanentNumber}. ` : ''}{driver.givenName} {driver.familyName}</Text>
              </TouchableOpacity>
              <Text style={styles.cell}>{driver.nationality}</Text>
              <Text style={styles.cell}>{driver.dateOfBirth}</Text>
            </TouchableOpacity>
          ))
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
