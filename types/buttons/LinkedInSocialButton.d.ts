export default LinkedInSocialButton;
export type LinkedInSocialButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  buttonViewStyle?: ViewStyle;
  logoStyle?: ImageStyle;
  textStyle?: TextStyle;
  buttonText?: string;
};
declare function LinkedInSocialButton(
  props: LinkedInSocialButtonProps
): React.JSX.Element;
import { GestureResponderEvent } from "react-native";
import { ViewStyle } from "react-native";
import { ImageStyle } from "react-native";
import { TextStyle } from "react-native";
