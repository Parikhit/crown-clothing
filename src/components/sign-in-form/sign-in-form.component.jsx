import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import './sign-in-form.styles.scss';
import Button from '../button/button.component';
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
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
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
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign In with your Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />

                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
