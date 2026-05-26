import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const initialReminders = [
  {
    id: '1',
    time: '8:00 AM',
    title: 'Morning Medication',
    titleHindi: 'सुबह की दवाई',
    emoji: '💊',
    done: false,
  },
  {
    id: '2',
    time: '8:30 AM',
    title: 'Have Breakfast',
    titleHindi: 'नाश्ता करें',
    emoji: '🍽️',
    done: false,
  },
  {
    id: '3',
    time: '10:00 AM',
    title: 'Drink Water',
    titleHindi: 'पानी पिएं',
    emoji: '💧',
    done: false,
  },
  {
    id: '4',
    time: '1:00 PM',
    title: 'Have Lunch',
    titleHindi: 'खाना खाएं',
    emoji: '🍱',
    done: false,
  },
  {
    id: '5',
    time: '2:00 PM',
    title: 'Afternoon Medication',
    titleHindi: 'दोपहर की दवाई',
    emoji: '💊',
    done: false,
  },
  {
    id: '6',
    time: '3:00 PM',
    title: 'Drink Water',
    titleHindi: 'पानी पिएं',
    emoji: '💧',
    done: false,
  },
  {
    id: '7',
    time: '7:00 PM',
    title: 'Have Dinner',
    titleHindi: 'रात का खाना',
    emoji: '🍽️',
    done: false,
  },
  {
    id: '8',
    time: '8:00 PM',
    title: 'Evening Medication',
    titleHindi: 'शाम की दवाई',
    emoji: '💊',
    done: false,
  },
  {
    id: '9',
    time: '9:00 PM',
    title: 'Call Family',
    titleHindi: 'परिवार को फ़ोन करें',
    emoji: '📞',
    done: false,
  },
];

export default function RemindersScreen() {
  const [reminders, setReminders] = useState(initialReminders);

  const toggleDone = (id: string) => {
    setReminders(prev =>
      prev.map(r => r.id === id ? { ...r, done: !r.done } : r)
    );
  };

  const completed = reminders.filter(r => r.done).length;
  const total = reminders.length;
  const percentage = Math.round((completed / total) * 100);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Reminders</Text>
      <Text style={styles.titleHindi}>आज के काम</Text>
      <Text style={styles.progress}>
        {completed} of {total} completed • {total} में से {completed} पूरे
      </Text>

      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${percentage}%` as any }]} />
      </View>

      {reminders.map((reminder) => (
        <TouchableOpacity
          key={reminder.id}
          style={[styles.card, reminder.done && styles.cardDone]}
          onPress={() => toggleDone(reminder.id)}
        >
          <Text style={styles.emoji}>{reminder.done ? '✅' : reminder.emoji}</Text>
          <View style={styles.textContainer}>
            <Text style={[styles.reminderTitle, reminder.done && styles.textDone]}>
              {reminder.title}
            </Text>
            <Text style={styles.reminderHindi}>{reminder.titleHindi}</Text>
            <Text style={styles.reminderTime}>{reminder.time}</Text>
          </View>
          <View style={[styles.checkbox, reminder.done && styles.checkboxDone]}>
            {reminder.done && <Text style={styles.checkmark}>✓</Text>}
          </View>
        </TouchableOpacity>
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
    paddingBottom: 40,
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
    marginBottom: 8,
  },
  progress: {
    fontSize: 14,
    color: '#C4A882',
    marginBottom: 12,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#F0E0D0',
    borderRadius: 4,
    marginBottom: 28,
    overflow: 'hidden',
  },
  progressFill: {
    height: 8,
    backgroundColor: '#F4A261',
    borderRadius: 4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardDone: {
    backgroundColor: '#F9F9F9',
    opacity: 0.7,
  },
  emoji: {
    fontSize: 32,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  reminderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5C4033',
    marginBottom: 2,
  },
  textDone: {
    textDecorationLine: 'line-through',
    color: '#A0856C',
  },
  reminderHindi: {
    fontSize: 14,
    color: '#A0856C',
    marginBottom: 2,
  },
  reminderTime: {
    fontSize: 13,
    color: '#C4A882',
  },
  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#F4A261',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxDone: {
    backgroundColor: '#F4A261',
    borderColor: '#F4A261',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});