import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChange = ({ target: { value } }) => {
    setQuery('');
    setQuery(value);
  };

  const handleSubmit = e => {
    setSearchParams({ query });
    e.preventDefault();
  };
  useEffect(() => {
    !query && setQuery(searchParams.get('query'));
  }, [searchParams, query]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="search"
          className="movies-search"
          id="moviesInputSeatch"
          value={query}
          onChange={handleChange}
        />
      </div>
      <button>Search</button>
    </form>
  );
};
