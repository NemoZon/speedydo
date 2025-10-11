import hexToRgba from '../../lib/tools/hexToRgba';

const primary = '#232323';
const onPrimary = '#B7B7B7';

const secondary = '#1E1E1E';
const onSecondary = '#FFFFFF';

const disabledBg = '#2A2A2A';
const disabledText = '#7A7A7A';
const invalidBg = '#FFEBEB';
const invalidBorder = '#FF4D4F';
const invalidText = '#C40000';
const readOnlyBg = '#333333';
const readOnlyText = '#AAAAAA';

const greenLight = '#00992B';
const greenDark = '#005017';

const blue = '#9FB7FF';

const redLight = '#FF5858';

const red = '#CF0000';

const redDark = '#830000';

const black = '#0a0a0a';

const white = '#FFFFFF';

const colors = {
  primary,
  primary10: hexToRgba(primary, 0.1),
  primary30: hexToRgba(primary, 0.3),
  primary50: hexToRgba(primary, 0.5),
  primary70: hexToRgba(primary, 0.7),
  onPrimary,
  onPrimary10: hexToRgba(onPrimary, 0.1),
  onPrimary30: hexToRgba(onPrimary, 0.3),
  onPrimary50: hexToRgba(onPrimary, 0.5),
  onPrimary70: hexToRgba(onPrimary, 0.7),

  secondary,
  secondary10: hexToRgba(secondary, 0.1),
  secondary30: hexToRgba(secondary, 0.3),
  secondary50: hexToRgba(secondary, 0.5),
  secondary70: hexToRgba(secondary, 0.7),
  onSecondary,
  onSecondary10: hexToRgba(onSecondary, 0.1),
  onSecondary30: hexToRgba(onSecondary, 0.3),
  onSecondary50: hexToRgba(onSecondary, 0.5),
  onSecondary70: hexToRgba(onSecondary, 0.7),

  disabledBg,
  disabledBg10: hexToRgba(disabledBg, 0.1),
  disabledBg30: hexToRgba(disabledBg, 0.3),

  invalidBg,
  invalidBg30: hexToRgba(invalidBg, 0.3),

  disabledText,
  invalidBorder,
  invalidText,
  readOnlyBg,
  readOnlyText,

  readOnlyBg30: hexToRgba(readOnlyBg, 0.3),

  greenLight,
  greenLight30: hexToRgba(greenLight, 0.3),

  greenDark,
  greenDark30: hexToRgba(greenDark, 0.3),

  blue,
  blue30: hexToRgba(blue, 0.3),

  redLight,
  redLight30: hexToRgba(redLight, 0.3),

  red,
  red30: hexToRgba(red, 0.3),

  redDark,
  redDark30: hexToRgba(redDark, 0.3),

  black,
  black30: hexToRgba(black, 0.3),

  white,
} as const;

export default colors;
