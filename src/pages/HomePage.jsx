import axios from 'axios';
import { useState, useEffect } from 'react';
import { ALL_COUNTRIES } from '../config';
import { List } from '../Components/List';
import { Card } from '../Components/Card';
import { Controls } from '../Components/Controls';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const [countries, setCountries] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);
  return (
    <>
      <Controls />
      <List>
        {countries.map((c) => {
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
