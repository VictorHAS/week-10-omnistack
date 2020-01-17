import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  main {
    margin-left: 30px;
    flex: 1;
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    main {
      margin-left: 0;
      margin-top: 30px;
    }

    aside {
      width: 100%;
    }
  }
`;

export const Sidebar = styled.aside`
  width: 320px;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 30px 20px;

  strong {
    font-size: 20px;
    text-align: center;
    display: block;
    color: #333;
  }

  form {
    margin-top: 30px;
    > div {
      margin-top: 20px;
      display: grid;
      gap: 20px;
      grid-template-columns: 1fr 1fr;
    }

    button[type='submit'] {
      width: 100%;
      border: 0;
      margin-top: 30px;
      background: #7d40e7;
      border-radius: 2px;
      padding: 15px 20px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
      transition: background 0.5s;

      &:hover {
        background: #6931ca;
      }
    }
  }
`;

export const DevList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  list-style: none;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }

  li {
    background: #fff;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
    border-radius: 2px;
    padding: 30px 20px;

    header {
      display: flex;
      flex-direction: row;
      align-items: center;

      img {
        width: 54px;
        height: 54px;
        border-radius: 50%;
      }

      div {
        margin-left: 10px;

        strong {
          display: block;
          font-size: 16px;
          color: #333;
        }

        span {
          font-size: 13px;
          color: #999;
          margin-top: 2px;
        }
      }
    }

    p {
      color: #666;
      font-size: 14px;
      line-height: 20px;
      margin: 10px 0;
    }

    a {
      color: #8e4dff;
      font-size: 14px;
      text-decoration: none;

      &:hover {
        color: #5a2ea6;
      }
    }
  }
`;
