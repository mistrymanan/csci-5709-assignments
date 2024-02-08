import React, {useState} from "react";
import MedicationDetails from "./MedicationDetails";

const AppointmentDetails = ({ appointment, onUpdate, onSave }) => {
    const [showMedication, setShowMedication] = useState(false);

    return (
        <div>
            <h2>Appointment Details</h2>
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>

            {/* Button to toggle medication details */}
            <button onClick={() => setShowMedication(!showMedication)}>
                {showMedication ? 'Hide Medication' : 'Show Medication'}
            </button>

            {/* Show medication details if the button is clicked */}
            {showMedication && <MedicationDetails medications={appointment.medications} />}

            {/* Update and Save buttons */}
            <button onClick={onUpdate}>Update</button>
            <button onClick={onSave}>Save</button>
        </div>
    );
};
export default AppointmentDetails;