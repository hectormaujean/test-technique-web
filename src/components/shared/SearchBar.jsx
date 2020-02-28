import React from 'react';

import styled from 'styled-components';

const Search = styled.input`
    font-family: "Lato";
    border: 1px solid rgba(34,36,38,.15);
    border-radius: 12px;
    padding: 9px 15px;
    width: 300px;
    text-align: center;
    &:focus {
        outline: none;
        border-color: #85B7D9;
    } 
`;

const SearchBar = ({
    onChange,
    placeholder
}) => (
    <Search type="search" onChange={onChange} placeholder={placeholder} />
)

export default SearchBar;