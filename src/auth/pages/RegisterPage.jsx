//para evitar conflicto entre el link de mui y el router, le damos un alias
import { Link as RouterLink } from "react-router-dom";
import { Grid, Typography, TextField, Button, Link } from '@mui/material'
import { AuthLayout } from "../layout/AuthLayout";
//con sx tenemos acceso al tema que definimos, funciona tambien como etiqueta style

export const RegisterPage = () => {
  return (
    <AuthLayout title="Registro">
      <form>
            <Grid container>
              <Grid item xs={ 12 } >
                <TextField 
                  label="Nombre" 
                  type="text"
                  placeholder='Escribe tu nombre'
                  fullWidth
                  sx={{ mb:1 }}
                />
              </Grid>
              <Grid item xs={ 12 } >
                <TextField 
                  label="Correo" 
                  type="email"
                  placeholder='correo@ejemplo.com'
                  fullWidth
                  sx={{ mb:1 }}
                />
              </Grid>
              <Grid item xs={ 12 } >
                <TextField 
                  label="Contraseña" 
                  type="password"
                  placeholder='Escriba su contraseña'
                  fullWidth 
                  sx={{ mb:1 }}
                />
              </Grid>

              <Grid container spacing={ 2 } sx={{ mb:2, mt:1 }}>
                <Grid item xs={12} >
                  <Button variant="contained" fullWidth>
                    Crear Cuenta
                  </Button>
                </Grid>
              </Grid>

              <Grid container direction="row" justifyContent="end">
                <Typography>¿Ya tienes una cuenta? </Typography>
                <Link component={ RouterLink } color="inherit" to="/auth/login">
                  Ingresar
                </Link>
              </Grid>

            </Grid>
          </form>
    </AuthLayout>           
  )
}
