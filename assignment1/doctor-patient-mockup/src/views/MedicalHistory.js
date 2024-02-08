import AppointmentsGrid from "./AppointmentsGrid";
import React from "react";

const MedicalHistory = ({ selectedPatient,appointmentsData }) => {
    return (
        <div>
            <h1>{selectedPatient.name}'s Medical History</h1>
            {/* Other medical history details */}
            {/* ... */}

            {/* Display appointments grid */}
            <AppointmentsGrid appointmentsData={appointmentsData} />
        </div>
    );
};

export default MedicalHistory;