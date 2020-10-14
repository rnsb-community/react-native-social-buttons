import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  appleStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
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
    color: "#575757",
    marginLeft: 20,
    marginRight: 20
  }
});

export class AppleSocialButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{ ...styles.appleStyle, ...this.props.buttonViewStyle }}
        onPress={this.props.onPress}
      >
        <Image
          source={require("../images/apple.png")}
          style={{...styles.imageIconStyle, ...this.props.logoStyle}}
        />
        <Text style={{...styles.textStyle, ...this.props.textStyle}}>
          {this.props.buttonText
            ? this.props.buttonText
            : "Sign in with Apple"}
        </Text>
      </TouchableOpacity>
    );
  }
}
