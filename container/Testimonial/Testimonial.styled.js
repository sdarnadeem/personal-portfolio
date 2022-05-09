import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
  .item {
    width: 60%;
    min-height: 320px;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    display: flex;
    flex-direction: row;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);

    transition: all 0.3s ease-in-out;

    .img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      position: relative;
    }

    @media screen and (min-width: 2000px) {
      min-height: 450px;

      .img {
        width: 150px;
        height: 150px;
        position: relative;
      }
    }

    @media screen and (max-width: 850px) {
      width: 100%;
    }
    @media screen and (max-width: 600px) {
      flex-direction: column;
      width: 100%;
    }

    .content {
      flex: 1;
      height: 100%;

      padding: 0 2rem;
      text-align: left;

      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;

      p {
        font-size: 1.25rem;
        line-height: 2rem;
        color: ${({ theme }) => theme.colors.blackColor};
        font-family: ${({ theme }) => theme.fonts.fontBase};

        @media screen and (min-width: 2000px) {
          font-size: 2rem;
          line-height: 3.5rem;
        }
      }

      h4 {
        font-weight: 600;
        color: ${({ theme }) => theme.colors.secondaryColor};
        margin-top: 2rem;
      }

      h5 {
        font-weight: 400;
        color: ${({ theme }) => theme.colors.grayColor};
        margin-top: 5px;
      }
      @media screen and (max-width: 600px) {
        margin-top: 2rem;
        padding: 0;
      }
    }
  }

  .btns {
    flex-direction: row;
    margin-top: 1rem;

    div {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.whiteColor};

      margin: 1rem;
      transition: all 0.3s ease-in-out;

      svg {
        height: 20px;
        width: 20px;
        color: ${({ theme }) => theme.colors.secondaryColor};
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondaryColor};

        svg {
          color: ${({ theme }) => theme.colors.whiteColor};
        }
      }
    }
  }

  .brands {
    width: 80%;
    flex-wrap: wrap;
    margin-top: 2rem;

    div {
      width: 150px;
      margin: 1.5rem;
      position: relative;

      .img {
        width: 100%;
        height: 70px;
        object-fit: cover;
        filter: grayscale(1);
        cursor: pointer;
      }
      &:hover {
        .img {
          filter: grayscale(0);
        }
      }
    }
    @media screen and (min-width: 2000px) {
      width: 210px;
      margin: 2rem;
    }
    @media screen and (max-width: 450px) {
      width: 120px;
      margin: 1rem;
    }
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 1rem;
  }
`;
