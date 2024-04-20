### React Native Social Buttons

![](https://img.shields.io/npm/dm/react-native-social-buttons)
![](https://img.shields.io/npm/v/react-native-social-buttons)
![](https://img.shields.io/github/contributors/virtumonde/react-native-social-buttons)
[![Expo Snack - Try Now](https://img.shields.io/badge/Expo%20Snack-Try%20Now-blue?style=flat&logo=expo)](https://snack.expo.dev/@angelxmoreno/react-native-social-buttons-example)

<div style="display: flex; justify-content: center;">
    <img src="/assets/with-snapchat.png" />
</div>

## Installation

```bash
yarn add react-native-social-buttons

or

npm install react-native-social-buttons
```

## Try It Live

Explore our buttons in action with a live example on Expo Snack:

[![Expo Snack - Try Now](https://img.shields.io/badge/Expo%20Snack-Try%20Now-blue?style=flat&logo=expo)](https://snack.expo.dev/@angelxmoreno/react-native-social-buttons-example)

Click the badge above to open the project in Expo Snack, where you can view and interact with the components directly in your browser or on your device.

## Basic Usage

```jsx
import React from "react";
import { View } from "react-native";
import { FacebookSocialButton } from "react-native-social-buttons";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <FacebookSocialButton onPress={() => {}} buttonViewStyle={...} logoStyle={...} textStyle={...} />
      </View>
    );
  }
}
```

You can customize the buttons using buttonViewStyle={...}, logoStyle={...} and textStyle={...}
