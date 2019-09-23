import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography } from '@material-ui/core';

const VariantSelector = props => {
  const { option } = props;
  return (
    <Box display="flex" flexDirection="column">
      <Box mr="1em">
        <Typography variant="overline">{option.name}:</Typography>
      </Box>
      <Box>
        <Select
          variant="outlined"
          key={option.id}
          onChange={props.onChange}
          inputProps={{
            name: option.name,
            id: option.name,
          }}
          value={props.value}
          margin="dense"
          required
        >
          {option.values.map(value => (
            <MenuItem
              value={value}
              key={`${option.name}-${value}`}
            >{`${value}`}</MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
  );
};

VariantSelector.propTypes = {
  onChange: PropTypes.func,
  option: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default VariantSelector;
