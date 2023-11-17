export default AmazonSocialButton;
export type AmazonSocialButtonProps = {
    onPress: (event: GestureResponderEvent) => void;
    buttonViewStyle?: ViewStyle;
    logoStyle?: ImageStyle;
    textStyle?: TextStyle;
    buttonText?: string;
};
declare function AmazonSocialButton(props: AmazonSocialButtonProps): React.JSX.Element;
import { GestureResponderEvent } from "react-native";
import { ViewStyle } from "react-native";
import { ImageStyle } from "react-native";
import { TextStyle } from "react-native";
