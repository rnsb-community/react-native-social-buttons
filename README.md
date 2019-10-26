### React Native Social Icons

## Installation

```bash
yarn add react-native-social-buttons
or
npm install react-native-social-buttons
```

## Basic Usage

Just Import and use <SocialButton> Component in your react-native expo as well as ejected apps
a basic example is as below

```jsx
import React from "react";
import { View, Alert } from "react-native";
import { FacebookSocialButton } from "react-native-social-buttons";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <FacebookSocialButton onPress={() => {}} />
      </View>
    );
  }
}
```

You can styles to the buttons using style={...}

##Screenshots

<p>
<img src="https://i.imgur.com/0i3JNJq.png"  style="border: 0; width: 86%; min-width: 240px; max-width: 100%;" />
</p>
