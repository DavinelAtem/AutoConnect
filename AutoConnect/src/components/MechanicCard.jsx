function MechanicCard(props) {
    return (
        <div className="card">
            <h3>{props.mechanic.name}</h3>

            <p>{props.mechanic.specialty}</p>

            <p>{props.mechanic.experience}</p>

            <p>{props.mechanic.distance}</p>

            <button>View Profile</button>
            <button>Contact</button>
        </div>
    );
}

export default MechanicCard;