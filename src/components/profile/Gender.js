import React, { useState, useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const genders = ['', 'other', 'female', 'male'];

function Gender() {
  const { state,  handleProfileFormChange } = useContext(AppContext);
  //updating unsaved profile state

  // const [value, setValue] = useState(state.profile.gender)
  const [value, setValue] = useState((state.unsavedProfileState && state.unsavedProfileState.gender) || (state.profile && state.profile.gender) || null);

  return (
    <div>
      <label className='heading'>Gender</label>
      <select
        onChange={handleProfileFormChange}
        as='select'
        name='gender'
        className='form-control medium'
      >
        {genders.map(gender => (
          <option
            key={gender}
            defaultValue={gender === value ? true : false}
            value={gender}
          >
            {gender}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Gender;
