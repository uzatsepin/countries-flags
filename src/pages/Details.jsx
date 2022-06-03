import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { searchByCountry } from '../config';
import { Button } from '../Components/Button';
import { Info } from '../Components/Info';

export const Details = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const goBack = () => {
    navigate(-1);
  };
  console.log(country);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);
  return (
    <>
      <Button onClick={() => goBack()}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info {...country} />}
    </>
  );
};
