function Button({ children, buttonClass, onClick }) {
  return (
    <button
      className={`bg-cyan text-white text-lg font-bold px-5 py-2 rounded-full ${buttonClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
