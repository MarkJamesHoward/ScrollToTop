describe("The Home Page", function() {
  it("successfully loads", function() {
    cy.visit("/").scrollTo('bottom');
    cy.pause();
    cy.get('#ScrollToTopWC').click();
  });
});
