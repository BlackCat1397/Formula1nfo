import { StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  table: {
    flex: 1,
  },
  headerRow: {
    height: 34,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: Colors.darkBackground,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray,
  },
  headerCell: {
    flex: 1,
    fontFamily: 'Formula1',
    color: Colors.carbonBlack,
    fontWeight: 'bold',
    fontSize: 12,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    minHeight: 36,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray,
  },
  cell: {
    fontFamily: 'Formula1',
    color: Colors.carbonBlack,
    flex: 1,
    fontSize: 13,
    paddingHorizontal: 1,
  },
  nameCell: {
    flex: 2,
  },
  seasonHeaderCell: {
    flex: 1,
    fontSize: 11,
    paddingTop: 1,
  },
  raceNameCell: {
    flex: 2,
  },
  circuitCell: {
    flex: 3,
  },
  resultCell: {
    flex: 1,
  },
  loader: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: Colors.carbonBlack,
    fontFamily: 'Formula1',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pagination: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowsPerPageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  picker: {
    width: 100,
    height: 50,
    marginLeft: 10,
  },
  button: {
    padding: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: Colors.borderGray,
    borderRadius: 5,
  },
  buttonPressed: {
    backgroundColor: Colors.borderGray,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: Colors.carbonBlack,
    fontFamily: 'Formula1',
    fontSize: 14,
  },
  pageInfo: {
    color: Colors.carbonBlack,
    fontFamily: 'Formula1',
    fontSize: 14,
    marginHorizontal: 10,
  },
});
