import { Wrapp, LabelEl, InputEl } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Wrapp>
      <LabelEl>
        Find contact
        <InputEl type="text" value={value} onChange={onChange} />
      </LabelEl>
    </Wrapp>
  );
};
