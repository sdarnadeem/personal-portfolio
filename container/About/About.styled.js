import styled from "styled-components";

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 2rem;

  .item {
    width: 190px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin: 2rem;
    img {
      width: 100%;
      height: 170px;
      border-radius: 15px;
      object-fit: cover;
    }

    @media screen and (min-width: 2000px) {
      width: 370px;
      margin: 170px;

      img {
        height: 320px;
      }
    }
  }
`;
