import React from "react";
import {useParams} from "react-router-dom";
import {Container, ListGroup} from "react-bootstrap";

const MedicationDetails = ({ appointmentsData }) => {

    // medications={appointmentsData.medications}
    let {id,appointmentId} = useParams();
    console.log(id);
    let medications = appointmentsData.filter(appointment =>
        appointment.patientId === Number(id) && appointment.id === Number(appointmentId)
    )[0].medications;

    // console.log(selectedPatient);

    return (
        <Container>
            <h3>Medication Details</h3>
            <ListGroup>
                {medications.map((medication, index) => (
                    <ListGroup.Item key={index}>{medication}</ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};
export default MedicationDetails;