import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function User({ name, age, job, height }) {
    console.log("User", name);
    const [full, setFull] = useState(`${name} - ${age}`);
    return (
        <div>
            <span>{full}</span> -{" "}
            <span
                onClick={() => {
                    setFull("클릭됨");
                }}
            >
                {name}
            </span>
            <span>{age}</span>
            <span>{job}</span>
            <span>{height}</span>
        </div>
    );
}
User.defaultProps = {
    height: "개무거워"
};

User.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
};
export default User;
