import "./App.css";

function ProfileCard(props) {
    return (
        <div className="profile-card">

            <img
                src={props.image}
                alt={props.name}
                className="profile-image"
            />

            <h2>{props.name}</h2>

            <p className="role">
                {props.role}
            </p>

            <p className="description">
                {props.description}
            </p>

            <div className="skills">
                <span>Java</span>
                <span>React</span>
                <span>Python</span>
            </div>

            <div className="info">

                <div>
                    <strong>24</strong>
                    <small>Age</small>
                </div>

                <div>
                    <strong>MCA</strong>
                    <small>Degree</small>
                </div>

                <div>
                    <strong>Pune</strong>
                    <small>City</small>
                </div>

            </div>

            <button
                onClick={() => alert("Hello from Yash Masne!")}
            >
                View Profile
            </button>

        </div>
    );
}


function App() {
    return (
        <div className="app">

            <div className="heading">

                <span>REACT PROJECT</span>

                <h1>Developer Profile</h1>

                <p>
                    A simple profile card created using React Props
                </p>

            </div>


            <ProfileCard
                name="Yash Masne"
                role="MCA Student | Full Stack Developer"
                image="https://randomuser.me/api/portraits/men/32.jpg"
                description="MCA student passionate about software development, Java, React, Python and modern web technologies."
            />

        </div>
    );
}

export default App;