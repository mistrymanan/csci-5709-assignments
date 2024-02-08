import React, {useState} from "react";
import MedicalHistory from "./MedicalHistory";

const PatientDetails = ({ selectedPatient,appointmentsData }) => {
    const [showMedicalHistory, setShowMedicalHistory] = useState(false);

    return (
        <div>
            <h2>{selectedPatient.name}'s Full Profile</h2>
            {/* Other patient details */}
            {/* ... */}

            {/* Button to toggle medical history */}
            <button onClick={() => setShowMedicalHistory(!showMedicalHistory)}>
                {showMedicalHistory ? 'Hide Medical History' : 'Show Medical History'}
            </button>

            {/* Show medical history if the button is clicked */}
            {showMedicalHistory && <MedicalHistory selectedPatient={selectedPatient} appointmentsData={appointmentsData} />}
        </div>
    );
};
export default PatientDetails;