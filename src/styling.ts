// for common text styles:
export const textStyle = function (
  fontWeight: string | number | {} | null = null,
  fontSize: string | number | {} | null = null,
  textTransform: string | null = null,
  fontStyle: string | null = null
) {
  return {
    color: "white",
    fontFamily: "Poppins, Arial",
    fontWeight: fontWeight,
    textTransform: textTransform,
    fontSize: fontSize,
    fontStyle: fontStyle,
  };
};

export const serviceImageStyle = function (
  position: string,
  width: string | {},
  marginLeft: string | {}
) {
  return {
    position: position,
    width: width,
    marginLeft: marginLeft,
  };
};
