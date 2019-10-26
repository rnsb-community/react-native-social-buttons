### React Native Social Buttons

<p>
<img src="https://github.com/virtumonde/react-native-social-buttons/blob/master/preview.png?raw=true"  style="border: 0; width: 30%; min-width: 240px; max-width: 40%;" />
</p>

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
import { View } from "react-native";
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
