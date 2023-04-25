import { Typography } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <Typography variant='h4' fontWeight='bold' mb={4} mt={8}>
      <Link href={"/"} className='hover:underline'>
        Blog
      </Link>
    </Typography>
  );
};

export default Header;
