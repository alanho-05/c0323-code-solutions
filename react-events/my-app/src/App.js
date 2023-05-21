import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text, color) {
    alert(`Clicked ${color} ${text}`);
  }

  return (
    <div>
      <CustomButton text="I" color="green" onCustomClick={handleCustomClick} />
      <CustomButton text="love" color="red" onCustomClick={handleCustomClick} />
      <CustomButton
        text="React!"
        color="blue"
        onCustomClick={handleCustomClick}
      />
    </div>
  );
}

export default App;
