import { useState } from "react";

type PressableOptions = {
    onPress?: () => void;
}

type PressableResult = {
    hovered: boolean;
    pressed: boolean;
    focused: boolean;

    pressableProps: {
        onMouseEnter: () => void;
        onMouseLeave: () => void;
        onMouseDown: () => void;
        onMouseUp: () => void;
        onFocus: () => void;
        onBlur: () => void;
        onClick: () => void;
    };
};

export const usePressable = (props?: PressableOptions): PressableResult => {
    const [hovered, setHovered] = useState<boolean>(false);
    const [pressed, setPressed] = useState<boolean>(false);
    const [focused, setFocused] = useState<boolean>(false);

    return {
        hovered,
        pressed,
        focused,

        pressableProps: {
            onMouseEnter: () => setHovered(true),
            onMouseLeave: () => { 
                setPressed(false); 
                setHovered(false);
            },

            onMouseDown: () => setPressed(true),
            onMouseUp: () => setPressed(false),

            onFocus: () => setFocused(true),
            onBlur: () => setFocused(false),
            
            onClick: () => {
                props?.onPress?.();
            }
        }
    }
}