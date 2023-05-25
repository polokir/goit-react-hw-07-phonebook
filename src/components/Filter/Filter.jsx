import { useDispatch, useSelector } from 'react-redux';


import { setFilter } from 'redux/filterSlice';
import { filterValue } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterValue);
  return (
    <form style={{display:'flex', flexDirection:'column'}}>
      <label>
      <span style={{textAlign:'center'}}>Find contacts by name</span>
        <input
          type="text"
          name="filter"
          title="find some contact"
          required
          value={filter}
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </label>
    </form>
  );
};
