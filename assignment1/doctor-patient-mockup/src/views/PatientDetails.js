import React from "react";
import MedicalHistory from "./MedicalHistory";
import {useParams} from "react-router-dom";
import { Col, Container, ListGroup, Row} from "react-bootstrap";

const PatientDetails = ({ patientsData,appointmentsData }) => {
    // const [showMedicalHistory, setShowMedicalHistory] = useState(false);
    let {id} = useParams();
    console.log(id);
    let selectedPatient = patientsData.filter(patient =>
        patient.id === Number(id)
    )[0];
    console.log(selectedPatient);
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <h2>Profile</h2>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <strong>Name:</strong> {selectedPatient.name}<br/>
                            <strong>Age:</strong> {selectedPatient.age}<br/>
                            <strong>Weight:</strong> {selectedPatient.weight}<br/>
                            <strong>Height:</strong> {selectedPatient.height}<br/>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={9}>
                    <MedicalHistory patientData={patientsData} selectedPatient={selectedPatient} appointmentsData={appointmentsData} />
                </Col>
            </Row>
        </Container>
    );
};
export default PatientDetails;