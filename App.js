import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Linking, SafeAreaView } from 'react-native';
import { Audio } from 'expo-av';
import config from './config.json';

export default function App() {
  const [query, setQuery] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  const openTelegram = () => {
    Linking.openURL(config.developer.telegram_channel);
  };

  const openLastFmAuth = () => {
    const authUrl = `https://www.last.fm/api/auth/?api_key=${config.lastfm.api_key}`;
    Linking.openURL(authUrl);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>{config.app_name}</Text>
        <Text style={styles.appSubtitle}>By {config.developer.name}</Text>
      </View>

      {/* Search Box */}
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search song or artist..."
          placeholderTextColor="#888"
          value={query}
          onChangeText={setQuery}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Player Section */}
      <View style={styles.playerContainer}>
        <View style={styles.albumArtPlaceholder}>
          <Text style={{ fontSize: 40 }}>🎵</Text>
        </View>
        <Text style={styles.nowPlayingText}>Ready to play music</Text>
        <TouchableOpacity 
          style={styles.playButton} 
          onPress={() => setIsPlaying(!isPlaying)}
        >
          <Text style={styles.playButtonText}>{isPlaying ? "PAUSE" : "PLAY"}</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Controls */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.secondaryButton} onPress={openLastFmAuth}>
          <Text style={styles.secondaryButtonText}>Login with Last.fm</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.telegramButton} onPress={openTelegram}>
          <Text style={styles.buttonText}>Join Telegram</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  },
  header: {
    marginTop: 40,
    alignItems: 'center'
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1DB954'
  },
  appSubtitle: {
    fontSize: 13,
    color: '#AAAAAA',
    marginTop: 4
  },
  searchSection: {
    flexDirection: 'row',
    marginTop: 20
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#242424',
    borderRadius: 8,
    paddingHorizontal: 15,
    color: '#FFF',
    height: 45
  },
  searchButton: {
    backgroundColor: '#1DB954',
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginLeft: 10,
    borderRadius: 8
  },
  playerContainer: {
    alignItems: 'center',
    marginVertical: 40
  },
  albumArtPlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#333'
  },
  nowPlayingText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600'
  },
  playButton: {
    marginTop: 20,
    backgroundColor: '#1DB954',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 25
  },
  playButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  },
  footer: {
    marginBottom: 30,
    gap: 10
  },
  secondaryButton: {
    backgroundColor: '#B90000',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center'
  },
  secondaryButtonText: {
    color: '#FFF',
    fontWeight: '600'
  },
  telegramButton: {
    backgroundColor: '#229ED9',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});
