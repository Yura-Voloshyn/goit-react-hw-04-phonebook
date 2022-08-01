import styled from '@emotion/styled';
const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </Label>
);

export default Filter;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
