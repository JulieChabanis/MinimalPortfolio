import { useMediaQuery } from "@mui/material";

const PaddingResizeSection = () => {
  const paddingSmall = "9% 7% 0% 7%";
  const paddingMedium = "9% 6% 0% 6%";
  const paddingLarge = "7% 15% 0% 15%";
  const paddingXLarge = "6% 13% 0% 13%";

  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isMediumScreen = useMediaQuery('(min-width: 601px) and (max-width: 959px)');
  const isLargeScreen = useMediaQuery('(min-width: 960px) and (max-width: 1299px)');
  const isXLargeScreen = useMediaQuery('(min-width: 1300px)');

  const getPadding = () => {
    if (isSmallScreen) {
      return paddingSmall;
    } else if (isMediumScreen) {
      return paddingMedium;
    } else if (isLargeScreen) {
      return paddingLarge;
    } else if (isXLargeScreen) {
      return paddingXLarge;
    }
  };

  return getPadding();
};

export default PaddingResizeSection;
