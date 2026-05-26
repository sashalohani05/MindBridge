import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CarerScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/(tabs)/')}>
          <Text style={styles.backText}>← Patient View</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Carer Dashboard</Text>
      <Text style={styles.titleHindi}>परिवार का डैशबोर्ड</Text>
      <Text style={styles.subtitle}>Dadi's activity today</Text>

      <View style={styles.checkInCard}>
        <Text style={styles.checkInEmoji}>💛</Text>
        <View style={styles.checkInText}>
          <Text style={styles.checkInTitle}>Last Check-In</Text>
          <Text style={styles.checkInHindi}>आखिरी बार ठीक थीं</Text>
          <Text style={styles.checkInTime}>Today at 3:53 PM</Text>
        </View>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>Safe</Text>
        </View>
      </View>

      <View style={styles.sectionTitle}>
        <Text style={styles.sectionText}>Today's Reminders</Text>
        <Text style={styles.sectionHindi}>आज की दवाइयाँ और काम</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={[styles.statCard, { backgroundColor: '#FFF3E0' }]}>
          <Text style={styles.statNumber}>6</Text>
          <Text style={styles.statLabel}>Completed</Text>
          <Text style={styles.statHindi}>पूरे हुए</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: '#FFF0F0' }]}>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Remaining</Text>
          <Text style={styles.statHindi}>बाकी हैं</Text>
        </View>
      </View>

      <View style={styles.sectionTitle}>
        <Text style={styles.sectionText}>Routine Summary</Text>
        <Text style={styles.sectionHindi}>आज का दिनचर्या</Text>
      </View>

      <View style={styles.routineCard}>
        <View style={styles.routineRow}>
          <Text style={styles.routineEmoji}>🌅</Text>
          <View style={styles.routineText}>
            <Text style={styles.routinePeriod}>Morning</Text>
            <Text style={styles.routineStatus}>✅ Completed</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.routineRow}>
          <Text style={styles.routineEmoji}>☀️</Text>
          <View style={styles.routineText}>
            <Text style={styles.routinePeriod}>Afternoon</Text>
            <Text style={styles.routineStatus}>✅ Completed</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.routineRow}>
          <Text style={styles.routineEmoji}>🌙</Text>
          <View style={styles.routineText}>
            <Text style={styles.routinePeriod}>Evening</Text>
            <Text style={[styles.routineStatus, { color: '#F4A261' }]}>⏳ Pending</Text>
          </View>
        </View>
      </View>

      <View style={styles.sectionTitle}>
        <Text style={styles.sectionText}>Family Members</Text>
        <Text style={styles.sectionHindi}>परिवार के सदस्य</Text>
      </View>

      <View style={styles.familyRow}>
        {['Priya 👩', 'Arjun 👨', 'Rohan 👦'].map((name) => (
          <View key={name} style={styles.familyChip}>
            <Text style={styles.familyChipText}>{name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF8F0' },
  content: { padding: 24, paddingTop: 60, paddingBottom: 40 },
  header: { marginBottom: 20 },
  backButton: { alignSelf: 'flex-start', backgroundColor: '#F4A261', borderRadius: 20, paddingVertical: 8, paddingHorizontal: 16 },
  backText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 13 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#5C4033', marginBottom: 2 },
  titleHindi: { fontSize: 20, color: '#A0856C', marginBottom: 4 },
  subtitle: { fontSize: 16, color: '#C4A882', marginBottom: 24 },
  checkInCard: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 20, flexDirection: 'row', alignItems: 'center', marginBottom: 28, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 10, elevation: 3 },
  checkInEmoji: { fontSize: 40, marginRight: 16 },
  checkInText: { flex: 1 },
  checkInTitle: { fontSize: 18, fontWeight: 'bold', color: '#5C4033', marginBottom: 2 },
  checkInHindi: { fontSize: 13, color: '#A0856C', marginBottom: 4 },
  checkInTime: { fontSize: 14, color: '#C4A882' },
  statusBadge: { backgroundColor: '#E8F5E9', borderRadius: 20, paddingVertical: 6, paddingHorizontal: 14 },
  statusText: { color: '#4CAF50', fontWeight: 'bold', fontSize: 14 },
  sectionTitle: { marginBottom: 14 },
  sectionText: { fontSize: 20, fontWeight: 'bold', color: '#5C4033', marginBottom: 2 },
  sectionHindi: { fontSize: 14, color: '#A0856C' },
  statsRow: { flexDirection: 'row', gap: 16, marginBottom: 28 },
  statCard: { flex: 1, borderRadius: 20, padding: 20, alignItems: 'center' },
  statNumber: { fontSize: 48, fontWeight: 'bold', color: '#5C4033', marginBottom: 4 },
  statLabel: { fontSize: 16, color: '#5C4033', marginBottom: 2 },
  statHindi: { fontSize: 13, color: '#A0856C' },
  routineCard: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 20, marginBottom: 28, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 10, elevation: 3 },
  routineRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12 },
  routineEmoji: { fontSize: 28, marginRight: 16 },
  routineText: { flex: 1 },
  routinePeriod: { fontSize: 18, fontWeight: 'bold', color: '#5C4033', marginBottom: 2 },
  routineStatus: { fontSize: 14, color: '#4CAF50' },
  divider: { height: 1, backgroundColor: '#F0E0D0' },
  familyRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  familyChip: { backgroundColor: '#FFFFFF', borderRadius: 20, paddingVertical: 10, paddingHorizontal: 18, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 6, elevation: 2 },
  familyChipText: { fontSize: 16, color: '#5C4033' },
});