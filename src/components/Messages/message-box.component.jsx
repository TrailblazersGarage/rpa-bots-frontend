import React from "react";

export const MessageBox = ({ message }) => (
    <article className="mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-green dark-green mb5">
        <h2 className="fw2 f4 lh-copy mt0 mb3">
            {message}
        </h2>
    </article>
);
