export default function CustomButton({ text, color }) {
  return (
    <button
      style={{
        backgroundColor: color,
      }}
      type="button">
      {text}
    </button>
  );
}
