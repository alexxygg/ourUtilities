function LinksAndScripts() {
  return (
    <div className="marginsUpAndDown ">
      <h1>links/scripts</h1>
      <h2>Bootstrap 5.2.2</h2>
      <div className="anyLink ">
        <h3 className="mt-5">CSS</h3>
        <p>
          &lt;link
          href=&quot;https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css&quot;
          rel=&quot;stylesheet&quot;
          integrity=&quot;sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi&quot;
          crossorigin=&quot;anonymous&quot;&gt;
        </p>
        <br />{" "}
        <button
          onClick={() =>
            navigator.clipboard.writeText(
              `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">`
            )
          }
        >
          Copy
        </button>
      </div>
      <div className="anyLink ">
        <h3 className="mt-5">JS</h3>
        <p>
          &lt;script
          src=&quot;https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js&quot;
          integrity=&quot;sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3&quot;
          crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt; &lt;script
          src=&quot;https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js&quot;
          integrity=&quot;sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk&quot;
          crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt;
        </p>{" "}
        <br />
        <button
          onClick={() =>
            navigator.clipboard.writeText(
              `<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>`
            )
          }
        >
          Copy
        </button>
      </div>
    </div>
  );
}

export default LinksAndScripts;
