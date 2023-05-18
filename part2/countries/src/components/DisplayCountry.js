const DisplayCountry = (props) => {

  const { country } = props;

  let foundCountry = country[0]
  const languages = Object.entries(foundCountry.languages)
  return (
    <>
      <h1>Common Name: {foundCountry.name.common}</h1>
      <p>Capital: {foundCountry.capital[0]}</p>
      <p>Area: {foundCountry.area}</p>

      <h2>Languages</h2>
      <ul>
        {languages.map(language => {
          return (
            <li className="foundCountryLang" key={language[0]}>{language[1]}
            </li>
          )
        })}
      </ul>
      <img src={foundCountry.flags.png} alt={foundCountry.flags.alt}></img>
    </>
  )
}


export default DisplayCountry