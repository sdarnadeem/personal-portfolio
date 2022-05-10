import styled from "styled-components";

export const Nav = styled.nav`
  width: 100vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.25);
  -webkit-backdrop-filter: blur(4px);
  -moz-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: fixed;
  z-index: 2;

  ul {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    list-style: none;

    @media screen and (max-width: 900px) {
      display: none;
    }

    li {
      margin: 0 1rem;
      cursor: pointer;
      flex-direction: column;

      div {
        width: 5px;
        height: 5px;
        background: transparent;
        border-radius: 50%;

        margin: 0 auto 5px;
      }

      a {
        color: ${({ theme }) => theme.colors.grayColor};
        text-decoration: none;
        flex-direction: column;
        text-transform: uppercase;
        font-weight: 500;

        transition: all 0.3s ease-in-out;

        &:hover {
          color: ${({ theme }) => theme.colors.secondaryColor};
        }
      }
      &:hover {
        div {
          background-color: ${({ theme }) => theme.colors.secondaryColor};
        }
      }
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90px;
  height: 20px;
  position: relative;

  @media screen and (min-width: 2000px) {
    width: 180px;
    height: 40px;
  }
`;

export const Menu = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.secondaryColor};

  svg {
    width: 70%;
    height: 70%;
    color: ${({ theme }) => theme.colors.whiteColor};
  }

  div {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 5;

    padding: 1rem;

    width: 80%;
    height: 100vh;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;

    background: url(${({ bg }) => bg});
    background-color: ${({ theme }) => theme.colors.whiteColor};
    background-size: cover;
    background-repeat: repeat;

    box-shadow: 0 0 20px rgba(168, 168, 168, 0.15);

    svg {
      width: 35px;
      height: 35px;
      color: ${({ theme }) => theme.colors.secondaryColor};
      margin: 0.5rem 1rem;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;

      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      @media screen and (min-width: 900px) {
        display: none;
      }

      div {
        display: none;
      }

      a {
        color: ${({ theme }) => theme.colors.grayColor};
        text-decoration: none;
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: 500;

        transition: all 0.3s ease-in-out;

        &:hover {
          color: ${({ theme }) => theme.colors.secondaryColor};
        }
      }
    }
    @media screen and (min-width: 900px) {
      display: none;
    }
  }
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
