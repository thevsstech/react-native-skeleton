## Skeleton

Skeleton is a React Native library to easily create an amazing loading effect. [ANDROID & IOS]

![](https://i.imgur.com/3aDeSTZ.gif)

<div style="background-color:#84d2ef80; padding: 20px; border-radius: 4px; color: #14485b">This package includes the dependency **react-native-linear-gradient**
</div>

### Installation

> Note: If your project already includes the **react-native-linear-gradient** you can skip the Step #1

###### Step #1

Using yarn:

```bash
yarn add @thevsstech/react-native-skeleton
```

Using npm:

```bash
npm install @thevsstech/react-native-skeleton --save
```

If you are running a **react-native** version below 0.60:

```bash
react-native link react-native-linear-gradient
```

Otherwise:

```bash
cd ios
pod install
```

&nbsp;&nbsp;

###### Step #2

Using yarn:

```bash
yarn add react-native-skeleton-placeholder
```

Using npm:

```bash
npm install react-native-skeleton-placeholder --save
```

### Usage

There are two ways to use this package:

with **SkeletonPlacehoder.Item** 🆕

```javascript
import React from "react";
import { View } from "react-native";
import Skeleton from "@thevsstech/react-native-skeleton";

const App = () => {
  return (
    <Skeleton>
      <Skeleton.Item flexDirection="row" alignItems="center">
        <Skeleton.Item width={60} height={60} borderRadius={50} />
        <Skeleton.Item marginLeft={20}>
          <Skeleton.Item width={120} height={20} borderRadius={4} />
          <Skeleton.Item
            marginTop={6}
            width={80}
            height={20}
            borderRadius={4}
          />
        </Skeleton.Item>
      </Skeleton.Item>
    </Skeleton>
  );
};
```

or with **View**

```javascript
import React from "react";
import { View } from "react-native";
import Skeleton from "@thevsstech/react-native-skeleton";

const App = () => {
  return (
    <Skeleton>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ width: 60, height: 60, borderRadius: 50 }} />
        <View style={{ marginLeft: 20 }}>
          <View style={{ width: 120, height: 20, borderRadius: 4 }} />
          <View
            style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
          />
        </View>
      </View>
    </Skeleton>
  );
};
```

### Properties

#### Skeleton

|      Prop       |                  Description                   |  Type  |  Default  |
| :-------------: | :--------------------------------------------: | :----: | :-------: |
| backgroundColor |      Determines the color of placeholder       | string | _#E1E9EE_ |
| highlightColor  | Determines the highlight color of placeholder  | string | _#F2F8FC_ |
|      speed      | Determines the animation speed in milliseconds | number |   _800_   |

#### Skeleton.Item

| Prop |            Description            | Type | Default |
| :--: | :-------------------------------: | :--: | :-----: |
| any  | Any view style props was accepted | any  |

### Contributing

Any help this module will be appreciated!

### License

[MIT](https://choosealicense.com/licenses/mit/)
