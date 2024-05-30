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
import Input from "@/components/ui/form/Input";
import { Field } from "@/styles/global";

const ContentForm = styled.div`
  margin: 30px 0 40px;
`;

interface PatientForm {
  register: any;
  control: any;
  errors: any;
}

const Index = ({ register, control, errors }: PatientForm) => {
  return (
    <Box>
      <h3>Your patient's data</h3>
      <ContentForm>
        <form>
          <Field>
            <label>Full Name</label>
            <Input
              type="text"
              register={register}
              errors={errors}
              keyName="full name"
              placeholder=""
              required={true}
            />
          </Field>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Field>
                <label>Age</label>
                <Input
                  type="number"
                  register={register}
                  errors={errors}
                  keyName="age"
                  placeholder=""
                  required={true}
                />
              </Field>
            </Grid>
            <Grid item xs={6}>
              <Field>
                <label>Sex</label>
                <Controller
                  name="sex"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Box>
                      <FormControl fullWidth>
                        <Select
                          fullWidth
                          id="mui-component-select-sex"
                          variant="outlined"
                          {...field}
                        >
                          {["Male", "Female"].map((reason: any, k: any) => (
                            <MenuItem key={k} value={reason}>
                              {reason}
                            </MenuItem>
                          ))}
                        </Select>
                        {errors.sex && (
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
            <label>address</label>
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
            <label>NSS</label>
            <Input
              type="text"
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
