import "./Ellipse.css";

export default function Ellipse({ href, text }) {
  return (
    <div
      className="ellipse-container"
      style={{ position: "relative", display: "inline-block" }}
    >
      <svg
        className="ellipse-svg"
        width="372"
        height="91"
        viewBox="0 0 372 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="186" cy="45.5" rx="186" ry="45.5" fill="#FFFFF" />
      </svg>
      <a
        href={href}
        target="_blank"
        className="ellipse-link"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textDecoration: "none",
        }}
      >
        <p>{text}</p>
      </a>
    </div>
  );
}
