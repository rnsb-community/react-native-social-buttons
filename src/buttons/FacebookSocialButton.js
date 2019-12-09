import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image, View} from "react-native";

const styles = StyleSheet.create({
  facebookStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#485a96",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 5,
    position: "relative",
    marginBottom: 0
  },
  imageIconStyle: {
    padding: 10,
    marginLeft: 15,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignSelf: "center"
  },
  textStyle: {
    color: "#fff",
    marginLeft: 20,
    marginRight: 20,
  }
});

export class FacebookSocialButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{ ...styles.facebookStyle, ...this.props.buttonViewStyle }}
        onPress={this.props.onPress}
      >
        <Image
          source={require("../images/facebook.png")}
          style={{...styles.imageIconStyle, ...this.props.logoStyle}}
        />
        <Text style={{...styles.textStyle, ...this.props.textStyle}}>
          {this.props.buttonText
            ? this.props.buttonText
            : "Sign in with Facebook"}
        </Text>
      </TouchableOpacity>
    );
  }
}
