import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, Box } from '@mui/material';
import { formControlStyles, filterControlBoxStyles } from './FilterControlStyles';

interface FilterControlProps {
  filterOption: string;
  setFilterOption: (value: string) => void;
}

const FilterControl: React.FC<FilterControlProps> = ({ filterOption, setFilterOption }) => {
  return (
    <Box sx={filterControlBoxStyles}>
      <FormControl sx={formControlStyles}>
        <InputLabel id="filter-label">Filter</InputLabel>
        <Select
          labelId="filter-label"
          value={filterOption}
          onChange={(e) => setFilterOption(e.target.value as string)}
          label="Filter"
        >
          <MenuItem value="all">All Tasks</MenuItem>
          <MenuItem value="completed">Completed Tasks</MenuItem>
          <MenuItem value="pending">Pending Tasks</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterControl;
