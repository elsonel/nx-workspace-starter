describe('component-lib: ComponentLib component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=componentlib--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ComponentLib!');
  });
});
