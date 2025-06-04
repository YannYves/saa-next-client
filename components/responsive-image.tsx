import { Box } from "@mui/material";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  isFeatured: boolean;
};

export default function ResponsiveImage({ src, alt, isFeatured }: Props) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs: isFeatured ? "300px" : "200px",
          sm: isFeatured ? "400px" : "300px",
          md: isFeatured ? "600px" : "400px",
        },
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{
          objectFit: "cover",
        }}
        priority={isFeatured}
      />
    </Box>
  );
}
