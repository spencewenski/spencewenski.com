import { TextField, TextFieldProps } from "@mui/material";
import { StateObjects } from "@/model/FormTypes";
import { useMemo, useState } from "react";
import { formLabelToId } from "@/utils/form-utils";

export type Props = {
  id?: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  error?: () => boolean;
  helperText?: () => string;
  state: StateObjects<string>;
  minRows?: number;
  type?: TextFieldProps["type"];
};

export default function CustomTextField({
  id,
  label,
  disabled,
  required,
  error,
  helperText,
  state,
  minRows,
  type,
}: Props) {
  const [touched, setTouched] = useState<boolean>(false);

  const inputId = useMemo(() => {
    return formLabelToId(label, id);
  }, [label, id]);

  return (
    <TextField
      id={inputId}
      label={label}
      fullWidth
      multiline={!!minRows}
      minRows={minRows}
      variant={"outlined"}
      required={required}
      type={type}
      disabled={disabled !== undefined ? disabled : false}
      value={state.value}
      onChange={(event) => {
        state.setValue(!!event.target.value ? event.target.value : "");
      }}
      error={touched && !!error && error()}
      helperText={touched && !!error && error() && !!helperText && helperText()}
      InputLabelProps={{ shrink: true }}
      onBlur={() => setTouched(true)}
    />
  );
}
