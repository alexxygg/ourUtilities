function UsefulSnippets() {
  return (
    <div className="marginsUpAndDown">
      <h1 className="mb-5">Useful Snippets</h1>
      <div className="allSnippets">
        <div>
          <h3>Copy to Clipboard</h3>
          <li>No need for new variables, all built-in</li>
          <p>onClick=() =&gt; navigator.clipboard.writeText("")</p>
          <button
            onClick={() =>
              navigator.clipboard.writeText(
                `onClick={() => navigator.clipboard.writeText("")}`
              )
            }
          >
            Copy
          </button>
        </div>
        <div>
          <h3>Open link/page in new tab</h3>
          <li>Goes in "a" anchor elements</li>
          <p>target="_blank"</p>
          <button
            onClick={() => navigator.clipboard.writeText(`target = '_blank'`)}
          >
            Copy
          </button>
        </div>
        <div>
          <h3>Default UI Fonts</h3>
          <p>
            font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial,
            sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI
            Symbol";
          </p>
          <button
            onClick={() =>
              navigator.clipboard
                .writeText(`font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial,
            sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";`)
            }
          >
            Copy
          </button>
        </div>
      </div>{" "}
      <div className="allSnippets">
        {" "}
        <div>
          <h3>Scrollbar Modded</h3>
          <p>To have a base on modding webpage scrollbar.</p>
          <button
            onClick={() =>
              navigator.clipboard.writeText(`::-webkit-scrollbar {
                    width: 2vh;
                  }
                  /* the scrollbar. */
                  ::-webkit-scrollbar-button {
                    background: #151b29;
                    height: 1vh;
                    /* border-radius: 50%; */
                    /* border: #2f4f4f 0.3vh solid; */
                  }
                  /* the buttons on the scrollbar (arrows pointing upwards and downwards). */
                  ::-webkit-scrollbar-thumb {
                    background: #151b29;
                  
                    border: 0.4vh #04ee51 solid;
                  }
                  /* the draggable scrolling handle. */
                  ::-webkit-scrollbar-track {
                    background: yellowgreen;
                  }
                  /* the track (progress bar) of the scrollbar. */
                  ::-webkit-scrollbar-track-piece {
                    background: #2f4f4f;
                  }
                  /* the track (progress bar) NOT covered by the handle. */
                  ::-webkit-scrollbar-corner {
                    background: #151b29;
                  }
                  /* the bottom corner of the scrollbar, where both horizontal and vertical scrollbars meet. */
                  ::-webkit-resizer {
                    background: #04ee51;
                  }
                  /* the draggable resizing handle that appears at the bottom corner of some elements. */
                  `)
            }
          >
            Copy
          </button>
        </div>
        <div>
          <h3>
            Random <span className="red">R</span>{" "}
            <span className="green">G</span> <span className="blue">B</span>{" "}
            Function
          </h3>
          <p></p>
          <button
            onClick={() =>
              navigator.clipboard.writeText(`const randomColor = () => {
                  let r = Math.floor(Math.random() * 255) + 1;
                  let g = Math.floor(Math.random() * 255) + 1;
                  let b = Math.floor(Math.random() * 255) + 1;
              
                  let rgb = \`rgb(\${r},\${g},\${b})\`;
                  return rgb;
                };`)
            }
          >
            Copy
          </button>
        </div>{" "}
        <div>
          <h3>NavBar</h3>
          <p>Better looking than this local website</p>
          <button
            onClick={() =>
              navigator.clipboard
                .writeText(`<nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`)
            }
          >
            Copy
          </button>
        </div>
      </div>{" "}
      <div className="allSnippets">
        {" "}
        <div>
          <h3>Footer</h3>
          <p>Better looking/same than this local website</p>
          <button
            onClick={() =>
              navigator.clipboard.writeText(` <div>
              <footer id="footer" class=" text-center bg-dark">
                <div class="text-center p-3 ">
                  alexxygg © 2022 Designed and coded by--->
                  <a class=" ml-2" href="https://github.com/alexxygg">
                    Alejandro Perez(GitHub)
                  </a>
                </div>
              </footer>
            </div>
          `)
            }
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default UsefulSnippets;
