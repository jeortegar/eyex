import { db } from "../../../../firebase";

interface Doctor {
  doctor_id: string;
  speciality: string;
}

interface CreatePatientProps {
  name: string;
  last_name: string;
  birthdate: any;
  gender: string;
  address: string;
  nss: string;
  file: any;
  doctor: Doctor;
}

export const creatPatient = (data: CreatePatientProps) => {
  console.log("patient", data);
  return new Promise((resolve, reject) => {
    // Save the information of patient
    db.collection("patients")
      .doc()
      .set(data)
      .then(() => {
        resolve(data);
      })
      .catch((error) => reject(error));
  });
};

export const getPatientsByDoctorId = (doctor_id: string) => {
  console.log("doctor_id", doctor_id);
  return new Promise((resolve, reject) => {
    db.collection("patients")
      .where("doctor.doctor_id", "==", doctor_id)
      .get()
      .then(function (querySnapshot) {
        const docSnapshots = querySnapshot.docs;
        let result = [];
        for (let snapShot of docSnapshots) {
          const doc = snapShot.data();
          result.push(doc);
        }
        resolve(result);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};
