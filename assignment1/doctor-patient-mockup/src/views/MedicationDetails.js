import React from "react";

const MedicationDetails = ({ medications }) => {
    return (
        <div>
            <h3>Medication Details</h3>
            <ul>
                {medications.map((medication, index) => (
                    <li key={index}>{medication}</li>
                ))}
            </ul>
        </div>
    );
};
export default MedicationDetails;