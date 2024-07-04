import { HiOutlineEye, HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import useInput from "use-input-easy";
import InputGroup from "./InputGroup";
import { FormEvent, useState } from "react";
import { HiOutlineEyeSlash } from "react-icons/hi2";
import Modal from "./Modal";

function handleConfirm(password: string, confPassword: string) {
  return password.trim().length > 0 && password === confPassword;
}

const passRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+=\\[\]{};':"\\|,<>.?]).+$/;
function checkPassword(value: string) {
  return passRegex.test(value) && value.trim().length > 5;
}

export default function SignUp() {
  const [showModal, setShowModal] = useState(false);

  const [email, setEmail] = useInput({ isEmail: true });

  const [accountName, setAccountName] = useInput({ minLength: 2 });

  const [password, setPassword] = useInput({
    validationFnc: (value) => checkPassword(value),
  });
  const [showPassword, setShowPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useInput({
    validationFnc: (value) => handleConfirm(password.value, value),
  });
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function handleReset() {
    setEmail.handleChange("");
    setAccountName.handleChange("");
    setPassword.handleChange("");
    setConfirmPassword.handleChange("");
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!email.isValueValid) setEmail.handleBlur();
    if (!accountName.isValueValid) setAccountName.handleBlur();
    if (!password.isValueValid) setPassword.handleBlur();
    if (!confirmPassword.isValueValid) setConfirmPassword.handleBlur();

    if (
      !email.isValueValid ||
      !accountName.isValueValid ||
      !password.isValueValid ||
      !confirmPassword.isValueValid
    )
      return;

    console.log({ email, password });
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
    handleReset();
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="border max-w-lg flex flex-col gap-4 mx-auto mt-24 px-1 md:px-4 py-8"
      >
        <h1 className="text-center text-2xl">Sign Up</h1>

        <InputGroup
          label="Email"
          id="email"
          value={email.value}
          onChange={setEmail.handleChange}
          onBlur={setEmail.handleBlur}
          icon={<HiOutlineMail />}
          type="email"
          isError={email.inputIsInvalid}
          placeholder="Your Email..."
          errorMessage="Please enter valid E-mail."
        />

        <InputGroup
          label="Account Name"
          id="account-name"
          value={accountName.value}
          onChange={setAccountName.handleChange}
          onBlur={setAccountName.handleBlur}
          icon={<HiOutlineUser />}
          type="text"
          isError={accountName.inputIsInvalid}
          placeholder="Account Name..."
          errorMessage="Please enter a account name min 3 chars."
        />
        <InputGroup
          label="Password"
          id="password"
          value={password.value}
          onChange={setPassword.handleChange}
          onBlur={setPassword.handleBlur}
          icon={showPassword ? <HiOutlineEye /> : <HiOutlineEyeSlash />}
          type={showPassword ? "text" : "password"}
          isError={password.inputIsInvalid}
          onClickIcon={() => setShowPassword((cur) => !cur)}
          placeholder="Enter a password..."
          errorMessage="at least one 'uppercase' and one 'special chars' and min 6 chars"
        />
        <InputGroup
          label="Confirm Password"
          id="confirm-password"
          value={confirmPassword.value}
          onChange={setConfirmPassword.handleChange}
          onBlur={setConfirmPassword.handleBlur}
          icon={showConfirmPassword ? <HiOutlineEye /> : <HiOutlineEyeSlash />}
          type={showConfirmPassword ? "text" : "password"}
          isError={confirmPassword.inputIsInvalid}
          onClickIcon={() => setShowConfirmPassword((cur) => !cur)}
          placeholder="Confirm Your Password..."
          errorMessage="Passwords must match"
        />
        <div className="flex gap-8 justify-center items-center mt-12">
          <button
            onClick={handleReset}
            className="text-lg hover:scale-110 duration-200"
            type="reset"
          >
            Reset
          </button>
          <button className="border bg-pink-700 px-4 py-2 rounded-sm hover:bg-pink-800 duration-200">
            Sing Up
          </button>
        </div>
      </form>
      <Modal isOpen={showModal} onClose={handleCloseModal}>
        <div className="text-zinc-50 flex flex-col gap-4 items-center w-full">
          <h2 className="text-2xl">
            Welcome <b>"{accountName.value}"</b>
          </h2>
          <p className="text-lg">Your account successfully created</p>
          <button
            onClick={handleCloseModal}
            className="border px-4 py-2 rounded-sm"
          >
            Done
          </button>
        </div>
      </Modal>
    </>
  );
}
