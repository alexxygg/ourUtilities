function NiceBar() {
  return (
    <>
      <h3>Row of cube divs</h3>
      <div id="divRows">
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
      </div>
      <button
        onClick={() =>
          navigator.clipboard.writeText(`<div id="divRows">
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
        <div className="odd"></div>
        <div className="even"></div>
      </div>`)
        }
      >
        Copy HTML
      </button>
      <button
        onClick={() =>
          navigator.clipboard.writeText(`#divRows {
  display: flex;
  flex-wrap: nowrap;
  margin-top: 5vh;
  margin-bottom: 5vh;
}
.even {
  height: 3vh;
  width: 3vw;
  background-color: black;
}
.odd {
  height: 3vh;
  width: 3vw;
  background-color: #04ee51;
}`)
        }
      >
        Copy CSS
      </button>
    </>
  );
}

export default NiceBar;
