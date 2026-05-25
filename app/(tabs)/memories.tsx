import { View, Text, StyleSheet, ScrollView } from 'react-native';

const memories = [
  {
    id: '1',
    emoji: '🌸',
    caption: 'Family dinner on Diwali',
    captionHindi: 'दिवाली पर परिवार के साथ खाना',
    date: 'October 2024',
    color: '#FFF3E0',
  },
  {
    id: '2',
    emoji: '🎂',
    caption: "Rohan's birthday party",
    captionHindi: 'रोहन का जन्मदिन',
    date: 'March 2024',
    color: '#F3F0FF',
  },
  {
    id: '3',
    emoji: '🌺',
    caption: 'Morning walk in the garden',
    captionHindi: 'बगीचे में सुबह की सैर',
    date: 'January 2024',
    color: '#F0FFF0',
  },
  {
    id: '4',
    emoji: '☕',
    caption: 'Tea time with Sunita',
    captionHindi: 'सुनीता के साथ चाय',
    date: 'February 2024',
    color: '#FFF0F0',
  },
  {
    id: '5',
    emoji: '🛕',
    caption: 'Visit to the temple',
    captionHindi: 'मंदिर की यात्रा',
    date: 'December 2023',
    color: '#F0F8FF',
  },
  {
    id: '6',
    emoji: '👨‍👩‍👧‍👦',
    caption: 'Family photo at Priya\'s wedding',
    captionHindi: 'प्रिया की शादी में परिवार',
    date: 'November 2023',
    color: '#FFF3E0',
  },
];

export default function MemoriesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Memory Album</Text>
      <Text style={styles.titleHindi}>यादों का खजाना</Text>
      <Text style={styles.subtitle}>Your beautiful moments</Text>

      {memories.map((memory) => (
        <View key={memory.id} style={[styles.card, { backgroundColor: memory.color }]}>
          <Text style={styles.memoryEmoji}>{memory.emoji}</Text>
          <View style={styles.textContainer}>
            <Text style={styles.caption}>{memory.caption}</Text>
            <Text style={styles.captionHindi}>{memory.captionHindi}</Text>
            <Text style={styles.date}>{memory.date}</Text>
          </View>
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
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#C4A882',
    marginBottom: 32,
  },
  card: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  memoryEmoji: {
    fontSize: 56,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  caption: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5C4033',
    marginBottom: 4,
  },
  captionHindi: {
    fontSize: 14,
    color: '#A0856C',
    marginBottom: 6,
  },
  date: {
    fontSize: 13,
    color: '#C4A882',
  },
});
