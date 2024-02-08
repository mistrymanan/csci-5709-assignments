import React, { useState } from 'react';
import PatientGrid from "./views/PatientGrid";

const appointmentsData = [
    { id: 1, date: '2024-02-10', time: '10:00 AM', medications: ['Medication A', 'Medication B'] },
    { id: 2, date: '2024-02-15', time: '02:30 PM', medications: ['Medication C'] },
];
const patientsData = [
    { id: 1, name: 'John Doe', medicalHistory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et turpis ac orci facilisis fermentum.' },
    { id: 2, name: 'Jane Doe', medicalHistory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et turpis ac orci facilisis fermentum.' },
];
const App = () => {
    return (
        <div>
            <h1>Patient Search</h1>
            <PatientGrid patientsData={patientsData} appointmentsData={appointmentsData} />
        </div>
    );
};

export default App;
