import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "./Input";
import Button from "./Button";
import LookingGlass from "../images/LookingGlass.png";
import { productSearch } from "../redux/actions/mainPageActions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const searchBarProps = {
    id: 'searchBar',
    name: '',
    placeholder: 'Busque por um produto',
    fieldValue: searchQuery,
    setFieldValue: setSearchQuery,
  };

  const lookingGlassIMG = <img src={LookingGlass} alt="Looking Glass" style={{ width: '32px', height: '32px' }} />;

  const searchButtonProps = {
    id: 'SearchButton',
    name: lookingGlassIMG,
    onClick: () => {
      dispatch(productSearch(searchQuery));
      setSearchQuery('');
    },
  }
  return(
    <div style={{ display: 'flex' }}>
      <Input {...searchBarProps} />
      <Button {...searchButtonProps} />
    </div>
  );
};

export default SearchBar;
