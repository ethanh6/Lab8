describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  // ------- Test 1 ---------
  it("Slider changes when volume input changes", () => {
    cy.get("#volume-number").clear().type('75');
    cy.get("#volume-slider").then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  // ------- Test 2 ---------
  it("Volume input changes when volume slider changes", () => {
    cy.get("#volume-slider").invoke("val", 33).trigger("input");
    cy.get("#volume-number").then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  // ------- Test 3 ---------
  it("Horn sound volume changes when volume slider change", () => {
    cy.get("#volume-slider").invoke("val", 33).trigger("input");
    cy.get("#horn-sound").then(($el) => {
      expect($el).to.have.prop("volume", 0.33);
    });
  });

  // -------- -------- -------- -------- 

  // ------- Test 4 ---------
  it("Image changes when party horn selected", () => {

    cy.get("#radio-party-horn").click();

    // check image
    cy.get("#sound-image").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/images/party-horn.svg");
    });

    // check sound
    cy.get("#horn-sound").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/audio/party-horn.mp3");
    });
  });

  // ------- Test 5 ---------
  it("Volume image changes when increasing volume", () => {

    // vol = 0
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });

    // vol = 10
    cy.get('#volume-number').clear().type('10');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });

    // vol = 20
    cy.get('#volume-number').clear().type('20');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });

    // vol = 40
    cy.get('#volume-number').clear().type('40');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });


    // vol = 60
    cy.get('#volume-number').clear().type('40');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });

    // vol = 70
    cy.get('#volume-number').clear().type('70');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });

    // vol = 90
    cy.get('#volume-number').clear().type('90');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  })


  // ------- Test 6 ---------
  // splitted into 2 "it" block
  it("the honk button is disabled when the textbox input is empty", () => {
    cy.get("#volume-number").clear();
    cy.get("#honk-btn").then(($el) => {
      expect($el).to.have.prop("disabled", true);
    });
  })

  it("the honk button is disabled when the textbox input is a non-number", () => {
    cy.get("#volume-number").clear().type("non-number");
    cy.get("#honk-btn").then(($el) => {
      expect($el).to.have.prop("disabled", true);
    });
  })

  // ------- Test 7 ---------
  it("error is shown when you type a number outside of the given range for the volume textbox input", () => {
    cy.get("#volume-number").clear().type("-1");
    cy.get("#volume-number:invalid").should('exist');
    cy.get("#volume-number").then(($el) => {
      expect($el[0].validationMessage).to.eq("Value must be greater than or equal to 0.");
    });

    cy.get("#volume-number").clear().type("200");
    cy.get("#volume-number:invalid").should('exist');
    cy.get("#volume-number").then(($el) => {
      expect($el[0].validationMessage).to.eq("Value must be less than or equal to 100.");
    });

  })

});
