import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid black;
  width: 500px;
  padding: 20px 30px;
`;

// export const Field = styled(FormikField)`
//   display: block;
//   width: 50%;
// `;

export const SubmitButton = styled.button`
  width: 50%;
  padding: 5px 10px;
`;
