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
  const size = isSmallScreen ? 36 : 48;

  return (
    <div className="flex items-center">
      <div className="w-6 h-6 sm:w-12 sm:h-12 flex mr-4">
        {hasPicture ? (
          <Image
            src={picture}
            alt={name}
            width={size}
            height={size}
            className="rounded-full object-cover"
            style={{
              width: size,
              height: size,
            }}
          />
        ) : (
          <div
            className="rounded-full bg-gray-300"
            style={{
              width: size,
              height: size,
            }}
          />
        )}
      </div>
      <div
        className="text-base sm:text-xl font-bold"
        aria-label={`Avatar of ${name}`}
      >
        {name}
      </div>
    </div>
  );
};

export default Avatar;
