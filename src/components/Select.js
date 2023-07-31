import styled from 'styled-components';

export default styled.select`
    width: 100%;
    height: 52px;
    background: #fff;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
    border: none;
    border-radius: 4px;
    padding: 0 16px;
    border-color: 2px solid #fff;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary.main};
    }
`;
