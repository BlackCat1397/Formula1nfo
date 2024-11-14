import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from '../screens/styles';

export const Pagination = ({
  page,
  totalPages,
  isDisabled,
  onPrevPagePress,
  onNextPagePress,
}: {
  page: number,
  totalPages: number,
  isDisabled: boolean,
  onPrevPagePress: () => void,
  onNextPagePress: () => void,
}) => {
  const isPrevPageDisabled = page === 0 || isDisabled;
  const isNextPageDisabled = page >= totalPages - 1 || isDisabled;

  return (
    <View style={styles.pagination}>
      <TouchableOpacity
        onPress={onPrevPagePress}
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
        onPress={onNextPagePress}
        disabled={isNextPageDisabled}
        style={[
          styles.button,
          isNextPageDisabled && styles.buttonDisabled,
        ]}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
