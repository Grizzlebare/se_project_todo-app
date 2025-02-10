import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const inputs = Array.from(
      this._popupForm.querySelectorAll(".popup__input")
    );
    const inputValues = {};
    inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      this._handleFormSubmit(this._getInputValues());
      evt.preventDefault();
    });
  }
}
export default PopupWithForm;
