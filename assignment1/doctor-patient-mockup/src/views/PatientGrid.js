import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import { Container, InputGroup, FormControl, Table, Button } from 'react-bootstrap';

const PatientGrid = ({patientsData,appointmentsData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    // const [selectedPatient, setSelectedPatient] = useState(null);

    const filteredPatients = patientsData.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const navigate = useNavigate();
    const handlePatientClick = (patient) => {
        // setSelectedPatient(patient);
        navigate(`/patient/${patient.id}`);
    };

    return (
        <Container>
            <InputGroup className="mb-3">
                <FormControl
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </InputGroup>

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {filteredPatients.map((patient) => (
                    <tr key={patient.id}>
                        <td>{patient.id}</td>
                        <td>{patient.name}</td>
                        <td>
                            <Button onClick={() => handlePatientClick(patient)}>View Details</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default PatientGrid;