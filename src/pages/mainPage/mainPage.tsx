import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/style.css";
import travelListJSON from "../../data/trips.json";

export const MainPage = () => {
  const [travelList, setTravelList] = useState(travelListJSON);
  const [actualTravelList, setActualTravelList] = useState(travelList);
  const [query, setQuery] = useState("");
  const [filtrDuration, setFiltrDuratin] = useState<number[]>([0, 0]);
  const [filtrLevel, setFiltrLevel] = useState("");

  const onInputQuery = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.currentTarget.value);
    setQuery(e.currentTarget.value);
  };

  const onChangeSelectDuration = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    switch (e.currentTarget.value) {
      case "0_x_5":
        setFiltrDuratin([0, 5]);
        break;
      case "5_x_10":
        setFiltrDuratin([5, 10]);
        break;
      case "10_x":
        setFiltrDuratin([10, 99999]);
        break;
      default:
        setFiltrDuratin([0, 0]);
    }
  };

  const onChangeSelectLevel = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setFiltrLevel(e.currentTarget.value);
  };

  useEffect(() => {
    setActualTravelList(
      travelList.filter(({ title }) =>
        title.toLowerCase().trim().includes(query.toLowerCase().trim())
      )
    );
  }, [query, travelList]);

  useEffect(() => {
    if (filtrDuration[1] !== 0)
      setActualTravelList(
        travelList.filter(
          ({ duration }) =>
            duration >= filtrDuration[0] && duration < filtrDuration[1]
        )
      );
    else setActualTravelList(travelListJSON);
  }, [filtrDuration, travelList]);

  useEffect(() => {
    if (filtrLevel !== "")
      setActualTravelList(
        travelList.filter(({ level }) => level === filtrLevel)
      );
    else setActualTravelList(travelListJSON);
  }, [filtrLevel, travelList]);

  return (
    <main>
      <h1 className="visually-hidden">Travel App</h1>
      <section className="trips-filter">
        <h2 className="visually-hidden">Trips filter</h2>
        <form className="trips-filter__form" autoComplete="off">
          <label className="trips-filter__search input">
            <span className="visually-hidden">Search by name</span>
            <input
              name="search"
              type="search"
              placeholder="search by title"
              onInput={onInputQuery}
            />
          </label>
          <label className="select">
            <span className="visually-hidden">Search by duration</span>
            <select name="duration" onChange={onChangeSelectDuration}>
              <option value="">duration</option>
              <option value="0_x_5">&lt; 5 days</option>
              <option value="5_x_10">&lt; 10 days</option>
              <option value="10_x">&ge; 10 days</option>
            </select>
          </label>
          <label className="select">
            <span className="visually-hidden">Search by level</span>
            <select name="level" onChange={onChangeSelectLevel}>
              <option value="">level</option>
              <option value="easy">easy</option>
              <option value="moderate">moderate</option>
              <option value="difficult">difficult</option>
            </select>
          </label>
        </form>
      </section>
      <h2 className="visually-hidden">Trips List</h2>
      <ul className="trip-list">
        {actualTravelList.map(
          ({ id, title, duration, level, price, image }) => {
            return (
              <li className="trip-card" key={`${id}`}>
                <img src={`${image}`} alt="Trip Land" />
                <div className="trip-card__content">
                  <div className="trip-info">
                    <h3 className="trip-info__title">{`${title}`}</h3>
                    <div className="trip-info__content">
                      <span className="trip-info__duration">
                        <strong>{`${duration}`}</strong> days
                      </span>
                      <span className="trip-info__level">{`${level}`}</span>
                    </div>
                  </div>
                  <div className="trip-price">
                    <span>Price</span>
                    <strong className="trip-price__value">{`${price} $`}</strong>
                  </div>
                </div>
                <NavLink to={`/trip/${id}`} className="button">
                  Discover a trip
                </NavLink>
              </li>
            );
          }
        )}
      </ul>
    </main>
  );
};
