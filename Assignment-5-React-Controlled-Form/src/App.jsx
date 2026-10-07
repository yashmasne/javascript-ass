import { useState } from "react";
import "./App.css";

function App() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <div className="page">

            <div className="background-circle circle-one"></div>
            <div className="background-circle circle-two"></div>

            <div className="form-card">

                {/* Header */}

                <div className="header">

                    <div className="icon">
                        ✦
                    </div>

                    <div>
                        <p className="tag">
                            REACT PROJECT
                        </p>

                        <h1>
                            Contact Form
                        </h1>
                    </div>

                </div>


                <p className="subtitle">
                    Controlled form using React useState
                </p>


                {/* Name */}

                <div className="form-group">

                    <label htmlFor="name">
                        Full Name
                    </label>

                    <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                    />

                </div>


                {/* Email */}

                <div className="form-group">

                    <label htmlFor="email">
                        Email Address
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />

                </div>


                {/* Phone */}

                <div className="form-group">

                    <label htmlFor="phone">
                        Phone Number
                    </label>

                    <input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) =>
                            setPhone(e.target.value)
                        }
                    />

                </div>


                {/* Live Output */}

                <div className="output">

                    <div className="output-header">

                        <div>
                            <span className="live-dot"></span>
                            Live Preview
                        </div>

                        <span className="live">
                            LIVE
                        </span>

                    </div>


                    <div className="data-row">

                        <span>Name</span>

                        <strong>
                            {name || "Not entered"}
                        </strong>

                    </div>


                    <div className="data-row">

                        <span>Email</span>

                        <strong>
                            {email || "Not entered"}
                        </strong>

                    </div>


                    <div className="data-row">

                        <span>Phone</span>

                        <strong>
                            {phone || "Not entered"}
                        </strong>

                    </div>

                </div>


                {/* React Concept */}

                <div className="info-box">

                    <span>⚛</span>

                    <p>
                        This form uses React
                        <strong> useState </strong>
                        to control and update the input values.
                    </p>

                </div>


                <footer>
                    Built with React • JSX • useState
                </footer>

            </div>

        </div>
    );
}

export default App;