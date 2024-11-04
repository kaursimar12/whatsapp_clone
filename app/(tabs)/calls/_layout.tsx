import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Calls',
          headerLargeTitle: true,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#fff' },
          headerTintColor: '#006400', 
          headerTitleStyle: {
            fontWeight: 'bold',   // Make font bold
            fontSize: 24,         // Increase font size
          },

          headerRight: () => (
            <TouchableOpacity>
              <View style={styles.container}>
                <Ionicons name="camera" color={Colors.gray} size={30} />
                <Ionicons name="search" color={Colors.gray} size={30} />
                <Ionicons name="ellipsis-vertical" color={Colors.gray} size={30} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    gap:8
  }
});
