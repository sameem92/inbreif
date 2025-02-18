import Home from "@/components/marketing/Home";
import { Box } from "@mui/material";
import Design from "@/components/marketing/Design";

export const metadata = {
  title: "تصميم جرافيك وموشن احترافي | شركة إن بريف للبرمجة والتسويق",
  description:
    "أفضل شركة تصميم فيديو موشن جرافيك، نقدم لك تصميمات جرافيك وموشن جرافيك احترافية لعلامتك التجارية بأسعار مناسبة، تواصل معنا.",
};

export default function Main() {
  return (
    <>
      <Home />
      <Box id="motion">
        <Design />
      </Box>
    </>
  );
}
