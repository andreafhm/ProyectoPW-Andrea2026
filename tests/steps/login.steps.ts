import { When, Then } from '@cucumber/cucumber';

When('ingresa las credenciales válidas', async function () {
  await this.loginPage.ingresaCredencialesValidas();
});

When('da click en el botón de ingresar', async function () {
  await this.loginPage.clickBotonIngresar();
});

Then('el usuario debería ser redirigido y ver un mensaje de bienvenida', async function () {
  await this.loginPage.validarMensajeLoginExito();
});