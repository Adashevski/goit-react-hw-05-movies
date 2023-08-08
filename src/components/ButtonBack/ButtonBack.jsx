import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ButtonBack = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} type="button">
      &larr; Go back
    </button>
  );
};
