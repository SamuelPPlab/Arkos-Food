import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "./Input";
import Button from "./Button";
import LookingGlass from "../images/LookingGlass.png";
import { productSearch } from "../redux/actions/mainPageActions";
import './searchInputBox.css';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const searchBarProps = {
    id: 'searchBar',
    name: '',
    placeholder: 'Busque por um produto',
    fieldValue: searchQuery,
    setFieldValue: setSearchQuery,
    className: 'searchInputBox clearPlaceholderText',
  };

  const lookingGlassIMG = <img src={LookingGlass} alt="Looking Glass" style={{ width: '32px', height: '32px' }} />;

  const searchButtonProps = {
    id: 'SearchButton',
    name: lookingGlassIMG,
    onClick: () => {
      dispatch(productSearch(searchQuery));
      setSearchQuery('');
    },
    style: {
      height: '56px',
      width: '88px',
      marginTop: '80px',
      background: '#3655C7',
      borderRadius: '20px',
    }
  }
  return(
    <div style={{ display: 'flex', width: '60%' }}>
      <Input {...searchBarProps} />
      <Button {...searchButtonProps} />
    </div>
  );
};

export default SearchBar;
