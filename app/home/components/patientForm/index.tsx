import styled from "styled-components";
import Input from "@/components/ui/form/Input";
import { Field } from "@/styles/global";

const ContentForm = styled.div`
  margin-top: 40px;
`;

const TitleStep = styled.p``;

interface PatientForm {
  register: any;
  errors: any;
}

const Index = ({ register, errors }: PatientForm) => {
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
