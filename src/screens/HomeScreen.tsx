import React, { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../styles/colors";
import { tmdbService } from "../services/tmdb";
import { getImageUrl } from "../config/tmdb";
import { Movie } from "../types/Movie";

const PosterCard = ({ item }: { item: Movie }) => {
  const imageUrl = getImageUrl(item.poster_path, "w342");
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.85}>
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.cardImage} />
      ) : (
        <View style={[styles.cardImage, styles.cardPlaceholder]}>
          <Text style={styles.placeholderText}>Sem imagem</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const Section = ({ title, data }: { title: string; data: Movie[] }) => {
  if (!data.length) return null;
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <PosterCard item={item} />}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      />
    </View>
  );
};
