import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  table: {
    flex: 1,
  },
  headerRow: {
    height: 36,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 12,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    minHeight: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cell: {
    flex: 1,
    fontSize: 13,
    paddingHorizontal: 1,
  },
  nameCell: {
    flex: 2,
  },
  seasonCell: {
    flex: 1,
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
    borderColor: '#ddd',
    borderRadius: 5,
  },
  buttonPressed: {
    backgroundColor: '#ddd',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 14,
  },
  pageInfo: {
    fontSize: 14,
    marginHorizontal: 10,
  },
  rowPressed: {
    backgroundColor: '#f0f0f0',
  },
});
