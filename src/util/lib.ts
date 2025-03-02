export function displayCurrentYear() {
  return new Date().getFullYear();
}

export const goToWhatsApp = (isGerman: boolean) => {
  window.open(
    `${isGerman ? "http://wa.me/491784740741" : "http://wa.me/96877276659"}`,
    "_target"
  );
};

export const goToSite = (link: string) => {
  window.open(link, "_target");
};

export function isZeroOrEven(number) {
  return number % 2 === 0;
}
