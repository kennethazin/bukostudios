import "./Ellipse.css";

export default function Ellipse({ href, text }) {
  return (
    <a href={href} target="_blank">
    <div
      className="ellipse-container "
      style={{ position: "relative", display: "inline-block" }}
    >
      <svg
        className="ellipse-svg"
        width="372"
        height="91"
        viewBox="0 0 372 91"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="186" cy="45.5" rx="186" ry="45.5" />
      </svg>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textDecoration: "none",
        }}
      >
        <p className="ellipseText ">{text}</p>
      </div>
    </div>
    </a>
  );
}
