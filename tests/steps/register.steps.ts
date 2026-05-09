import { Given, When, Then } from '@cucumber/cucumber';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';

Given('el usuario ingresa a la página de MercadoPrueba', async function () {
  this.registerPage = new RegisterPage(this.page);
  this.loginPage = new LoginPage(this.page);
  await this.registerPage.goto();
});

When('da click en el botón Crear Cuenta', async function () {
  await this.registerPage.clickBotonCrearCuenta();
});

When('ingresa los datos requeridos para crear una cuenta', async function () {
  await this.registerPage.ingresaDatosRequeridos();
});

When('da click en el botón', async function () {
  await this.registerPage.clickBotonFinalizarCreacion();
});

Then('el usuario visualiza un mensaje de Creado con Éxito', async function () {
  await this.registerPage.validarMensajeExito();
});