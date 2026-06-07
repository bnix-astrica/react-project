export function filterFilmsByDirector(list, director) {
  if (!director) {
    return list;
  }

  return list.filter((film) => film.director === director);
}

export function getListOf(list, prop) {
  return [...new Set(list.map((item) => item[prop]))];
}

export function getFilmStats(list) {
  const total = list.length;
  const acc_score = list.reduce((sum, film) => sum + Number(film.rt_score || 0), 0);
  const avg_score = total === 0 ? 0 : acc_score / total;
  const latest = list.reduce((maxYear, film) => {
    const year = Number(film.release_date);
    return Number.isFinite(year) ? Math.max(maxYear, year) : maxYear;
  }, 0);

  return {
    avg_score,
    acc_score,
    total,
    latest,
  };
}
