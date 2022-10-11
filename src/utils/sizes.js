export const sizes = {
  mobile: "500px",
  medium: "800px",
  desktop: "1440px",
};

export const devices = {
  mobile: `(max-width: ${sizes.mobile})`,
  medium: `(max-width: ${sizes.medium})`,
  desktop: `(min-width: ${sizes.desktop})`,
};
