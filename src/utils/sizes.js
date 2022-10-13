export const sizes = {
  mobile: "500px",
  medium: "800px",
  tablet: "1300px",
  desktop: "1440px",
};

export const devices = {
  mobile: `(max-width: ${sizes.mobile})`,
  medium: `(max-width: ${sizes.medium})`,
  tablet: `(max-width: ${sizes.tablet})`,
  desktop: `(min-width: ${sizes.desktop})`,
};
