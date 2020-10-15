"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const react_native_linear_gradient_1 = require("react-native-linear-gradient");
const GRADIENT_START = { x: 0, y: 0 };
const GRADIENT_END = { x: 1, y: 0 };
function Skeleton({ children, backgroundColor, speed, highlightColor }) {
    const animatedValue = React.useRef(new react_native_1.Animated.Value(0)).current;
    React.useEffect(() => {
        react_native_1.Animated.loop(react_native_1.Animated.timing(animatedValue, {
            toValue: 1,
            duration: speed,
            easing: react_native_1.Easing.ease,
            useNativeDriver: true,
        })).start();
    });
    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-350, 350]
    });
    const absoluteTranslateStyle = React.useMemo(() => (Object.assign(Object.assign({}, react_native_1.StyleSheet.absoluteFillObject), { transform: [{ translateX }] })), [translateX]);
    const gradientColors = React.useMemo(() => [
        backgroundColor,
        highlightColor,
        backgroundColor
    ], [backgroundColor, highlightColor]);
    const viewStyle = React.useMemo(() => ({ backgroundColor, overflow: "hidden" }), [backgroundColor]);
    const getChildren = React.useCallback((element) => {
        return React.Children.map(element, (child, index) => {
            if (!child) {
                return null;
            }
            let style = {};
            if (child.type && child.type.displayName === "SkeletonItem") {
                const _a = child.props, { children } = _a, styles = __rest(_a, ["children"]);
                style = styles;
            }
            else if (child.props && child.props.style) {
                style = child.props.style;
            }
            if (child.props && child.props.children) {
                return (<react_native_1.View key={index} style={style}>
                        {getChildren(child.props.children)}
                    </react_native_1.View>);
            }
            else {
                return (<react_native_1.View key={index} style={styles.childContainer}>
                        <react_native_1.View style={[style, viewStyle]}>
                            <react_native_1.Animated.View style={[
                    react_native_1.StyleSheet.absoluteFill,
                    {
                        transform: [{ translateX }]
                    }
                ]}>
                                <react_native_linear_gradient_1.default style={styles.gradient} colors={gradientColors} start={GRADIENT_START} end={GRADIENT_END}/>
                            </react_native_1.Animated.View>
                        </react_native_1.View>
                    </react_native_1.View>);
            }
        });
    }, [viewStyle, absoluteTranslateStyle, gradientColors]);
    return <React.Fragment>{getChildren(children)}</React.Fragment>;
}
exports.default = Skeleton;
Skeleton.Item = (_a) => {
    var { children } = _a, style = __rest(_a, ["children"]);
    return (<react_native_1.View style={style}>{children}</react_native_1.View>);
};
//@ts-ignore
Skeleton.Item.displayName = "SkeletonItem";
Skeleton.defaultProps = {
    backgroundColor: "#E1E9EE",
    highlightColor: "#F2F8FC",
    speed: 800
};
const styles = react_native_1.StyleSheet.create({
    childContainer: {
        position: 'relative'
    },
    gradient: {
        flex: 1,
    },
});
//# sourceMappingURL=Skeleton.js.map