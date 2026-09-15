import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, TextInput, TouchableOpacity, 
  SafeAreaView, StatusBar, ScrollView 
} from 'react-native';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import config from './config.json';

export default function App() {
  const [activeTab, setActiveTab] = useState('feed');

  const genres = ['Pop', 'Rock', 'Hip-Hop', 'Lo-Fi', 'Electronic', 'Indie', 'R&B', 'Bollywood', 'Jazz', 'Metal', 'Chill'];

  const quickPicks = [
    { id: '1', title: 'Jugni', artist: 'Cheema Y' },
    { id: '2', title: 'Vancouver', artist: 'Cheema Y' },
    { id: '3', title: 'Not Sure', artist: 'Cheema Y' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* TOP HEADER */}
      <View style={styles.topHeader}>
        <Text style={styles.headerGreeting}>
          {activeTab === 'feed' ? 'Good night' : activeTab === 'stats' ? 'Stats' : 'Playlist'}
        </Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.roundIconBtn}>
            <Feather name="compass" size={20} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundIconBtn}>
            <Ionicons name="search" size={20} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundIconBtn}>
            <Ionicons name="settings-outline" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* BODY CONTENT */}
      <ScrollView style={styles.contentBody} showsVerticalScrollIndicator={false}>
        {activeTab === 'feed' && (
          <View>
            <Text style={styles.dateText}>Wednesday, September 16</Text>

            {/* Infinite Radio Banner */}
            <View style={styles.bannerCard}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>✨ MADE FOR YOU</Text>
              </View>
              <Text style={styles.bannerTitle}>Infinite Radio</Text>
              <Text style={styles.bannerSub}>An endless station shaped by your listening</Text>
              <TouchableOpacity style={styles.playBannerBtn}>
                <Ionicons name="play" size={16} color="#000" />
                <Text style={styles.playBannerText}>Play</Text>
              </TouchableOpacity>
            </View>

            {/* Quick Picks Header */}
            <View style={styles.sectionHeaderRow}>
              <View>
                <Text style={styles.sectionTitle}>Quick picks</Text>
                <Text style={styles.sectionSubtitle}>Matched to your taste profile</Text>
              </View>
              <View style={styles.actionBtnRow}>
                <TouchableOpacity style={styles.smallIconBtn}>
                  <Ionicons name="shuffle" size={16} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.playAllBtn}>
                  <Ionicons name="play" size={14} color="#FFF" />
                  <Text style={styles.playAllText}>Play all</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Quick Picks Songs */}
            {quickPicks.map((song) => (
              <View key={song.id} style={styles.songRow}>
                <View style={styles.songThumb}>
                  <Feather name="music" size={20} color="#999" />
                </View>
                <View style={styles.songDetails}>
                  <Text style={styles.songTitle}>{song.title}</Text>
                  <Text style={styles.songArtist}>{song.artist}</Text>
                </View>
                <TouchableOpacity>
                  <Feather name="more-vertical" size={20} color="#777" />
                </TouchableOpacity>
              </View>
            ))}

            {/* Genres */}
            <Text style={[styles.sectionTitle, { marginTop: 25, marginBottom: 12 }]}>Explore genres & moods</Text>
            <View style={styles.chipsWrap}>
              {genres.map((genre, idx) => (
                <View key={idx} style={styles.genreChip}>
                  <Text style={styles.genreChipText}>{genre}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {activeTab === 'stats' && (
          <View>
            <View style={styles.statsCard}>
              <Text style={styles.statsCount}>4</Text>
              <Text style={styles.statsSub}>Scrobbles</Text>
              <View style={styles.statsDivider} />
              <View style={styles.statsMiniRow}>
                <View style={styles.miniStat}><Text style={styles.miniVal}>3</Text><Text style={styles.miniLbl}>Tracks</Text></View>
                <View style={styles.miniStat}><Text style={styles.miniVal}>1</Text><Text style={styles.miniLbl}>Artists</Text></View>
                <View style={styles.miniStat}><Text style={styles.miniVal}>3</Text><Text style={styles.miniLbl}>Albums</Text></View>
              </View>
            </View>
          </View>
        )}

        {activeTab === 'playlist' && (
          <View>
            <View style={styles.playlistRow}>
              <View style={styles.playlistThumb}><Feather name="music" size={22} color="#FFF" /></View>
              <View style={{ flex: 1, marginLeft: 15 }}>
                <Text style={styles.songTitle}>Liked Songs 📌</Text>
                <Text style={styles.songArtist}>0 tracks • Sep 16, 2026</Text>
              </View>
              <Feather name="more-vertical" size={20} color="#777" />
            </View>
          </View>
        )}
      </ScrollView>

      {/* BOTTOM FLOATING PILL NAVBAR */}
      <View style={styles.bottomNavContainer}>
        <View style={styles.navPill}>
          <TouchableOpacity 
            style={[styles.navItem, activeTab === 'feed' && styles.navItemActive]} 
            onPress={() => setActiveTab('feed')}
          >
            <Ionicons name="home" size={18} color={activeTab === 'feed' ? '#FFF' : '#777'} />
            {activeTab === 'feed' && <Text style={styles.navLabel}>Feed</Text>}
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.navItem, activeTab === 'stats' && styles.navItemActive]} 
            onPress={() => setActiveTab('stats')}
          >
            <Ionicons name="bar-chart" size={18} color={activeTab === 'stats' ? '#FFF' : '#777'} />
            {activeTab === 'stats' && <Text style={styles.navLabel}>Stats</Text>}
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.navItem, activeTab === 'playlist' && styles.navItemActive]} 
            onPress={() => setActiveTab('playlist')}
          >
            <MaterialIcons name="queue-music" size={20} color={activeTab === 'playlist' ? '#FFF' : '#777'} />
            {activeTab === 'playlist' && <Text style={styles.navLabel}>Playlists</Text>}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  topHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 15 },
  headerGreeting: { color: '#FFF', fontSize: 28, fontWeight: 'bold' },
  headerIcons: { flexDirection: 'row', gap: 12 },
  roundIconBtn: { width: 38, height: 38, borderRadius: 19, backgroundColor: '#1A1A1A', justifyContent: 'center', alignItems: 'center' },
  contentBody: { flex: 1, paddingHorizontal: 20, marginTop: 10 },
  dateText: { color: '#777', fontSize: 13, marginBottom: 15 },
  bannerCard: { backgroundColor: '#1E232A', borderRadius: 24, padding: 20, marginBottom: 25 },
  badge: { backgroundColor: 'rgba(255,255,255,0.1)', alignSelf: 'flex-start', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12, marginBottom: 10 },
  badgeText: { color: '#B0C4DE', fontSize: 10, fontWeight: '700' },
  bannerTitle: { color: '#FFF', fontSize: 22, fontWeight: 'bold' },
  bannerSub: { color: '#8A9BA8', fontSize: 13, marginTop: 4, marginBottom: 18 },
  playBannerBtn: { backgroundColor: '#FFF', alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center', paddingVertical: 8, paddingHorizontal: 18, borderRadius: 20, gap: 6 },
  playBannerText: { color: '#000', fontWeight: 'bold', fontSize: 14 },
  sectionHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  sectionTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  sectionSubtitle: { color: '#777', fontSize: 12, marginTop: 2 },
  actionBtnRow: { flexDirection: 'row', gap: 8, alignItems: 'center' },
  smallIconBtn: { backgroundColor: '#1E1E1E', padding: 7, borderRadius: 16 },
  playAllBtn: { backgroundColor: '#1E232A', flexDirection: 'row', alignItems: 'center', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, gap: 4 },
  playAllText: { color: '#FFF', fontSize: 12, fontWeight: 'bold' },
  songRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 14 },
  songThumb: { width: 48, height: 48, borderRadius: 8, backgroundColor: '#1E1E1E', justifyContent: 'center', alignItems: 'center' },
  songDetails: { flex: 1, marginLeft: 14 },
  songTitle: { color: '#FFF', fontSize: 15, fontWeight: '600' },
  songArtist: { color: '#777', fontSize: 13, marginTop: 2 },
  chipsWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 100 },
  genreChip: { backgroundColor: '#1C1C1E', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20 },
  genreChipText: { color: '#DDD', fontSize: 13 },
  statsCard: { backgroundColor: '#1C2331', borderRadius: 24, padding: 25, alignItems: 'center', marginTop: 10 },
  statsCount: { color: '#FFF', fontSize: 48, fontWeight: 'bold' },
  statsSub: { color: '#78909C', fontSize: 14, marginTop: -4 },
  statsDivider: { height: 1, backgroundColor: 'rgba(255,255,255,0.08)', width: '100%', marginVertical: 20 },
  statsMiniRow: { flexDirection: 'row', width: '100%', justifyContent: 'space-around' },
  miniStat: { alignItems: 'center' },
  miniVal: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  miniLbl: { color: '#78909C', fontSize: 12, marginTop: 2 },
  playlistRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#141414', padding: 14, borderRadius: 16 },
  playlistThumb: { width: 45, height: 45, borderRadius: 10, backgroundColor: '#222', justifyContent: 'center', alignItems: 'center' },
  bottomNavContainer: { position: 'absolute', bottom: 20, width: '100%', alignItems: 'center' },
  navPill: { flexDirection: 'row', backgroundColor: '#111', borderRadius: 30, padding: 6, gap: 6, borderWidth: 1, borderColor: '#222' },
  navItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 16, borderRadius: 24, gap: 6 },
  navItemActive: { backgroundColor: '#2B384E' },
  navLabel: { color: '#FFF', fontSize: 13, fontWeight: '600' }
});
          
