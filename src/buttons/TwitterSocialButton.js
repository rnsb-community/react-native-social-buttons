import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  twitterStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00acee",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 5
  },
  imageIconStyle: {
    padding: 10,
    marginLeft: 15,
    height: 25,
    width: 25,
    resizeMode: "stretch"
  },
  textStyle: {
    color: "#fff",
    marginLeft: 20,
    marginRight: 20
  }
});

export class TwitterSocialButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{ ...styles.twitterStyle, ...this.props.buttonViewStyle }}
        onPress={this.props.onPress}
      >
        <Image
          source={require("../images/twitter.png")}
          style={{...styles.imageIconStyle, ...this.props.logoStyle}}
        />
        <Text style={{...styles.textStyle, ...this.props.textStyle}}>
          {this.props.buttonText
            ? this.props.buttonText
            : "Sign in with Twitter"}
        </Text>
      </TouchableOpacity>
    );
  }
}
