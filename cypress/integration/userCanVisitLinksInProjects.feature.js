describe("User should be able to click on links in Projects", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#projects-tab").click();
  });

  it("can click on Github link", () => {
    cy.get("#projects-header").should("contain", "My Projects");
  });
});
