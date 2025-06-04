import { Avatar as MuiAvatar, Box, Typography } from "@mui/material";
import Image from "next/image";

type Props = {
  name: string;
  profile_image: string;
};

export default function Avatar({ name, profile_image }: Props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {profile_image ? (
        <MuiAvatar
          sx={{
            width: { xs: 40, sm: 48 },
            height: { xs: 40, sm: 48 },
            mr: 2,
          }}
        >
          <Image
            src={profile_image}
            alt={name}
            width={48}
            height={48}
            style={{ objectFit: "cover" }}
          />
        </MuiAvatar>
      ) : (
        <MuiAvatar
          sx={{
            width: { xs: 40, sm: 48 },
            height: { xs: 40, sm: 48 },
            mr: 2,
            bgcolor: "grey.300",
          }}
        />
      )}
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1rem", sm: "1.25rem" },
        }}
      >
        {name}
      </Typography>
    </Box>
  );
}
