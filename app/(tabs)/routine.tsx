import { ScrollView, StyleSheet, Text, View } from 'react-native';

const routines = [
  {
    period: 'Morning',
    emoji: '🌅',
    color: '#FFF3E0',
    borderColor: '#F4A261',
    tasks: [
      'Wake up and stretch',
      'Take morning medication',
      'Have breakfast',
      'Drink a glass of water',
    ],
  },
  {
    period: 'Afternoon',
    emoji: '☀️',
    color: '#F0F8FF',
    borderColor: '#74B9FF',
    tasks: [
      'Have lunch',
      'Take afternoon medication',
      'Go for a short walk',
      'Rest for a while',
    ],
  },
  {
    period: 'Evening',
    emoji: '🌙',
    color: '#F3F0FF',
    borderColor: '#A29BFE',
    tasks: [
      'Have dinner',
      'Take evening medication',
      'Call a family member',
      'Get ready for bed',
    ],
  },
];

export default function RoutineScreen() {
  const today = new Date().toLocaleDateString('en-AU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Today's Routine</Text>
      <Text style={styles.subtitle}>{today}</Text>

      {routines.map((routine) => (
        <View
          key={routine.period}
          style={[styles.card, { backgroundColor: routine.color, borderLeftColor: routine.borderColor }]}
        >
          <Text style={styles.periodTitle}>
            {routine.emoji} {routine.period}
          </Text>
          {routine.tasks.map((task) => (
            <View key={task} style={styles.taskRow}>
              <View style={[styles.dot, { backgroundColor: routine.borderColor }]} />
              <Text style={styles.taskText}>{task}</Text>
            </View>
          ))}
        </View>
      ))}
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
  card: {
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
    borderLeftWidth: 5,
  },
  periodTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5C4033',
    marginBottom: 16,
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 12,
  },
  taskText: {
    fontSize: 18,
    color: '#5C4033',
  },
});