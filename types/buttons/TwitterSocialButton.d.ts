export default TwitterSocialButton;
export type TwitterSocialButtonProps = {
    onPress: (event: GestureResponderEvent) => void;
    buttonViewStyle?: ViewStyle;
    logoStyle?: ImageStyle;
    textStyle?: TextStyle;
    buttonText?: string;
};
declare function TwitterSocialButton(props: TwitterSocialButtonProps): React.JSX.Element;
import { GestureResponderEvent } from "react-native";
import { ViewStyle } from "react-native";
import { ImageStyle } from "react-native";
import { TextStyle } from "react-native";
