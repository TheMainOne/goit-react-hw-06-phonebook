import React from "react";
import PropTypes from "prop-types";
import { Input } from "./Filter.styled";

const Filter = ({ onSearchInput, value }) => {
  return (
    <Input
      placeholder="Type something to filter the contacts list"
      type="text"
      value={value}
      onChange={onSearchInput}
    />
  );
};

Filter.propTypes = {
  onSearchInput: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default Filter;
