import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
    padding: 0 16px;
    height: 52px;
    background: ${({ theme }) => theme.colors.primary.main};
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    transition: background 0.2s ease-in;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: ${({ theme }) => theme.colors.primary.light};
    }
    &:active {
        background: ${({ theme }) => theme.colors.primary.dark};
    }

    &:disabled {
        background: #CCC;
        cursor: default;
    }

    ${({ theme, danger }) => danger && css`
        background: ${theme.colors.danger.main};

        &:hover {
        background: ${theme.colors.danger.light};
        }

        &:active {
            background: ${theme.colors.danger.dark};
        }
    `}

`;
