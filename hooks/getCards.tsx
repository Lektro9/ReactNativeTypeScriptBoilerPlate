
import useSWR from 'swr';

const fetcher = () => fetch("https://shmiede.de/api/karten/").then(res => res.json())


function getCards() {
    const { data, error } = useSWR(`/nothing`, fetcher)
    return {
        cards: data,
        isLoading: !error && !data,
        isError: error
    }
}

export default getCards;