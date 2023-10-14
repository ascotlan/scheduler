describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("localhost:8000/");
  });

  it("should navigate to Tuesday", () => {
    cy.get("li").contains("Tuesday").click();
    cy.contains("[data-testid=day]", "Tuesday")
      .click()
      .should("have.class", "day-list__item--selected");
  });
});
