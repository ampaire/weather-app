export default (json) => {
  const { description, icon, main } = json.weather[0];
  const { temp } = json.main;
  const [name, country] = [json.name, json.sys.country];
  const { dateTime } = Date(json.dt);
  return {
    description,
    icon,
    main,
    temp,
    name,
    country,
    tempMax: json.main.temp_max,
    tempMin: json.main.temp_min,
    feelsLike: json.main.feels_like,
    dateTime,
  };
};

