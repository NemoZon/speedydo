import hexToRgba from '../../lib/tools/hexToRgba';

//
// Dark theme — accessible palette
//
const primary = '#121212'; // main app background
const onPrimary = '#EDEDED'; // default text on primary

const secondary = '#1E1E1E'; // surfaces/cards
const onSecondary = '#F5F5F5'; // text on secondary

const border = '#3F3F3F'; // dividers, strokes

const disabledBg = '#2A2A2A';
const disabledText = '#8A8A8A';

const invalidBg = '#2A1215'; // subtle red tint for dark bg
const invalidBorder = '#EF4444';
const invalidText = '#FFB4B4';

const readOnlyBg = '#2A2A2A';
const readOnlyText = '#AFAFAF';

// Accents
const accent = '#FFD900'; // gold/yellow – ranks/badges/progress
const accentDark = '#B88900';

const orange = '#ff8400';

// Semantic colors
const green = '#22C55E';
const greenDark = '#166534';

const blue = '#4C6EDB'; // info/selection

const redLight = '#F87171';
const red = '#EF4444';
const redDark = '#7F1D1D';

const black = '#0A0A0A';
const white = '#FFFFFF';

const colors = {
  // Bases
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

  border,
  border30: hexToRgba(border, 0.3),

  // States
  disabledBg,
  disabledBg10: hexToRgba(disabledBg, 0.1),
  disabledBg30: hexToRgba(disabledBg, 0.3),
  disabledText,

  invalidBg,
  invalidBg30: hexToRgba(invalidBg, 0.3),
  invalidBorder,
  invalidText,

  readOnlyBg,
  readOnlyBg30: hexToRgba(readOnlyBg, 0.3),
  readOnlyText,

  // Accent
  accent,
  accent30: hexToRgba(accent, 0.3),
  accentDark,
  accentDark30: hexToRgba(accentDark, 0.3),

  // Semantic
  green,
  green30: hexToRgba(green, 0.3),
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

  // Neutrals
  black,
  black30: hexToRgba(black, 0.3),
  white,

  orange,
} as const;

export default colors;
