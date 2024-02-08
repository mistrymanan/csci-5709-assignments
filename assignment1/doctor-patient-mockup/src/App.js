import React from 'react';
import PatientGrid from "./views/PatientGrid";
import {Route, Routes} from "react-router-dom";
import PatientDetails from "./views/PatientDetails";
import AppointmentsGrid from "./views/AppointmentsGrid";
import MedicationDetails from "./views/MedicationDetails";
import { Container, Navbar, Nav } from 'react-bootstrap';

const appointmentsData = [
    { id: 1,patientId: 1, date: '2024-01-10', time: '10:00 AM', medications: ['Medication A', 'Medication B'] },
    { id: 2,patientId: 1, date: '2024-01-15', time: '02:30 PM', medications: ['Medication C'] },
    { id: 3,patientId: 2, date: '2024-02-11', time: '10:00 AM', medications: ['Medication D', 'Medication E'] },
    { id: 4,patientId: 2, date: '2024-02-15', time: '02:30 PM', medications: ['Medication F'] },
];
const patientsData = [
    { id: 1, name: 'John Doe', age: 22,weight: "78Kg",height:"110CM",medicalHistory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et turpis ac orci facilisis fermentum.' },
    { id: 2, name: 'Jane Doe', age: 23,weight: "75Kg",height: "120CM", medicalHistory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et turpis ac orci facilisis fermentum.' },
];
const App = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Patient Search</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Container className="mt-3">
                <Routes>
                    <Route
                        path="/"
                        element={<PatientGrid patientsData={patientsData} appointmentsData={appointmentsData} />}
                    />
                    <Route
                        path="/patient/:id"
                        element={<PatientDetails patientsData={patientsData} appointmentsData={appointmentsData} />}
                    />
                    <Route
                        path="/appointments/:id"
                        element={<AppointmentsGrid appointmentsData={appointmentsData} />}
                    />
                    <Route
                        path="/patient/:id/medicalhistories/appointments"
                        element={<AppointmentsGrid patientsData={patientsData} appointmentsData={appointmentsData} />}
                    />
                    <Route
                        path="/patient/:id/medicalhistories/appointments/:appointmentId/medications"
                        element={<MedicationDetails appointmentsData={appointmentsData} />}
                    />
                </Routes>
            </Container>
        </>
    );
};

export default App;
