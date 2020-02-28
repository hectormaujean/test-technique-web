import React from 'react';

import styled from 'styled-components';

const Search = styled.input`
    font-family: "Lato";
    border: 1px solid rgba(34,36,38,.15);
    border-radius: 12px;
    padding: 9px 15px;
    &:focus {
        outline: none;
        border-color: #85B7D9;
    } 
`;

const SearchBar = ({
    onChange
}) => (
    <Search type="search" onChange={onChange} />
)

export default SearchBar;