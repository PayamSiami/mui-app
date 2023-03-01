import * as React from "react";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Stack,
  Checkbox as MuiCheckbox,
  FormControlLabel,
} from "@mui/material";

type Props = {
  label: string;
  icon: any;
  checkedIcon: any;
};

function CustomCheckbox(props: Props) {
  const { label, icon, checkedIcon } = props;
  return (
    <FormControlLabel
      label={label}
      control={
        <MuiCheckbox defaultChecked icon={icon} checkedIcon={checkedIcon} color="primary"/>
      }
    />
  );
}

type CheckboxProps = {
  label: string;
};

export default function Checkbox(props: CheckboxProps) {
  const { label } = props;

  return (
    <Stack>
      <CustomCheckbox
        label={label}
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
    </Stack>
  );
}
