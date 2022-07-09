//para evitar conflicto entre el link de mui y el router, le damos un alias
import { Link as RouterLink } from "react-router-dom";
import { Grid, Typography, TextField, Button, Link } from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from "../layout/AuthLayout";
//con sx tenemos acceso al tema que definimos, funciona tambien como etiqueta style

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
            <Grid container>
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
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" fullWidth>
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" fullWidth>
                    <Google />
                    <Typography sx={{ ml:1 }}>Google</Typography>
                  </Button>
                </Grid>
              </Grid>

              <Grid container direction="row" justifyContent="end">
                {/* La etiqueta es de mui, el componente es el de react-router */}
                <Link component={ RouterLink } color="inherit" to="/auth/register">
                  Crear una cuenta
                </Link>
              </Grid>

            </Grid>
          </form>
    </AuthLayout>
            
  )
}
