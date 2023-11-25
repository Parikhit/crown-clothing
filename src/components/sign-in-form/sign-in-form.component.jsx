import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import { SignInContainer, ButtonContainer } from './sign-in-form.styles';

const defaultFormfields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormfields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormfields);
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);

            resetFormFields();
        } catch (error) {
            error.code === 'auth/invalid-login-credentials'
                ? alert('Incorrect password for email')
                : console.log(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign In with your Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />

                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />
                <ButtonContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button
                        type='button'
                        buttonType={BUTTON_TYPE_CLASSES.google}
                        onClick={signInWithGoogle}
                    >
                        Google Sign In
                    </Button>
                </ButtonContainer>
            </form>
        </SignInContainer>
    );
};

export default SignInForm;
