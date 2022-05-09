import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .cards {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-wrap: wrap-reverse; */
    margin: 4rem 2rem 2rem;
    flex-direction: row;

    .card:last-child {
      background-color: #f2f7fb;

      @media screen and (min-width: 768px) {
        margin-left: 2rem;
      }
    }

    .card {
      min-width: 290px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      margin: 1rem 0;
      padding: 1rem;
      border-radius: 10px;
      cursor: pointer;
      background-color: #fef4f5;
      transition: all 0.3s ease-in-out;
      .img {
        width: 40px;
        height: 40px;
        margin: 0 0.7rem;
        position: relative;
      }

      a {
        font-weight: 500;
        text-decoration: none;
      }
      &:hover {
        box-shadow: 0 0 25px 0px #fef4f5;
      }

      @media screen and (max-width: 450px) {
        width: 100%;
      }
    }
    @media screen and (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      margin: 4rem 0 2rem;
    }
  }

  .form {
    width: 100%;
    flex-direction: column;
    padding: 2rem;

    div {
      width: 100%;

      margin: 0.75rem;
      border-radius: 10px;

      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.primaryColor};

      transition: all 0.3s ease-in-out;
      input,
      textarea {
        width: 100%;
        padding: 0.95rem;
        border: none;
        border-radius: 7px;

        background-color: ${({ theme }) => theme.colors.primaryColor};

        font-family: ${({ theme }) => theme.fonts.fontBase};
        color: ${({ theme }) => theme.colors.secondaryColor};
        outline: none;
      }

      textarea {
        height: 170px;
      }
      &:hover {
        box-shadow: 0 0 25px ${({ theme }) => theme.colors.primaryColor};
      }
    }

    button {
      padding: 1rem 2rem;
      border-radius: 10px;
      border: none;
      background-color: ${({ theme }) => theme.colors.secondaryColor};
      font-weight: 500;
      color: ${({ theme }) => theme.colors.whiteColor};
      outline: none;
      margin: 2rem 0 0;
      cursor: pointer;
      font-family: ${({ theme }) => theme.fonts.fontBase};
    }
    @media screen and (max-width: 768px) {
      width: 100%;
      margin: 1rem 0;
    }
  }

  div {
    h3 {
    }
  }
`;
