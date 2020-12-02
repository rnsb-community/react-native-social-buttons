### React Native Social Buttons

![](https://img.shields.io/npm/dm/react-native-social-buttons)
![](https://img.shields.io/npm/v/react-native-social-buttons)
![](https://img.shields.io/github/contributors/virtumonde/react-native-social-buttons)

<p>
<img src="https://github.com/virtumonde/react-native-social-buttons/blob/master/react-native-social-buttons-preview.png?raw=true" />
</p>

## Installation

```bash
npm install react-native-social-buttons
```

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

You can costumize the buttons using buttonViewStyle={...}, logoStyle={...} and textStyle={...}
