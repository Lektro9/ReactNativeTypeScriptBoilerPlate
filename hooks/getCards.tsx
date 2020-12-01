import useSWR from 'swr';

function getCards() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error } = useSWR('https://shmiede.de/api/karten/');
  return {
    cards: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default getCards;
