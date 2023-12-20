import { useState } from "react";
import './toastMessage.css'

const ToastMessage = (props) => {
  const [message, setMessage] = useState("visible");

  function dismiss() {
    if (message === "visible") setMessage("hidden");
    else setMessage("visible");
  }

  return (
    <>
        {message === "visible" && (
            <article className="toastMessage">
                <p>
                    Ceci est le texte de mon message
                </p>
                <button onClick={dismiss}>X</button>
            </article>
        )}

        {message === "hidden" && (
            <article className="dismissed">
                <p>
                    Ceci est le texte de mon message
                </p>
                <button onClick={dismiss}>X</button>
            </article>
        )}
    </>
  );
};

export default ToastMessage;