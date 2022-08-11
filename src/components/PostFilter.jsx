import React from 'react';
import InputText from './UI/input/InputText';
import Select from './UI/select/Select';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <InputText
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Поиск..."
      />
      <Select
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Сортировка"
        options={[
          { value: 'body', name: 'по описанию' },
          { value: 'title', name: 'по названию' },
        ]}
      />
    </div>
  );
};

export default PostFilter;
