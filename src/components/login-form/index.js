import { enhancer } from "./LoginForm.enhancer";
import { LoginForm, RegistrationForm } from "./LoginForm";

export const LoginFormContainer = enhancer(LoginForm);
export const RegistrationFormContainer = enhancer(RegistrationForm);
