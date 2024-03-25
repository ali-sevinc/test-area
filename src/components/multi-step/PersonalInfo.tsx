import Button from "./Button";
import InputGroup from "./InputGroup";
import StepContainer from "./StepContainer";

type PropsType = {
  onNext: () => void;
  values: { name: string; email: string; phone: string };
  onChange: (key: "name" | "email" | "phone", value: string) => void;
};

const emailRegex = /^\S+@\S+\.\S+$/;
const phoneRegex = /^\+?[1-9][0-9]{7,14}$/;
export default function PersonalInfo({ onNext, onChange, values }: PropsType) {
  const isNameValid = values.name.trim().length > 2;
  const isEmailValid = emailRegex.test(values.email);
  const isPhoneValid = phoneRegex.test(values.phone);

  const validValues = isNameValid && isEmailValid && isPhoneValid;

  return (
    <StepContainer
      text="Please provide your name, email and phone number."
      title="Personal Info"
    >
      <div>
        <InputGroup
          id="name"
          label="Name"
          placeholder="Your Name..."
          type="text"
          value={values.name}
          onChange={onChange}
          validValue={isNameValid}
        />
        <InputGroup
          id="email"
          label="Email Address"
          placeholder="Your Email..."
          type="email"
          value={values.email}
          onChange={onChange}
          validValue={isEmailValid}
        />
        <InputGroup
          id="phone"
          label="Phone Number"
          placeholder="Your Phone..."
          type="tel"
          value={values.phone}
          onChange={onChange}
          validValue={isPhoneValid}
        />
        <div className="text-end mt-12 mb-4">
          <Button onClick={onNext} disabled={!validValues}>
            Next Step
          </Button>
        </div>
      </div>
    </StepContainer>
  );
}
