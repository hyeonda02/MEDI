import { styled } from "styled-components";

const SearchInput = styled.input`
    width: 100%;
    border: 0.2vw solid #2a2a3a;
    border-radius: 1.5vw;
    background: #191b24;
    color: #484a64;
    outline: none;
    padding: 1vw 3vw 1vw 4vw;
    font-size: 1vw;
    align-items: center;
`;


const SearchInputContainer = ({ type, placeholder, onChange, value }) => {
    return (
        <SearchInput
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    );
};

export default SearchInputContainer;


