import React, { useState } from "react";
import ImageCambridge from "./logos/cambridge.png";
import ImageGoogle from "./logos/google.png";
import ImageInglesdotcom from "./logos/inglesdotcom.png";
import ImageLongman from "./logos/longman.png";
import ImageThesaurus from "./logos/thesaurus.png";
import ImageYouglish from "./logos/youglish.png";
import "./App.css";

const urls = [
  {
    constructUrl: (value: string) =>
      `https://www.google.com/search?q=%22${value}%22`,
    name: "Google exact search",
    img: ImageGoogle,
  },
  {
    constructUrl: (value: string) =>
      `https://es.youglish.com/pronounce/${value}/english?`,
    name: "YouGlish",
    img: ImageYouglish,
  },
  {
    constructUrl: (value: string) =>
      `https://www.ingles.com/pronunciacion/${value}`,
    name: "Ingles.com pronunciation",
    img: ImageInglesdotcom,
  },
  {
    constructUrl: (value: string) =>
      `https://www.google.com/search?tbm=isch&q=${value}`,
    name: "Google images",
    img: ImageGoogle,
  },
  {
    constructUrl: (value: string) =>
      `https://www.thesaurus.com/browse/${value}`,
    name: "Thesaurus synonyms",
    img: ImageThesaurus,
  },
  {
    constructUrl: (value: string) =>
      `https://www.ldoceonline.com/dictionary/${value}`,
    name: "Longman dictionary",
    img: ImageLongman,
  },
  {
    constructUrl: (value: string) =>
      `https://dictionary.cambridge.org/dictionary/english/${value}`,
    name: "Cambridge dictionary",
    img: ImageCambridge,
  },
];

function App() {
  const [value, setValue] = useState("");

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setterFunction: (value: string) => void
  ) => {
    setterFunction(event.target.value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    urls.forEach(({ constructUrl }) => {
      window.open(constructUrl(value), "_blank");
    });
  };

  return (
    <div id="main">
      <h1>Introduce your word/sentence</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event, setValue)}
        />

        <button type="submit">Open all</button>
      </form>

      <div className="brands-container">
        {urls.map(({ constructUrl, name, img }) => (
          <a
            key={name}
            className="brand-item"
            href={constructUrl(value)}
            target="_blank"
            rel="noreferrer"
          >
            <img className="brand-icon" src={img} alt={`${name} logo`} />

            <span className="brand-text">{name}</span>
          </a>
        ))}
      </div>

      <h1>Time to make sentences!</h1>

      {[
        "Affirmative",
        "Negative",
        "Question",
        "Past",
        "Future",
        "Conditional",
      ].map((textarea) => (
        <div className="sentence-item" key={textarea}>
          <label htmlFor={textarea}>{textarea}</label>
          <textarea id={textarea} />
        </div>
      ))}
    </div>
  );
}

export default App;
