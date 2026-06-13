import React, { useState } from "react";
import { resolveSx } from "../../system";
import { Flow } from "../Flow";
import { Checkbox } from "../Checkbox";
import { Typography } from "../Typography";

type RadioOption<T> = {
  id?: string;
  label?: string;
  value: T;
  disabled?: boolean;
};

type RadioGroupProps<T> = {
  sx?: any;
  title?: string;
  options: RadioOption<T>[];
  value?: T;
  defaultValue?: T;
  direction?: "horizontal" | "vertical";
  onChange?: (value: T) => void;
};

export function RadioGroup<T extends string | number | boolean>({
  sx,
  title,
  options,
  value,
  defaultValue,
  direction = "vertical",
  onChange,
}: RadioGroupProps<T>) {
  const resolvedStyle = resolveSx(sx);

  const isControlled = value !== undefined;

  const [internalValue, setInternalValue] = useState<T | undefined>(
    defaultValue,
  );

  const currentValue = isControlled ? value : internalValue;

  const handleChange = (next: T) => {
    if (!isControlled) {
      setInternalValue(next);
    }

    onChange?.(next);
  };

  return (
    <Flow style={{ ...resolvedStyle }} direction="vertical" role="radiogroup">
      {title && <Typography variant="h4">{title}</Typography>}

      <Flow direction={direction}>
        {options.map((option, index) => {
          const selected = option.value === currentValue;

          return (
            <Checkbox
              role="radio"
              key={String(option.id) ?? String(option.value) ?? index}
              variant="round"
              label={option.label ?? String(option.value)}
              disabled={!!option.disabled}
              checked={selected}
              onChange={() => handleChange(option.value)}
            />
          );
        })}
      </Flow>
    </Flow>
  );
}
