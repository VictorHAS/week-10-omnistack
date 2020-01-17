import styled from 'styled-components';

export const InputBlock = styled.section`
  & + section {
    margin-top: 20px;
  }

  label {
    color: #acacac;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }

  input {
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: #666;
    border: 0;
    border-bottom: 1px solid #eee;
  }
`;

export const InputGroup = styled.div`
  section {
    margin-top: 0;
  }
`;
