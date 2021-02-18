// oos locators estão organizados por telas: Login/ Alteração de cadastro
const locators = {
    LOGIN: { 
        USER: '[data-cy=signIn-email-input]',
        BTN_LOGIN: '[data-cy=signIn-submitEmail-button]',
        PASSWORD: '[data-cy=signIn-password-input]',
        BTN_PWD: '[data-cy=signIn-submitPassword-button]'
    },

    ALTERATION: {
        TELEPHONE: '.xh8zl8-3 > :nth-child(3) > .sc-1t34j8k-0 > .zyph1p-0 > .sc-8x5f04-3 > .sc-8x5f04-2 > .sc-8x5f04-0 > .sc-8x5f04-1',
        BTN_ALTERATION: '.xh8zl8-3 > .vn1pxw-2',

    },
MESSAGE: '.sc-6knbdo-2'

}

export default locators;
