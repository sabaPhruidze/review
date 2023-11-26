import {StyleSheet} from 'react-native';

interface GlobalStyles {
  container: {
    flex: number;
    padding: number;
  };
  titleText: {
    color: string;
    fontSize: number;
    fontFamily: string;
  };
  paragraph: {
    marginVertical: number;
    lineHeight: number;
  };
}
export const globalStyles: GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleText: {
    color: '#333',
    fontSize: 18,
    fontFamily: 'NunitoBold',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
});
