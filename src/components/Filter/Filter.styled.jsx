import { Input } from 'antd';
import styled from 'styled-components';

// box-shadow: -2px -2px 5px #fff, 3px 3px 5px rgba(0, 0, 0, 0.1);
export const WrapperFiler = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 20px;
`;

// height: 40px;
//   width: 230px;
//   padding: 0 10px;
//   font-size: 20px;
//   border: 1px solid #000000;
//   border-radius: 7px;
//   transition: box-shadow cubic-bezier(0.17, 0.67, 0.86, 0.57) 300ms;
export const FilterInput = styled(Input)`
  width: 400px;
  padding: 10px;
  /* margin: 0 auto; */
  border-radius: 5px;
  border: 3px solid;

  box-shadow: inset -2px -2px 8px #3434eb, inset 3px 5px 5px rgba(0, 0, 0, 0.1);
  background-color: transparent;
  border: none;

  font-size: 20px;
  color: darkblue;
  font-weight: bolder;
`;

// font-weight: 500;
//   margin-bottom: 20px;
//   color: #2e2d2dbc;
export const FilterP = styled.p`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  color: green;
  font-size: 24px;
  font-weight: bolder;
`;
