import Image from "next/image";
import { Box, Typography } from "@mui/material";

type AvatarProps = {
  name: string;
  picture?: string;
};

const Avatar = ({ name, picture }: AvatarProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ position: "relative", width: 12, height: 12, mr: 4 }}>
        {picture && (
          <Image
            src={picture}
            layout='fill'
            className='rounded-full'
            alt={name}
          />
        )}
      </Box>
      <Typography variant='h4' fontWeight='bold'>
        {name}
      </Typography>
    </Box>
  );
};

export default Avatar;
