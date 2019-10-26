import React, { Component } from "react";
import {
  View, Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert
} from "react-native";

class FacebookSocialButton extends Component {
  constructor(props) {
    super(props);
  }

  renderFaceBookButton(buttonText, opacity, height, width) {

    return (
      <TouchableOpacity style={[styles.FacebookStyle, { height, width }]} activeOpacity={opacity} onPress={this.props.action}>
        <Image
          source={require('./images/facebook.png')}
          style={styles.ImageIconStyle}
        />
        <View style={styles.SeparatorLine} />
        <Text style={styles.TextStyle}> {buttonText} </Text>
      </TouchableOpacity>
    );
  }

  renderGoogleButton(buttonText, opacity, height, width) {
    return (
      <TouchableOpacity style={[styles.GooglePlusStyle, { height, width }]} activeOpacity={opacity} onPress={this.props.action}>
        <Image
          source={require('./images/google-plus.png')}
          style={styles.ImageIconStyle}
        />
        <View style={styles.SeparatorLine} />
        <Text style={styles.TextStyle}> {buttonText} </Text>
      </TouchableOpacity>
    );
  }

  renderGithubButton(buttonText, opacity, height, width) {
    return (
      <TouchableOpacity style={[styles.GithubStyle, { height, width }]} activeOpacity={opacity} onPress={this.props.action}>
        <Image
          source={require('./images/github.png')}
          style={styles.ImageIconStyle}
        />
        <View style={styles.SeparatorLine} />
        <Text style={styles.TextStyle}> {buttonText} </Text>
      </TouchableOpacity>
    );
  }

  renderTwitterButton(buttonText, opacity, height, width) {
    return (
      <TouchableOpacity style={[styles.TwitterStyle, { height, width }]} activeOpacity={opacity} onPress={this.props.action}>
        <Image
          source={require('./images/twitter.png')}
          style={styles.ImageIconStyle}
        />
        <View style={styles.SeparatorLine} />
        <Text style={styles.TextStyle}> {buttonText} </Text>
      </TouchableOpacity>
    );
  }

  renderAmazonButton(buttonText, opacity, height, width) {
    return (
      <TouchableOpacity style={[styles.AmazonStyle, { height, width }]} activeOpacity={opacity} onPress={this.props.action}>
        <Image
          source={require('./images/amazon.png')}
          style={styles.ImageIconStyle}
        />
        <View style={styles.SeparatorLine} />
        <Text style={styles.TextStyle}> {buttonText} </Text>
      </TouchableOpacity>
    );
  }

  renderMicrosoftButton(buttonText, opacity, height, width) {
    return (
      <TouchableOpacity style={[styles.MicrosoftStyle, { height, width }]} activeOpacity={opacity} onPress={this.props.action}>
        <Image
          source={require('./images/windows.png')}
          style={styles.ImageIconStyle}
        />
        <View style={styles.SeparatorLine} />
        <Text style={styles.TextStyle}> {buttonText} </Text>
      </TouchableOpacity>
    );
  }

  renderLinkedinButton(buttonText, opacity, height, width) {
    return (
      <TouchableOpacity style={[styles.LinkdnStyle, { height, width }]} activeOpacity={opacity} onPress={this.props.action}>
        <Image
          source={require('./images/linkedin.png')}
          style={styles.ImageIconStyle}
        />
        <View style={styles.SeparatorLine} />
        <Text style={styles.TextStyle}> {buttonText} </Text>
      </TouchableOpacity>
    );
  }

  render() {

    if (this.props.type == 'facebook') {
      return (
        <View>
          {this.renderFaceBookButton(this.props.text, this.props.opacity, this.props.height, this.props.width)}
        </View>
      );
    } else if (this.props.type == 'amazon') {
      return (
        <View>
          {this.renderAmazonButton(this.props.text, this.props.opacity, this.props.height, this.props.width)}
        </View>
      )
    } else if (this.props.type == 'linkedin') {
      return (
        <View>
          {this.renderLinkedinButton(this.props.text, this.props.opacity, this.props.height, this.props.width)}
        </View>)
    } else if (this.props.type == 'google') {
      return (
        <View>
          {this.renderGoogleButton(this.props.text, this.props.opacity, this.props.height, this.props.width)}
        </View>)
    } else if (this.props.type == 'microsoft') {
      return (
        <View>
          {this.renderMicrosoftButton(this.props.text, this.props.opacity, this.props.height, this.props.width)}
        </View>)
    } else if (this.props.type == 'github') {
      return (
        <View>
          {this.renderGithubButton(this.props.text, this.props.opacity, this.props.height, this.props.width)}
        </View>)
    }
    else {
      return (
        <View>
          {this.renderTwitterButton(this.props.text, this.props.opacity, this.props.height, this.props.width)}
        </View>)
    }
  }
}


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  GooglePlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 5,
  },
  AmazonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF9B00',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 5,
  },
  GithubStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 5,
  },
  FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 5,
    position: "absolute",
    marginTop: 500
  },
  LinkdnStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4875B4',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 5,
  },
  InstagramStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4E433C',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 5,
  },
  TwitterStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00acee',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 5,
  },
  MicrosoftStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0078d7',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 5,
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  TextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginRight: 20,
  },
  SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
});


