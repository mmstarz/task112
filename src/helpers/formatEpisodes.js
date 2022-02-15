export const formatEpisodes = episodes => {
  // bug in API type of season by docs is number, but in a fact it is string!

  const seasons = [];
  episodes?.data.forEach(item => {
    if (!seasons.includes(item?.season.trim())) {
      seasons.push(item.season);
    }
  });

  // console.log('seasons: ', seasons);

  const result = {};
  seasons.forEach(season => {
    const filtered = episodes?.data.filter(item => item.season === season);
    result[season] = filtered;
  });

  // console.log('result: ', result);

  return result;
};
