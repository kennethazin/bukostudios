export default function Ellipse({ href, text, sx }) {
  return (
    <div style={{ position: "relative", display: "inline-block", ...sx }}>
      <svg
        width="372"
        height="91"
        viewBox="0 0 372 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="186" cy="45.5" rx="186" ry="45.5" fill="#D9D9D9" />
      </svg>
      <a
        href={href}
        target="_blank"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "black",
          textDecoration: "none",
        }}
      >
        <p>{text}</p>
      </a>
    </div>
  );
}
