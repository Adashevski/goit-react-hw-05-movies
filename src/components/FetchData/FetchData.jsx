import axios from 'axios';
import { API_KEY } from 'components/utils';

export const fetchData = async (
  url,
  setState,
  setLoadingState,
  returnValue
) => {
  setLoadingState(true);

  try {
    const res = await axios.get(url, {
      params: {
        api_key: API_KEY,
      },
    });
    const { data } = res;

    if (returnValue) setState(data[returnValue]);
    else setState(data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoadingState(false);
  }
};
