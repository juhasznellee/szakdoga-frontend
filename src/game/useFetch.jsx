import { useState, useEffect } from 'react';

export const useFetch = (url, defaultData) => {
    const [data, setData] = useState(defaultData ?? []);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((result) => {setData(result);})
    }, [url]);

    return data;
};