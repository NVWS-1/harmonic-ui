import { useState } from "react";

type PressableOptions = {
    onPress?: () => void;
    disabled?: boolean;
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

    const disabled = props?.disabled ?? false;

    const guard = (fn: () => void) => {
        if (!disabled) fn();
    };

    return {
        hovered,
        pressed,
        focused,
        
        pressableProps: {
            onMouseEnter: () => guard(() => setHovered(true)),
            onMouseLeave: () => { 
                if (disabled) return;
                setPressed(false); 
                setHovered(false);
            },

            onMouseDown: () => guard(() => setPressed(true)),
            onMouseUp: () => guard(() => setPressed(false)),

            onFocus: () => guard(() => setFocused(true)),
            onBlur: () => guard(() => setFocused(false)),
            
            onClick: () => guard(() => props?.onPress?.()),
        }
    }
}