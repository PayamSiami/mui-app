import { Avatar as MuiAvatar } from "@mui/material";
import Stack from "@mui/material/Stack";
import { SxProps } from "@mui/material";

type Props = {
  sx?: SxProps<any> | undefined;
};

export default function Avatar(props: Props) {
  const { sx, ...other } = props;

  return (
    <Stack direction="row" spacing={2}>
      <MuiAvatar sx={sx} alt="Remy Sharp" src="/images/1.jpg" {...other} />
    </Stack>
  );
}
