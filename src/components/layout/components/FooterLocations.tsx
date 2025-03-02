import { Grid, Box, Typography } from "@mui/material";
import email from "../../../../public/image/email.png";
import phoneURL from "../../../../public/image/phone.png";
import locationURL from "../../../../public/image/location.png";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const FooterLocations = () => {
  const t = useTranslations("footer");

  return (
    <Grid
      item
      xs={12}
      md={4}
      sx={{
        display: "flex",
        alignItems: { xs: "flex-start", md: "center" },
        gap: "3.2rem",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: { xs: "2rem", md: "3.2rem" },
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            // fontFamily: "var(--font-ibm-plex-sans-arabic)",
            fontSize: { xs: "2rem", md: "1.6rem" },
            fontWeight: 700,
            lineHeight: "2.2rem",
            color: "#e1e42a",
          }}
        >
          {t("locations")}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2.4rem",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Kumbh Sans, sans-serif",
              fontSize: "1.6rem",
              fontWeight: 400,
              lineHeight: "1.6rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Image src={email} alt="email" width={34} height={34} />

            <a href="mailto:contact@inbrief.click" style={{ color: "white" }}>
              {t("email")}
            </a>
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: ".8rem",
            }}
          >
            <FooterLocation
              city={t("location1.city")}
              location={t("location1.location")}
            />
            <FooterPhone
              phoneText={t("location1.phone")}
              phoneNumber="966552647805"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: ".8rem",
            }}
          >
            <FooterLocation
              city={t("location2.city")}
              location={t("location2.location")}
            />
            <FooterPhone
              phoneText={t("location2.phone")}
              phoneNumber="96550337772"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: ".8rem",
            }}
          >
            <FooterLocation
              city={t("location3.city")}
              location={t("location3.location")}
            />
            <FooterPhone
              phoneText={t("location3.phone")}
              phoneNumber="96877276659"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: ".8rem",
            }}
          >
            <FooterLocation
              city={t("location4.city")}
              location={t("location4.location")}
            />
            <FooterPhone
              phoneText={t("location4.phone")}
              phoneNumber="491784740741"
            />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default FooterLocations;

const FooterLocation = ({
  city,
  location,
}: {
  city: string;
  location: string;
}) => {
  const locale = useLocale();

  return (
    <Typography
      variant="body2"
      sx={{
        fontFamily: "Kumbh Sans, sans-serif",
        fontSize: "1.6rem",
        fontWeight: 400,
        lineHeight: locale === "ar" ? "1.6rem" : "2.2rem",
        display: "flex",
        alignItems: "flex-start",
        gap: "1rem",
      }}
    >
      <Image src={locationURL} alt="location" width={34} height={34} />
      <span style={{ lineHeight: "2rem" }}>
        <strong>{city}</strong> : {location}
      </span>
    </Typography>
  );
};

const FooterPhone = ({
  phoneText,
  phoneNumber,
}: {
  phoneText: string;
  phoneNumber: string;
}) => {
  return (
    <Typography
      variant="body2"
      sx={{
        fontFamily: "Kumbh Sans, sans-serif",
        fontSize: "1.6rem",
        fontWeight: 400,
        lineHeight: "1.6rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Image src={phoneURL} alt="phone" width={34} height={34} />

      <strong>
        <a
          href={`http://wa.me/${phoneNumber}`}
          target="_blank"
          style={{ color: "white" }}
        >
          {phoneText}
        </a>
      </strong>
    </Typography>
  );
};
