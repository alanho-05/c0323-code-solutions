import AppDrawer from './AppDrawer';

const menuPages = [
  {
    id: 1,
    page: 'About',
  },
  {
    id: 2,
    page: 'Get Started',
  },
  {
    id: 3,
    page: 'Sign In',
  },
];

function App() {
  return (
    <div>
      <AppDrawer title="Menu" menu={menuPages} />
    </div>
  );
}

export default App;
