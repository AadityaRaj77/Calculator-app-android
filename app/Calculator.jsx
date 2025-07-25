import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, SafeAreaView } from 'react-native';

export default function App() {
  const [display, setDisplay] = useState('');

  const handlePress = (value) => {
    if (value === 'C') {
      setDisplay('');
    } else if (value === '=') {
      try {
        const result = eval(display);
        setDisplay(String(result));
      } catch (e) {
        setDisplay('Error');
      }
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['C', '0', '=', '+'],
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{display || '0'}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((btn) => (
              <Pressable
                key={btn}
                style={({ pressed }) => [
                  styles.button,
                  btn === '=' && styles.equalsButton,
                  pressed && styles.buttonPressed,
                ]}
                onPress={() => handlePress(btn)}
                hitSlop={10}
              >
                <Text style={styles.buttonText}>{btn}</Text>
              </Pressable>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  displayContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  displayText: {
    fontSize: 48,
    color: '#333333',
  },
  buttonContainer: {
    flex: 5,
    padding: 10,
    backgroundColor: '#dddddd',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  buttonPressed: {
    opacity: 0.6,
  },
  equalsButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    fontSize: 24,
    color: '#333333',
  },
});
