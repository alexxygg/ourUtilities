function FavColors() {
  return (
    <div>
      <h1>Fav Colors</h1>
      <div className="colorsDiv">
        <div className="eachColor  colorBlue">
          <p>#0275D8</p>
          <p>rgb(2, 117, 216)</p>
          <p>(Bootstrap's "primary")</p>{" "}
          <p className="blackText">Black colored text</p>
          <button
            onClick={() => navigator.clipboard.writeText("rgb(2, 117, 216)")}
          >
            Copy RGB
          </button>
          <button onClick={() => navigator.clipboard.writeText("#0275D8")}>
            Copy HEX
          </button>
        </div>{" "}
        <div className="eachColor  colorGreen">
          <p>#04ee51 </p>
          <p>rgb(4,238,81)</p> <p className="blackText">Black colored text</p>
          <button
            onClick={() => navigator.clipboard.writeText("rgb(4,238,81)")}
          >
            Copy RGB
          </button>
          <button onClick={() => navigator.clipboard.writeText("#04ee51")}>
            Copy HEX
          </button>
        </div>{" "}
        <div className="eachColor  colorBluish">
          <p>#023047</p>
          <p>rgb(2, 48, 71)</p> <p className="blackText">Black colored text</p>
          <button
            onClick={() => navigator.clipboard.writeText("rgb(2, 48, 71)")}
          >
            Copy RGB
          </button>
          <button onClick={() => navigator.clipboard.writeText("#023047")}>
            Copy HEX
          </button>{" "}
        </div>{" "}
        <div className="eachColor  darkMode">
          <p>#181A1B</p>
          <p>rgb(24, 26, 27)</p>
          <p>(Dark Mode)</p>
          <p className="blackText">Black colored text</p>
          <button
            onClick={() => navigator.clipboard.writeText("rgb(24, 26, 27)")}
          >
            Copy RGB
          </button>
          <button onClick={() => navigator.clipboard.writeText("#181A1B")}>
            Copy HEX
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default FavColors;
