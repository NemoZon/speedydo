import { Box, Text } from '@/src/shared/ui';
import React from 'react';

type ChapterProps = {
  part: number;
  title: string;
  description: string;
  icon?: 'selected' | 'unselected' | 'bookmark';
};

const Chapter = ({ part, title, description, icon = 'unselected' }: ChapterProps) => {
  return (
    <Box flexDirection="row">
      <Box>
        <Text variant="h3">Часть {part}: Разное</Text>
      </Box>
    </Box>
  );
};

export default Chapter;
