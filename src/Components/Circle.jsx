

export default function Circle({ id, children,className, circleClicked }) {
  return (
    <div
      className={`gameBoard ${className}`}
      onClick={() => circleClicked(id)}>
      {children}
    </div>
  );
}
