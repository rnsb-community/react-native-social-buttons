export default FacebookSocialButton;
export type FacebookSocialButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  buttonViewStyle?: ViewStyle;
  logoStyle?: ImageStyle;
  textStyle?: TextStyle;
  buttonText?: string;
};
declare function FacebookSocialButton(
  props: FacebookSocialButtonProps
): React.JSX.Element;
import { GestureResponderEvent } from "react-native";
import { ViewStyle } from "react-native";
import { ImageStyle } from "react-native";
import { TextStyle } from "react-native";
