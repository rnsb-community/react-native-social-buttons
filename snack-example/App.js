import { Alert, StyleSheet, View } from "react-native";
import {
  AmazonSocialButton,
  AppleSocialButton,
  FacebookSocialButton,
  GitHubSocialButton,
  GoogleSocialButton,
  InstagramSocialButton,
  LinkedInSocialButton,
  MicrosoftSocialButton,
  TwitterSocialButton,
  SnapchatSocialButton
} from "react-native-social-buttons";

export default function App() {
  const handlePressed = (name) => () => Alert.alert(name + " button pressed");

  return (
    <View style={styles.container}>
      <SnapchatSocialButton onPress={handlePressed("Snapchat")} />
      <AmazonSocialButton onPress={handlePressed("Amazon")} />
      <AppleSocialButton onPress={handlePressed("Apple")} />
      <FacebookSocialButton onPress={handlePressed("Facebook")} />
      <GitHubSocialButton onPress={handlePressed("GitHub")} />
      <GoogleSocialButton onPress={handlePressed("Google")} />
      <InstagramSocialButton onPress={handlePressed("Instagram")} />
      <LinkedInSocialButton onPress={handlePressed("LinkedIn")} />
      <MicrosoftSocialButton onPress={handlePressed("Microsoft")} />
      <TwitterSocialButton onPress={handlePressed("Twitter")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ecf0f1",
    justifyContent: "center",
    alignItems: "center",
  },
});
