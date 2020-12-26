import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import { useDispatch, useSelector } from "react-redux";
import { addClip, deleteClip } from "../store/actions/user";
import ClipButton from "../components/ClipButton";
import Loading from "../components/Loading";

export default ArticleScreen = ({ route }) => {
  const { article } = route.params;

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { clips } = user;
  const isClipped = () => {
    return clips.some((clip) => clip.url === article.url);
  };

  const toggleClip = () => {
    if (isClipped()) {
      dispatch(deleteClip({ clip: article }));
    } else {
      dispatch(addClip({ clip: article }));
    }
  };

  return (
    <View style={styles.container}>
      <ClipButton onPress={toggleClip} enabled={isClipped()} />
      <WebView
        startInLoadingState={true}
        renderLoading={() => <Loading />}
        source={{ uri: article.url }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
