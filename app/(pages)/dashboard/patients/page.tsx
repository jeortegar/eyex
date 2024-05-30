"use client";

import { useEffect } from "react";
import { getPatientsByDoctorId } from "@/services/api/patient";

const Index = () => {
  // useEffect(() => {
  //   getPatientsByDoctorId("Vt26qmJmwHZUryRIVETkgzfLPEf1")
  //     .then((response) => console.log("response", response))
  //     .catch((error) => console.error("Error get patients by doctor", error));
  // }, []);
  return <h1>Patients</h1>;
};

export default Index;
