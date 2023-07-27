import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 32px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
        font-size: 24px;
    }

    a {
        color: ${({ theme }) => theme.colors.primary.main};
        text-decoration: none;
        border: 2px solid ${({ theme }) => theme.colors.primary.main};
        padding: 8px 16px;
        border-radius: 4px;
        font-weight: bold;
        transition: all 0.2s ease-in;

        &:hover {
            background: ${({ theme }) => theme.colors.primary.main};
            color: ${({ theme }) => theme.colors.background}
        }
    }
`;

export const ListContainer = styled.div`
    margin-top: 24px;

    header {
        margin-bottom: 16px;
        button {
            background: transparent;
            border: none;
            display: flex;
            align-items: center;
        }

        span {
            font-weight: bold;
            margin-right: 8px;
            color: ${({ theme }) => theme.colors.primary.main};
        }
    }
`;

export const Card = styled.div`
    background-color: #fff;
    padding: 16px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + & {
        margin-top: 16px;
    }

    .info{
        .contact-name{
            display: flex;
            align-items: center;

            small {
                background: ${({ theme }) => theme.colors.primary.lighter};
                color: ${({ theme }) => theme.colors.primary.main};
                font-weight: bold;
                text-transform: uppercase;
                margin-left: 8px;
                padding: 4px;
                border-radius: 4px;
            }
        }

        span {
            display: block;
            font-size: 14px;
            color: ${({ theme }) => theme.colors.gray[200]};
        }
    }

    .actions {
        display: flex;
        align-items: center;

        button {
            background: transparent;
            border: none;
            margin-left: 8px;
        }
    }
`;
