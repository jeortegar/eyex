import { Controller } from "react-hook-form";
import styled from "styled-components";
import { Box, Typography, FormControl, MenuItem, Select } from "@mui/material";
import Input from "@/components/ui/form/Input";
import { Field } from "@/styles/global";

const ContentForm = styled.div`
  margin-top: 40px;
`;

const TitleStep = styled.p``;

interface PatientForm {
  register: any;
  control: any;
  errors: any;
}

const Index = ({ register, control, errors }: PatientForm) => {
  return (
    <div>
      <TitleStep>Your patient's data</TitleStep>
      <ContentForm>
        <form>
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
        </form>
      </ContentForm>
    </div>
  );
};

export default Index;
