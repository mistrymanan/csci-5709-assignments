import AppointmentDetails from "./AppointmentDetails";
import React from "react";
import {useParams} from "react-router-dom";
import {Container, Table} from "react-bootstrap";

const AppointmentsGrid = ({patientsData,appointmentsData}) => {

    let {id} = useParams();
    console.log(id);
    let selectedPatient = patientsData.filter(patient =>
        patient.id === Number(id)
    )[0];
    console.log(selectedPatient);

    return (
        <Container>
            <h2>Appointments</h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {appointmentsData.map((appointment) => (
                    appointment.patientId === id &&
                    <tr key={appointment.id}>
                        <td>{appointment.id}</td>
                        <td>{appointment.date}</td>
                        <td>{appointment.time}</td>
                        <td>
                            <AppointmentDetails
                                appointment={appointment}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    );
};
export default AppointmentsGrid;
