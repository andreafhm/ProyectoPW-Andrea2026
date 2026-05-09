import { Page } from '@playwright/test';

export class RegisterPage {
  constructor(private page: Page) { }

  async goto() {
    await this.page.goto('https://physician-oxygen-literary-classroom.trycloudflare.com');
  }

  async clickBotonCrearCuenta() {
    await this.page.waitForLoadState();
    await this.page.getByRole('main').getByRole('link', { name: 'Crear cuenta' }).click();
  }

  async ingresaDatosRequeridos() {
    await this.page.waitForLoadState();
    await this.page.getByRole('textbox', { name: 'Nombre/s' }).fill('Andrea Fabiola');
    await this.page.getByRole('textbox', { name: 'Apellido' }).fill('Huayna Moran');
    await this.page.getByRole('textbox', { name: 'Correo electrónico' }).fill('andrea.huayna@gmail.com');
    await this.page.getByRole('textbox', { name: 'Teléfono celular' }).fill('950736629');
    await this.page.getByRole('textbox', { name: 'Contraseña' }).fill('Arequipa2023');
  }

  async clickBotonFinalizarCreacion() {
    await this.page.getByRole('button', { name: 'Crear cuenta' }).click();
  }

  async validarMensajeExito() {
    await this.page.waitForLoadState();
    await this.page.getByRole('heading', { name: '¡Creado con éxito!' }).textContent().then((text) => {
      console.log('Mensaje de éxito:', text);
    });
  }
}