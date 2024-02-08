import AppointmentDetails from "./AppointmentDetails";
import React from "react";

const AppointmentsGrid = ({appointmentsData}) => {
    return (
        <div>
            <h2>Appointments</h2>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {appointmentsData.map(appointment => (
                    <tr key={appointment.id}>
                        <td>{appointment.id}</td>
                        <td>{appointment.date}</td>
                        <td>{appointment.time}</td>
                        <td>
                            {/* Link to view appointment details */}
                            <AppointmentDetails appointment={appointment} onUpdate={() => console.log('Update')} onSave={() => console.log('Save')} />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
export default AppointmentsGrid;