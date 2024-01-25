import React from "react";
import { Link, Outlet } from "react-router-dom"
import Classcompointro from "./Classcomponent/Classcompointro";

function Example() {
    return (
        <>
            <h1>Example</h1>
            <div className="container my-3">
                <div className="row">
                    <div className="col-6">
                        <h3>
                            <Link to="/Example/Classcomponent">Class Component</Link>
                        </h3>
                    </div>
                    <div className="col-6">
                        <h3>
                            <Link to="/Example/Functioncomponent">Function Component</Link>
                        </h3>
                    </div>
                </div>
                <div className="row mx-auto">
                    <div className="col-12">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Example