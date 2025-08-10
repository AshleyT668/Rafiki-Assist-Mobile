import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CaregiverDashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Rafiki Assist</Text>
      <Text style={styles.subtitle}>Caregiver Dashboard</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Go to Chatbot</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Manage Symbols</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Profile Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f9f9f9" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 18, marginBottom: 20 },
  button: { backgroundColor: "#4CAF50", padding: 14, borderRadius: 8, marginVertical: 8, width: "80%" },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" }
});
