describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it("Slider changes when volume input changes", () => {
    cy.get("#volume-number").clear().type('75');
    cy.get("#volume-slider").then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it("Input changes when volume slider changes", () => {
    cy.get("#volume-slider").invoke("val", 33).trigger("input");
    cy.get("#volume-number").then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it("Horn sound volume changes when volume slider change", () => {
    cy.get("#volume-slider").invoke("val", 33).trigger("input");
    cy.get("#horn-sound").then(($el) => {
      expect($el).to.have.prop("volume", 0.33);
    });
  });

  // -------- -------- -------- -------- 

  it("Image changes when party horn selected", () => {
    cy.get("#radio-party-horn").invoke().trigger("input");
    cy.get("#sound-image").then(($el) => {
      expect($el).to.have.prop("src", "./assets/media/images/party-horn.svg");
    });
  });

});
