import styled from 'styled-components';

export default styled.input`
    width: 100%;
    height: 52px;
    background: #fff;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    padding: 0 16px;
    border: 2px solid #fff;
    outline: none;
    font-size: 16px;
    transition: border-color 0.2s ease-in;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary.main};
    }
`;
