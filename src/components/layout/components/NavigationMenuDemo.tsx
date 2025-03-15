import { DesignServices, ProgrammingServices } from "@/constants/page";
import { CaretDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { NavigationMenu } from "radix-ui";
import "./navStyles.css";

const NavigationMenuDemo = () => {
  const t = useTranslations("Shared");

  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <Link className="NavigationMenuLink" href="/" prefetch={true}>
            {t("Home")}
          </Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Link className="NavigationMenuLink" href="/about-us" prefetch={true}>
            {t("About")}
          </Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="NavigationMenuItem">
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            {t("Programming_Development")}{" "}
            <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              {ProgrammingServices.map((item, index) => (
                <ListItem title={t(item.title)} path={item.path} key={index} />
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="NavigationMenuItem">
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            {t("Design_Marketing")}{" "}
            <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List two">
              {DesignServices.map((item, index) => (
                <ListItem title={t(item.title)} path={item.path} key={index} />
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

const ListItem = ({ title, path, ...props }) => {
  return (
    <li>
      <NavigationMenu.Link asChild>
        <Link
          prefetch={true}
          href={path}
          className={classNames("ListItemLink")}
          {...props}
        >
          <div className="ListItemHeading">{title}</div>
        </Link>
      </NavigationMenu.Link>
    </li>
  );
};

export default NavigationMenuDemo;
