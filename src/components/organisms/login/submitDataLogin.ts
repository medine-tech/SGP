export const submitDataLogin = (): { email: string; password: string; } => {
    
    const correo = document.getElementById('email_user') as HTMLInputElement;
    const contraseña = document.getElementById('password') as HTMLInputElement;

    const data = {
      email: correo.value,
      password: contraseña.value,
    };

    return data;
}

export default submitDataLogin