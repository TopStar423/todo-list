import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, Box, Typography } from '@mui/material';
import { sortControlStyles, formControlStyles, typographyStyles } from './SortControlStyles';

interface SortControlProps {
  sortOption: string;
  setSortOption: (value: string) => void;
  sortDirection: 'asc' | 'desc';
  setSortDirection: (value: 'asc' | 'desc') => void;
}

const SortControl: React.FC<SortControlProps> = ({
  sortOption,
  setSortOption,
  sortDirection,
  setSortDirection,
}) => {
  return (
    <Box sx={sortControlStyles}>
      <Typography sx={typographyStyles} variant="body1">
        Sort By:
      </Typography>
      <Box display="flex" gap={2} flexDirection={{ xs: 'column', sm: 'row' }} alignItems="center">
        <FormControl sx={formControlStyles}>
          <InputLabel id="sort-label">Criteria</InputLabel>
          <Select
            labelId="sort-label"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as string)}
            label="Criteria"
          >
            <MenuItem value="dueDate">Due Date</MenuItem>
            <MenuItem value="status">Status (Completed)</MenuItem>
            <MenuItem value="description">Description</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={formControlStyles}>
          <InputLabel id="sort-direction-label">Direction</InputLabel>
          <Select
            labelId="sort-direction-label"
            value={sortDirection}
            onChange={(e) => setSortDirection(e.target.value as 'asc' | 'desc')}
            label="Direction"
          >
            <MenuItem value="asc">Ascending</MenuItem>
            <MenuItem value="desc">Descending</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default SortControl;
