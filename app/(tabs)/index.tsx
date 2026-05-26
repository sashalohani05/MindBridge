import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [time, setTime] = useState(new Date());
  const [checkedIn, setCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState('');
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.toLocaleTimeString('en-AU', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).replace(' ', '\u00A0');

  const day = time.toLocaleDateString('en-AU', { weekday: 'long' });
  const date = time.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });

  const handleCheckIn = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit' });
    setCheckInTime(timeString);
    setCheckedIn(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>MindBridge</Text>
        <TouchableOpacity
          style={styles.carerButton}
          onPress={() => router.push('/(tabs)/carer')}
        >
          <Text style={styles.carerButtonText}>Carer View →</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.timeCard}>
        <Text style={styles.time}>{hours}</Text>
        <Text style={styles.day}>{day}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      {checkedIn ? (
        <View style={styles.confirmedCard}>
          <Text style={styles.confirmedEmoji}>💛</Text>
          <Text style={styles.confirmedTitle}>Thank you!</Text>
          <Text style={styles.confirmedText}>Your family knows you're okay.</Text>
          <Text style={styles.confirmedTime}>Checked in at {checkInTime}</Text>
          <TouchableOpacity onPress={() => setCheckedIn(false)} style={styles.resetButton}>
            <Text style={styles.resetText}>Check in again</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.okayButton} onPress={handleCheckIn}>
          <Text style={styles.okayText}>I'm okay 💛</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 40,
  },
  appName: {
    fontSize: 22,
    color: '#A0856C',
    letterSpacing: 2,
  },
  carerButton: {
    backgroundColor: '#F4A261',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  carerButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },
  timeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 40,
    alignItems: 'center',
    width: '100%',
    marginBottom: 40,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
  time: {
    fontSize: 58,
    fontWeight: 'bold',
    color: '#5C4033',
    marginBottom: 8,
  },
  day: {
    fontSize: 28,
    color: '#5C4033',
    marginBottom: 4,
  },
  date: {
    fontSize: 18,
    color: '#A0856C',
  },
  okayButton: {
    backgroundColor: '#F4A261',
    borderRadius: 50,
    paddingVertical: 22,
    paddingHorizontal: 60,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  okayText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  confirmedCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 36,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
  confirmedEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  confirmedTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5C4033',
    marginBottom: 8,
  },
  confirmedText: {
    fontSize: 18,
    color: '#A0856C',
    marginBottom: 6,
    textAlign: 'center',
  },
  confirmedTime: {
    fontSize: 15,
    color: '#C4A882',
    marginBottom: 24,
  },
  resetButton: {
    borderWidth: 1.5,
    borderColor: '#F4A261',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  resetText: {
    fontSize: 16,
    color: '#F4A261',
  },
});