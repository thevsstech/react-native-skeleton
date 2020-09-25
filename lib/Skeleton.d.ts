/// <reference types="react" />
import { ViewStyle } from "react-native";
interface SkeletonProps {
    /**
     * Determines component's children.
     */
    children: JSX.Element | JSX.Element[];
    /**
     * Determines the color of placeholder. By default is #E1E9EE
     */
    backgroundColor?: string;
    /**
     * Determines the highlight color of placeholder. By default is #F2F8FC
     */
    highlightColor?: string;
    /**
     * Determines the animation speed in milliseconds. By default is 800
     */
    speed?: number;
}
declare function Skeleton({ children, backgroundColor, speed, highlightColor }: SkeletonProps): JSX.Element;
declare namespace Skeleton {
    var Item: ({ children, ...style }: SkeletonItemInterface) => JSX.Element;
    var defaultProps: {
        backgroundColor: string;
        highlightColor: string;
        speed: number;
    };
}
export default Skeleton;
interface SkeletonItemInterface extends ViewStyle {
    children?: JSX.Element | JSX.Element[];
}
//# sourceMappingURL=Skeleton.d.ts.map