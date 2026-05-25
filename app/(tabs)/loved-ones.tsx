import { ScrollView, StyleSheet, Text, View } from 'react-native';

const lovedOnes = [
  {
    id: '1',
    name: 'Priya',
    relation: 'Beti',
    relationHindi: 'बेटी',
    emoji: '👩',
  },
  {
    id: '2',
    name: 'Arjun',
    relation: 'Beta',
    relationHindi: 'बेटा',
    emoji: '👨',
  },
  {
    id: '3',
    name: 'Sunita',
    relation: 'Behen',
    relationHindi: 'बहन',
    emoji: '👩‍🦳',
  },
  {
    id: '4',
    name: 'Rohan',
    relation: 'Pota',
    relationHindi: 'पोता',
    emoji: '👦',
  },
  {
    id: '5',
    name: 'Ananya',
    relation: 'Poti',
    relationHindi: 'पोती',
    emoji: '👧',
  },
  {
    id: '6',
    name: 'Dr. Sharma',
    relation: 'Doctor',
    relationHindi: 'डॉक्टर',
    emoji: '👨‍⚕️',
  },
];

export default function LovedOnesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Who Loves Me 💛</Text>
      <Text style={styles.subtitle}>Aapke apne log • आपके अपने लोग</Text>

      <View style={styles.grid}>
        {lovedOnes.map((person) => (
          <View key={person.id} style={styles.card}>
            <Text style={styles.emoji}>{person.emoji}</Text>
            <Text style={styles.name}>{person.name}</Text>
            <Text style={styles.relation}>{person.relation}</Text>
            <Text style={styles.relationHindi}>{person.relationHindi}</Text>
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
    marginBottom: 2,
  },
  relation: {
    fontSize: 14,
    color: '#A0856C',
    marginBottom: 2,
  },
  relationHindi: {
    fontSize: 14,
    color: '#C4A882',
  },
});