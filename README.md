### React Native Social Buttons

## Installation

```bash
yarn add react-native-social-buttons
or
npm install react-native-social-buttons
```

<p>
<img src="https://github.com/virtumonde/react-native-social-buttons/blob/master/react-native-social-buttons-preview.png?raw=true" width="50%"/>
</p>

## Basic Usage

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
