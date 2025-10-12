import { fonts, ThemeColors } from '@/src/shared/config';
import { Box, CrownIcon, Text } from '@/src/shared/ui';
import FireIcon from '@/src/shared/ui/icon/FireIcon';
import HeartIcon from '@/src/shared/ui/icon/HeartIcon';
import type { IconProps } from '@/src/shared/ui/icon/IconType';
import React from 'react';

type SectionType = {
  color: ThemeColors;
  value: string | number;
  IconComponent: React.ComponentType<IconProps>;
};

const Section = ({ color, value, IconComponent }: SectionType) => {
  return (
    <Box flexDirection="row" gap="s" alignItems="center">
      <IconComponent size={24} color={color} />
      <Text fontFamily={fonts.Inter_700Bold} color={color} variant="label">
        {value}
      </Text>
    </Box>
  );
};

const HeaderTitle = () => {
  const sections: SectionType[] = [
    { color: 'orange', value: 10, IconComponent: FireIcon },
    { color: 'red', value: 10, IconComponent: HeartIcon },
    { color: 'accent', value: 10100, IconComponent: CrownIcon },
  ];

  return (
    <Box flexDirection="row" alignItems="center" gap="xl">
      {sections.map((section, index) => (
        <Box key={`${section.color}-${index}`}>
          <Section {...section} />
        </Box>
      ))}
    </Box>
  );
};

export default HeaderTitle;
