/// <reference types="react" />
import PropTypes from 'prop-types';
export declare type Variant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string;
export declare type ButtonVariant = Variant | 'link' | 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-danger' | 'outline-warning' | 'outline-info' | 'outline-dark' | 'outline-light';
export declare type Color = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'white' | 'muted';
export declare type Placement = import('react-overlays/usePopper').Placement;
export declare type ArrowProps = {
    ref: React.RefCallback<HTMLElement>;
    style: React.CSSProperties;
};
export declare type EventKey = string | number;
export declare type AlignDirection = 'start' | 'end';
export declare type ResponsiveAlignProp = {
    sm: AlignDirection;
} | {
    md: AlignDirection;
} | {
    lg: AlignDirection;
} | {
    xl: AlignDirection;
} | {
    xxl: AlignDirection;
};
export declare type AlignType = AlignDirection | ResponsiveAlignProp;
export declare const alignPropType: PropTypes.Requireable<AlignDirection | PropTypes.InferProps<{
    sm: PropTypes.Requireable<AlignDirection>;
}> | PropTypes.InferProps<{
    md: PropTypes.Requireable<AlignDirection>;
}> | PropTypes.InferProps<{
    lg: PropTypes.Requireable<AlignDirection>;
}> | PropTypes.InferProps<{
    xl: PropTypes.Requireable<AlignDirection>;
}> | PropTypes.InferProps<{
    xxl: PropTypes.Requireable<AlignDirection>;
}>>;
export declare type RootCloseEvent = 'click' | 'mousedown';
