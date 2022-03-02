import React from 'react';
import './App.css';

function App() {
    const [nameField, SetNameField] = React.useState('')
    const [ageField, SetAgeField] = React.useState(0)
    const [remarkField, SetRemarkField] = React.useState('')
    const [checkedTerms, toggleCheckedTerms] = React.useState(false)
    function handleSubmit(e) {
        e.preventDefault();
        console.log(nameField, ageField, remarkField, checkedTerms);
    }
  return (
      <>
          <form onSubmit={handleSubmit}>
              <fieldset>
            <legend>Gegevens</legend>

                    <div>
                        <label htmlFor="nameField">
                            Naam:
                            <input
                                type="text"
                                id="nameField"
                                name="nameField"
                                value={nameField}
                                onChange={(e) => SetNameField(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="ageField">
                            Leeftijd:
                            <input
                                type="number"
                                id="ageField"
                                name="ageField"
                                value={ageField}
                                onChange={(e) => SetAgeField(e.target.value)}
                            />
                        </label>
                    </div>
        </fieldset>
</form>
          <fieldset>
              <legend>Jouw review</legend>
              <form>
                  <div>
                      <label htmlFor="remarkField">
                              <textarea
                                  name="remarkField"
                                  id="remarkField"
                                  cols="40"
                                  rows="4">
                                  value={remarkField}
                                  placeholder="Wat vond je van het recept?"
                                  onChange={(e) => SetRemarkField(e.target.value)}
                          </textarea>
                      </label>
                  </div>
                  <div>
                      <label htmlFor="checkboxNewsletter">
                          <input
                              type="checkbox"
                              id="checkboxNewsletter"
                              name="checkboxNewsletter"
                              checked={checkedTerms}
                              onChange={() => toggleCheckedTerms(!checkedTerms)}
                          />
                          Ik schrijf me in voor de nieuwbrief
                      </label>
                  </div>
                  <div>
                      <button
                          disabled={!checkedTerms}
                          type="submit"
                      >
                          Versturen
                      </button>
                  </div>
              </form>

          </fieldset>
      </>
)
}

export default App;