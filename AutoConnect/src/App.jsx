import './App.css'
import Navbar from './components/Navbar.jsx'
import SearchBar from './components/SearchBar.jsx'
import FilterPanel from './components/FilterPanel.jsx'
import MapSection from './components/MapSection.jsx'
import MechanicCard from './components/MechanicCard.jsx'

function App() {
  return (
    <>
      <Navbar />
      <SearchBar />

      <div className="content">
        <FilterPanel />

        <MapSection />

        <div className="mechanics-list">
          <h2>Mechanics Near you</h2>

          <MechanicCard
            mechanic={{
              name: "Abonkwe Princely.",
              specialty: "Engine Specialist",
              experience: "8 Years",
              distance: "1.2 km"
            }}
          />

          <MechanicCard
            mechanic={{
              name: "Amadou Issa.",
              specialty: "Auto Electrician",
              experience: "5 Years",
              distance: "2.5 km"
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;