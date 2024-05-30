import { Controller } from "react-hook-form";
import styled from "styled-components";
import {
  Box,
  Typography,
  FormControl,
  MenuItem,
  Select,
  Grid,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Input from "@/components/ui/form/Input";
import { Field } from "@/styles/global";
import { capitalizeString } from "@/services/utils/transformers";
import "dayjs/locale/es";
import dayjs from "dayjs";

const DatePickerStyle = styled(DatePicker)`
  & .MuiInputBase-input {
    text-transform: capitalize;
  }
`;

const ContentForm = styled.div`
  margin: 30px 0 40px;
`;

interface PatientForm {
  register: any;
  control: any;
  errors: any;
}

interface Props {
  control: any;
  isValid: boolean;
  errors: any;
  setValue: any;
  watch: any;
  setError: any;
  register: any;
  setFileDrop: any;
  getValues: (name: string) => any;
  clearErrors: (a: any) => void;
}

const Index = ({
  control,
  watch,
  setValue,
  setError,
  getValues,
  register,
  errors,
  clearErrors,
  setFileDrop,
}: Props) => {
  const DATE_FORMAT = "DD/MMM/YYYY";

  return (
    <Box>
      <h3>Your patient's data</h3>
      <ContentForm>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Field>
                <label>Name</label>
                <Input
                  type="text"
                  register={register}
                  errors={errors}
                  keyName="name"
                  placeholder=""
                  required={true}
                />
              </Field>
            </Grid>
            <Grid item xs={6}>
              <Field>
                <label>Last name</label>
                <Input
                  type="text"
                  register={register}
                  errors={errors}
                  keyName="last_name"
                  placeholder=""
                  required={true}
                />
              </Field>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Field>
                <label>Birthdate</label>
                <Controller
                  name="birthdate"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      adapterLocale="es"
                    >
                      <FormControl fullWidth>
                        <DatePickerStyle
                          defaultValue={dayjs("2000-01-01")}
                          {...field}
                          sx={{ width: "100%" }}
                          // label="Birthdate"
                          disableFuture
                          format={DATE_FORMAT}
                        />
                      </FormControl>
                    </LocalizationProvider>
                  )}
                />
              </Field>
              {/* <Field>
                <label>Age</label>
                <Input
                  type="number"
                  register={register}
                  errors={errors}
                  keyName="age"
                  placeholder=""
                  required={true}
                />
              </Field> */}
            </Grid>
            <Grid item xs={6}>
              <Field>
                <label>Gender</label>
                <Controller
                  name="gender"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Box>
                      <FormControl fullWidth>
                        <Select
                          fullWidth
                          id="mui-component-select-gender"
                          variant="outlined"
                          {...field}
                        >
                          {["male", "memale"].map((reason: any, k: any) => (
                            <MenuItem key={k} value={reason}>
                              {capitalizeString(reason)}
                            </MenuItem>
                          ))}
                        </Select>
                        {errors.gender && (
                          <Typography
                            variant="caption"
                            sx={{ fontFamily: "Prompt" }}
                          >
                            * Este campo es requerido
                          </Typography>
                        )}
                      </FormControl>
                    </Box>
                  )}
                />
              </Field>
            </Grid>
          </Grid>
          <Field>
            <label>Address</label>
            <Input
              type="text"
              register={register}
              errors={errors}
              keyName="address"
              placeholder=""
              required={true}
            />
          </Field>
          <Field>
            <label>social security number</label>
            <Input
              type="number"
              register={register}
              errors={errors}
              keyName="nss"
              placeholder=""
              required={true}
            />
          </Field>
        </form>
      </ContentForm>
    </Box>
  );
};

export default Index;
