import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) { }

    async ingresaCredencialesValidas() {
        await this.page.waitForLoadState();
        await this.page.getByRole('textbox', { name: 'Correo electrónico o teléfono' }).fill('jorge@test.com');
        await this.page.getByRole('textbox', { name: 'Contraseña' }).fill('1234abcd');
    }

    async clickBotonIngresar() {
        await this.page.getByRole('button', { name: 'Ingresar' }).click();
    }

    async validarMensajeLoginExito() {
        await this.page.waitForLoadState();
        await this.page.getByRole('heading', { name: '¡Bienvenido a tu tienda favorita!' }).textContent().then((text) => {
            console.log('Mensaje de éxito:', text);
        });
    }
}