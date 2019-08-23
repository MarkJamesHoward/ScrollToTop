describe("The Home Page", function() {
  it("successfully loads", function() {
    cy.visit("/").scrollTo("bottom", { duration: 1000 });

    cy.contains("top").click();

    cy.window().then($window => {
      expect($window.scrollY).to.be.closeTo(0, 30);
    });
  });
});
