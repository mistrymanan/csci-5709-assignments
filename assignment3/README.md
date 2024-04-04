# Assignment 3

* *Date Created*: 04 Apr 2024

* *Last Modification Date*: 04 Apr 2024

* *Assignment URL*: <https://cure-connect.netlify.app/>

* *Git URL*: <https://git.cs.dal.ca/bmevawala/csci-5709-group-12>

## Author

* [Manan Mistry](mn732058@dal.ca) [B00948831]

## Built With

* [React](https://legacy.reactjs.org/docs/getting-started.html/) - The web framework used

* [npm](https://docs.npmjs.com//) - Dependency Management

* [TailwindCss](https://tailwindcss.com/docs) - CSS Framework

* [Firebase Authentication](https://firebase.google.com/docs/auth) - Simple, multi-platform
  sign-in

* [Spring Boot](https://spring.io/projects/spring-boot) - Java-based framework for building web applications

* [MongoDB](https://docs.mongodb.com/) - NoSQL database
* [Model Mapper](https://modelmapper.org/) - Library for Object Mapping

## Feature Development

### Doctor Patient Management

### Tasks

##### [Feature Page Link](https://cure-connect.netlify.app/doctor/patients)
- Doctor views attended patients [After Doctor login click on "Patient Record"]
- Doctor views Past and Upcoming appointments [Click on View Button]
- Doctor updates an old prescription [Click on Edit Button from Past Appointments]

## Files Created as part of individual features

### Frontend

- [DoctorAttendedPatients.jsx](https://git.cs.dal.ca/bmevawala/csci-5709-group-12/-/blob/Mann_Mistry/frontend/cureconnect/src/pages/DoctorsPatients/DoctorAttendedPatients.jsx?ref_type=heads)
- [PatientAppointmentDetails.jsx](https://git.cs.dal.ca/bmevawala/csci-5709-group-12/-/blob/Mann_Mistry/frontend/cureconnect/src/pages/DoctorsPatients/PatientAppoitmentDetails.jsx?ref_type=heads)
- [UpdatePrescription.jsx](https://git.cs.dal.ca/bmevawala/csci-5709-group-12/-/blob/Mann_Mistry/frontend/cureconnect/src/pages/DoctorsPatients/UpdatePrescription.jsx?ref_type=heads)


### Backend

- [DoctorService.java](https://git.cs.dal.ca/bmevawala/csci-5709-group-12/-/blob/Mann_Mistry/backend/CureConnect/src/main/java/com/cureconnect/CureConnect/doctors/service/DoctorService.java?ref_type=heads)
- [DoctorController.java](https://git.cs.dal.ca/bmevawala/csci-5709-group-12/-/blob/Mann_Mistry/backend/CureConnect/src/main/java/com/cureconnect/CureConnect/doctors/controller/DoctorController.java?ref_type=heads)
- [AttendedPatients.java](https://git.cs.dal.ca/bmevawala/csci-5709-group-12/-/blob/Mann_Mistry/backend/CureConnect/src/main/java/com/cureconnect/CureConnect/doctors/DTO/AttendedPatients.java?ref_type=heads)
- [GetPatientAppointments.java](https://git.cs.dal.ca/bmevawala/csci-5709-group-12/-/blob/Mann_Mistry/backend/CureConnect/src/main/java/com/cureconnect/CureConnect/doctors/DTO/GetPatientAppointments.java?ref_type=heads)
- [PatientAppointment.java](https://git.cs.dal.ca/bmevawala/csci-5709-group-12/-/blob/Mann_Mistry/backend/CureConnect/src/main/java/com/cureconnect/CureConnect/doctors/DTO/PatientAppointment.java?ref_type=heads)


## Sources used

### AttendedPatients.java

* Lines 7 - 9

```
@Data
@AllArgsConstructor
@NoArgsConstructor
```

Mentioned code above was created by using the code in [A complete Guide to Lombok](https://auth0.com/blog/a-complete-guide-to-lombok/) as shown below:

```
@Data
public class Author {
    int id;
    String name;
    String surname;
}
```
 ```
@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
public class Author {
    private int id;
    private String name;
    private String surname;
    private final String birthPlace;
}
```

- Lombok helped us to generate boilerplate code such as Getter, Setter and Constructors for below mentioned files :
    - [AttendedPatients.java](https://git.cs.dal.ca/bmevawala/csci-5709-group-12/-/blob/Mann_Mistry/backend/CureConnect/src/main/java/com/cureconnect/CureConnect/doctors/DTO/AttendedPatients.java?ref_type=heads)
    - [GetPatientAppointments.java](https://git.cs.dal.ca/bmevawala/csci-5709-group-12/-/blob/Mann_Mistry/backend/CureConnect/src/main/java/com/cureconnect/CureConnect/doctors/DTO/GetPatientAppointments.java?ref_type=heads)
    - [PatientAppointment.java](https://git.cs.dal.ca/bmevawala/csci-5709-group-12/-/blob/Mann_Mistry/backend/CureConnect/src/main/java/com/cureconnect/CureConnect/doctors/DTO/PatientAppointment.java?ref_type=heads)

### DoctorService.java

* Lines 66 - 69

```
List<PatientAppointment> futureAppointments = appointmentService.getFutureAppointmentsByDoctorIdAndPatientId(doctorId,patientId)
                .stream().map(appointment -> modelMapper.map(appointment, PatientAppointment.class)).toList();
        List<PatientAppointment> pastAppointments = appointmentService.getPastAppointmentsByDoctorIdAndPatientId(doctorId,patientId)
                .stream().map(appointment -> modelMapper.map(appointment, PatientAppointment.class)).toList();
```

Mentioned code above was created by using the code in [Mapping Lists with ModelMapper](https://www.baeldung.com/java-modelmapper-lists) as shown below:

```
List<UserDTO> dtos = users
  .stream()
  .map(user -> modelMapper.map(user, UserDTO.class))
  .collect(Collectors.toList());
```

- The Model Mapper helps to create one object from another one without using multiple lines of code to create and set data in new object (in context of above code User object will be used to create UserDTO's object)

### DoctorController.java
* Lines 47 - 58

```
@GetMapping("/patients")
    @PreAuthorize("hasAuthority('ROLE:DOCTOR')")
    public ResponseEntity getPatients(@AuthenticationPrincipal Jwt jwt) {
        return doctorService.getPatients(jwt.getSubject());
    }

    @GetMapping("/patients/{patientId}/appointments")
    @PreAuthorize("hasAuthority('ROLE:DOCTOR')")
    public ResponseEntity getPatientsAppointments(@AuthenticationPrincipal Jwt jwt, @PathVariable String patientId) {
        return doctorService.getPatientsAppointments(jwt.getSubject(), patientId);
    }
```

Mentioned code above was created by using the code in [Introduction to Spring Method Security](https://www.baeldung.com/spring-security-method-security) as shown below:

```
@PreAuthorize("hasAuthority('SYS_ADMIN')")
public String getUsernameLC(){
    return getUsername().toLowerCase();
}
```

- The Spring Security helped over here to check the claims from JWT (to verify authorization of user) which is being passed to the end point from where the DoctorController.java accesses the DoctorService.java to fetch data.
- The @PreAuthorize annotation was used here to secure the endpoint for particular user

## Acknowledgments

### References
- [Mapping Lists with ModelMaper](https://www.baeldung.com/java-modelmapper-lists)
- [Introduction to Spring Method Security](https://www.baeldung.com/spring-security-method-security)
- [React.js and Spring Data REST](https://spring.io/guides/tutorials/react-and-spring-data-rest)