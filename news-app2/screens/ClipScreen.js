import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ListItem from "../components/ListItem";

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ClipScreen = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const { clips } = user;
  return (
    <View style={styles.container}>
      <FlatList
        data={clips}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate("Article", { article: item })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
