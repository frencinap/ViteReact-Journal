//para evitar conflicto entre el link de mui y el router, le damos un alias
import { Link as RouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Grid, Typography, TextField, Button, Link } from '@mui/material'
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { createUserWithEmailAndPassword } from "../../store/auth";
//con sx tenemos acceso al tema que definimos, funciona tambien como etiqueta style

const formData = {
  email: '',
  password: '',
  displayName:''
}

//implementacion personalizada
const formValidations = {
  email:[(value) => value.includes('@'), 'El coreo debe tener un @'],
  password:[(value) => value.length >= 6, 'La contraseña debe ser de 6 o más carácteres'],
  displayName:[(value) => value.length >=2, 'El nombre es obligatorio']
}

export const RegisterPage = () => {

  const dispatch =  useDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const { 
    displayName, email, password, onInputChange, formState,
    displayNameValid, emailValid, passwordValid, isFormValid 
  } = useForm(formData, formValidations);

  const onSubmitForm = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    if( !isFormValid ) return;
    //console.log(formState);
    dispatch( createUserWithEmailAndPassword(formState) )
  }


  return (
    <AuthLayout title="Registro">
      <form onSubmit = {onSubmitForm} >
            <Grid container>
              <Grid item xs={ 12 } >
                <TextField 
                  label="Nombre" 
                  type="text"
                  placeholder='Escribe tu nombre'
                  fullWidth
                  name="displayName"
                  value={displayName}
                  onChange={onInputChange}
                  sx={{ mb:2 }}
                  error={!!displayNameValid && formSubmitted}
                  helperText={displayNameValid}
                />
              </Grid>
              <Grid item xs={ 12 } >
                <TextField 
                  label="Correo" 
                  type="email"
                  placeholder='correo@ejemplo.com'
                  fullWidth
                  name="email"
                  value={email}
                  onChange={onInputChange}
                  sx={{ mb:2 }}
                  error={emailValid && formSubmitted}
                  helperText={emailValid}
                />
              </Grid>
              <Grid item xs={ 12 } >
                <TextField 
                  label="Contraseña" 
                  type="password"
                  placeholder='Escriba su contraseña'
                  fullWidth
                  name="password"
                  value={password}
                  onChange={onInputChange} 
                  sx={{ mb:2 }}
                  error={!!passwordValid && formSubmitted}
                  helperText={passwordValid}
                />
              </Grid>

              <Grid container spacing={ 2 } sx={{ mb:2, mt:1 }}>
                <Grid item xs={12} >
                  <Button
                    type="submit"
                    variant="contained" 
                    fullWidth
                  >
                    Crear Cuenta
                  </Button>
                </Grid>
              </Grid>

              <Grid container direction="row" justifyContent="end">
                <Typography>¿Ya tienes una cuenta?&nbsp;</Typography>
                <Link component={ RouterLink } color="inherit" to="/auth/login">
                  Ingresar
                </Link>
              </Grid>

            </Grid>
          </form>
    </AuthLayout>           
  )
}
