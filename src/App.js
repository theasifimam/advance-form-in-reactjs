import React, { useState } from "react";
import classes from "./App.module.css";

const App = () => {
  const [userData, setUserData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    dateTimeLocal: "",
    month: "",
    range: "",
    tel: "",
    time: "",
    url: "",
    week: "",
    date: "",
    color: "",
    desc: "",
    vehicles: [],
    file: "",
    fav_language: "",
    cars: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(userData);
  };

  console.log();
  return (
    <React.Fragment>
      <h1>Form Handle</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          type="number"
          name="number"
          id="number"
          placeholder="Number"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <input
          type="datetime-local"
          name="dateTimeLocal"
          placeholder="datetime-local"
          onChange={handleChange}
        />
        <input
          type="month"
          placeholder="month"
          name="month"
          onChange={handleChange}
        />
        <input
          type="range"
          min="0"
          max="100"
          step="5"
          name="range"
          onChange={handleChange}
        />
        <input type="search" name="search" onChange={handleChange} />
        <input
          type="tel"
          placeholder="Telephone"
          name="tel"
          onChange={handleChange}
        />
        <input
          type="time"
          placeholder="Time"
          name="time"
          onChange={handleChange}
        />
        <input
          type="url"
          placeholder="url"
          name="url"
          onChange={handleChange}
        />
        <input
          type="week"
          placeholder="week"
          name="week"
          onChange={handleChange}
        />

        <input type="date" name="date" onChange={handleChange} />

        <input
          type="color"
          id="colorPicker"
          name="color"
          onChange={handleChange}
        />

        <textarea
          name="desc"
          id="desc"
          cols="30"
          rows="10"
          placeholder="Description"
          onChange={handleChange}
        ></textarea>

        <div className={classes.checkbox}>
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
            onChange={handleChange}
          />
          <label htmlFor="vehicle1"> I have a bike</label>
          <input
            type="checkbox"
            id="vehicle2"
            name="vehicle2"
            value="Car"
            onChange={handleChange}
          />
          <label htmlFor="vehicle2"> I have a car</label>
          <input
            type="checkbox"
            id="vehicle3"
            name="vehicle3"
            value="Boat"
            onChange={handleChange}
          />
          <label htmlFor="vehicle3"> I have a boat</label>
        </div>

        <input type="file" name="file" onChange={handleChange} />

        <div className={classes.radioInput} onChange={handleChange}>
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label htmlFor="html">HTML</label>
          <input type="radio" id="css" name="fav_language" value="CSS" />
          <label htmlFor="css">CSS</label>
          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
          />
          <label htmlFor="javascript">JavaScript</label>
        </div>

        <select name="cars" id="cars" onChange={handleChange}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        <button type="submit">Submit Now</button>
      </form>
    </React.Fragment>
  );
};

export default App;
