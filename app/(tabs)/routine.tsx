import { ScrollView, StyleSheet, Text, View } from 'react-native';

const routines = [
  {
    period: 'Morning',
    periodHindi: 'सुबह',
    emoji: '🌅',
    color: '#FFF3E0',
    borderColor: '#F4A261',
    tasks: [
      { en: 'Wake up and light exercise', hi: 'उठें और हल्का व्यायाम करें' },
      { en: 'Take morning medication', hi: 'सुबह की दवाई लें' },
      { en: 'Have breakfast', hi: 'नाश्ता करें' },
      { en: 'Read the newspaper', hi: 'अखबार पढ़ें' },
    ],
  },
  {
    period: 'Afternoon',
    periodHindi: 'दोपहर',
    emoji: '☀️',
    color: '#F0F8FF',
    borderColor: '#74B9FF',
    tasks: [
      { en: 'Have lunch', hi: 'खाना खाएं' },
      { en: 'Take afternoon medication', hi: 'दोपहर की दवाई लें' },
      { en: 'Take a nap', hi: 'थोड़ा आराम करें' },
      { en: 'Watch TV', hi: 'टीवी देखें' },
    ],
  },
  {
    period: 'Evening',
    periodHindi: 'शाम',
    emoji: '🌙',
    color: '#F3F0FF',
    borderColor: '#A29BFE',
    tasks: [
      { en: 'Have dinner', hi: 'रात का खाना खाएं' },
      { en: 'Hop on a call with family', hi: 'परिवार से फ़ोन पर बात करें' },
      { en: 'Take evening medication', hi: 'शाम की दवाई लें' },
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
      <Text style={styles.titleHindi}>आज का दिनचर्या</Text>
      <Text style={styles.subtitle}>{today}</Text>

      {routines.map((routine) => (
        <View
          key={routine.period}
          style={[styles.card, { backgroundColor: routine.color, borderLeftColor: routine.borderColor }]}
        >
          <Text style={styles.periodTitle}>
            {routine.emoji} {routine.period}
          </Text>
          <Text style={[styles.periodHindi, { color: routine.borderColor }]}>
            {routine.periodHindi}
          </Text>
          {routine.tasks.map((task) => (
            <View key={task.en} style={styles.taskRow}>
              <View style={[styles.dot, { backgroundColor: routine.borderColor }]} />
              <View style={styles.taskTextContainer}>
                <Text style={styles.taskText}>{task.en}</Text>
                <Text style={styles.taskHindi}>{task.hi}</Text>
              </View>
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
    marginBottom: 2,
  },
  titleHindi: {
    fontSize: 20,
    color: '#A0856C',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#C4A882',
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
    marginBottom: 2,
  },
  periodHindi: {
    fontSize: 16,
    marginBottom: 16,
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 12,
    marginTop: 6,
  },
  taskTextContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: 18,
    color: '#5C4033',
    marginBottom: 2,
  },
  taskHindi: {
    fontSize: 14,
    color: '#A0856C',
  },
});