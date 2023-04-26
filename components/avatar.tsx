import { useTheme, useMediaQuery } from "@mui/material";
import Image from "next/image";

type AvatarProps = {
  name: string;
  picture?: string;
};

const Avatar = ({ name, picture }: AvatarProps) => {
  const hasPicture = picture != null;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className='flex items-center'>
      <div className='w-12 h-12 flex mr-4'>
        {hasPicture ? (
          <Image
            src={picture}
            alt={name}
            width={isSmallScreen ? 36 : 48}
            height={isSmallScreen ? 36 : 48}
            layout='responsive'
            objectFit='cover'
            className='rounded-full'
          />
        ) : (
          <div
            className='rounded-full bg-gray-300'
            style={{
              width: isSmallScreen ? 36 : 48,
              height: isSmallScreen ? 36 : 48,
            }}
          />
        )}
      </div>
      <div
        className='text-base sm:text-xl font-bold'
        aria-label={`Avatar of ${name}`}
      >
        {name}
      </div>
    </div>
  );
};

export default Avatar;
