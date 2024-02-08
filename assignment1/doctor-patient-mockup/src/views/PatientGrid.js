import React, {useState} from "react";
import PatientDetails from "./PatientDetails";

const PatientGrid = ({patientsData,appointmentsData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPatient, setSelectedPatient] = useState(null);

    const filteredPatients = patientsData.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handlePatientClick = (patient) => {
        setSelectedPatient(patient);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {filteredPatients.map(patient => (
                    <tr key={patient.id}>
                        <td>{patient.id}</td>
                        <td>{patient.name}</td>
                        <td>
                            {/* Link to view patient details */}
                            <button onClick={() => handlePatientClick(patient)}>View Details</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {selectedPatient && <PatientDetails selectedPatient={selectedPatient} appointmentsData={appointmentsData} />}
        </div>
    );
};

export default PatientGrid;