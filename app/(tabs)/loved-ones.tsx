import { ScrollView, StyleSheet, Text, View } from 'react-native';

const lovedOnes = [
  {
    id: '1',
    name: 'Sarah',
    relation: 'Daughter',
    emoji: '👩',
  },
  {
    id: '2',
    name: 'James',
    relation: 'Son',
    emoji: '👨',
  },
  {
    id: '3',
    name: 'Margaret',
    relation: 'Sister',
    emoji: '👩‍🦳',
  },
  {
    id: '4',
    name: 'Tommy',
    relation: 'Grandson',
    emoji: '👦',
  },
  {
    id: '5',
    name: 'Lily',
    relation: 'Granddaughter',
    emoji: '👧',
  },
  {
    id: '6',
    name: 'Dr. Patel',
    relation: 'Doctor',
    emoji: '👨‍⚕️',
  },
];

export default function LovedOnesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Who Loves Me 💛</Text>
      <Text style={styles.subtitle}>People who care about you</Text>

      <View style={styles.grid}>
        {lovedOnes.map((person) => (
          <View key={person.id} style={styles.card}>
            <Text style={styles.emoji}>{person.emoji}</Text>
            <Text style={styles.name}>{person.name}</Text>
            <Text style={styles.relation}>{person.relation}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
  },
  content: {
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5C4033',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#A0856C',
    marginBottom: 32,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: '47%',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5C4033',
    marginBottom: 4,
  },
  relation: {
    fontSize: 14,
    color: '#A0856C',
  },
});