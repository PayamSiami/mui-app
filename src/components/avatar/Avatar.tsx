import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { SxProps } from "@mui/material";

type Props = {
  sx?: SxProps<any> | undefined;
};

export default function ImageAvatar(props: Props) {
  const { sx, ...other } = props;

  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ ...sx }} alt="Remy Sharp" src="/images/1.jpg" {...other} />
    </Stack>
  );
}
