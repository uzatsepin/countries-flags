import axios from 'axios';
import { useEffect, useState } from 'react';
import { ALL_COUNTRIES } from '../config';
import { List } from '../Components/List';
import { Card } from '../Components/Card';
import { Controls } from '../Components/Controls';
import { useNavigate } from 'react-router-dom';

export const HomePage = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleSearch = (search, region) => {
    let data = [...countries];
    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }
    if (search) {
      data = data.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));
    }
    setFilteredCountries(data);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: 'Population',
                description: c.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: c.region,
              },
              {
                title: 'Capital',
                description: c.capital,
              },
            ],
          };
          return (
            <Card key={c.name} {...countryInfo} onClick={() => navigate(`/country/${c.name}`)} />
          );
        })}
      </List>
    </>
  );
};
