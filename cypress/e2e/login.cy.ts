describe('Login', () => {

    it('should return invalid credentials', () => {
        // prep 
        // execution 
        // assert
        cy.visit('/login');
        cy.get('input[type="email"]').type('john@doe.com');
        cy.get('input[type="password"]').type('wrongpassword');
        cy.get('button').contains('Log in').click();
        cy.contains('invalid credentials');
    });

    it('should login successfully', () => {
        cy.visit('/login');
        cy.get('input[type="email"]').type('john@doe.com');
        cy.get('input[type="password"]').type('Temp1234');
        cy.get('button').contains('Log in').click();
        cy.contains('Log out');
    });
})