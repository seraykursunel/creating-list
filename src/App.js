import "./styles.css";

const countries = [
  {
    id: 0,
    name: "Greece",
    continent: "Europe"
  },
  {
    id: 1,
    name: "Laos",
    continent: "Asia"
  },
  {
    id: 2,
    name: "Zambia",
    continent: "Africa"
  },
  {
    id: 3,
    name: "Brazil",
    continent: "America"
  }
];

const App = () => {
  function renderCountries(countries) {
    return (
      <div>
        {countries.map((country) => (
          <li key={country.id}>
            {country.name}-{country.continent}
          </li>
        ))}
      </div>
    );
  }
  return (
    <div>
      <h1>Seyahat Listem</h1>
      <ul>{renderCountries(countries)}</ul>
    </div>
  );
};

export default App;
