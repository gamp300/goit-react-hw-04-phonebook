import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  border: 1px solid red;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 25px auto;
`;

export const Button = styled.button`
  display: flex;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid gray;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
`;

export const Contacts = styled.label`
  display: flex;
  flex-direction: column;
`;
