import React from "react";
import uuid from "react-uuid";
const Content = ({ content, error }) => {
  return error ? (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
      style={{ marginTop: "25px", textAlign: "center" }}
    >
      <strong>{error}</strong>
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  ) : (
    <section style={{ marginTop: "50px" }}>
      {content.map((item) => (
        <div
          key={uuid()}
          className="jumbotron"
          style={{ backgroundColor: "#323232", display: "block" }}
        >
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div>
              <img
                src={item.snippet.thumbnails.medium.url}
                className="img-fluid"
                alt=""
              />
            </div>
            <div style={{ padding: "35px" }}>
              <p>
                <a
                  href={"https://www.youtube.com/watch?v=" + item.id.videoId}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.snippet.title}
                </a>
              </p>
              <p style={{ color: "white" }}>
                Channel Name: {item.snippet.channelTitle}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Content;
