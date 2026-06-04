function FilterPanel() {
    return (
        <aside className="sidebar">
            <h2>Filters</h2>

            <label>
                <input type="checkbox" />
                Engine Specialist
            </label>

            <label>
                <input type="checkbox" />
                Electrician
            </label>

            <label>
                <input type="checkbox" />
                Benskin Expert
            </label>
        </aside>
    );
}

export default FilterPanel;