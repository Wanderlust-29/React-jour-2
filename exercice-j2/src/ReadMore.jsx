import { useState } from "react";

const Switch = (props) => {
  const [message, setMessage] = useState("open");

  function toggleOpen() {
    if (message === "open") setMessage("close");
    else setMessage("open");
  }

  return (
    <>
      <article>
        <header>
          <h2>Le titre de l'article</h2>
        </header>
        {message === "open" && (
          <>
            <section>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              suscipit quibusdam totam iure accusantium voluptate atque amet
              possimus enim nam voluptates ullam, repellat sequi dolor facere
              tempora a aliquam laudantium.
            </section>
            <footer>
              <button onClick={toggleOpen}>Voir moins</button>
            </footer>
          </>
        )}

        {message === "close" && (
          <>
            <section></section>
            <footer>
              <button onClick={toggleOpen}>Voir plus</button>
            </footer>
          </>
        )}
      </article>
    </>
  );
};

export default Switch;
