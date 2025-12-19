// @flow
import * as React from "react";
import { Gif } from "../interfaces/gif.interface";
import { getGifByQuery } from "../actions/get-gifs-by-query.action";

import { useRef, useState } from "react";

export const useGifs = () => {
  const [previousTerm, setPreviousTerm] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const gifCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    console.log(term);
    console.log(gifCache);
    if (gifCache.current[term]) {
      console.log('si');
      setGifs(gifCache.current[term]);
      return;
    }

    const gif = await getGifByQuery(term);
    setGifs(gif);
    console.log(gifCache.current);

  };
  async function handleSearch(query: string = "") {
    if (!previousTerm.includes(query)) {
      const newTerm = [query, ...previousTerm].slice(0, 8);
      setPreviousTerm(newTerm);
    }

    const gif = await getGifByQuery(query);
    setGifs(gif);

    gifCache.current[query] = gif;
  }

  return {
    previousTerm,
    gifs,
    handleSearch,
    handleTermClicked,
  };
};
