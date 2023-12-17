const monthColors = {
  Yanvar: "#335ECC",
  Fevral: "#50C746",
  Mart: "#DBB491",
  Aprel: "#5C9EA0",
  May: "#26de9d",
  Iyun: "#E45C5E",
  Iyul: "#D04B2F",
  Avgust: "#7F00FF",
  Sentabr: "#F4D730",
  Oktabr: "#7A5901",
  Noyabr: "#FF3E00",
  Dekabr: "#D9D9D9",
};

export const reformPieChartStats = (stats) => {
  const data = [];
  for (let i = 0; i < stats?.length; i++) {
    data.push({
      name: stats[i]?.name,
      value: stats[i]?.amount,
      fill: monthColors[stats[i]?.name],
    });
  }
  return data;
};
