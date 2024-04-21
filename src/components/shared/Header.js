
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headerImage from '@/assets/The Dragon News.png';
import { getCurrentDate } from '@/utils/getCurrentDate';
 
const Header = () => {
    const currentDate = getCurrentDate();
    return (
        <Box className = "w-full my-2">
            <Container>
                <Image className="mx-auto" src={headerImage} width={400} height={400}  alt="header img"></Image>
                <Typography color="gray" variant='body2' textAlign='center' className="my-2">
                    Journalism Without Fear or Favour
                </Typography>
                <Typography textAlign='center'>
                    {currentDate}
                </Typography>

            </Container>
        </Box>
    );
};

export default Header;