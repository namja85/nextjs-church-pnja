let instance = null;

class MyChurch {
  constructor() {
    if (instance) {
      return instance;
    }

    this._name = '평내중앙교회';
    this._address = '경기 남양주시 평내로29번길 51-30';
    this._zipCode = '12223';
    this._location = {
      latitude: 37.647,
      longitude: 127.23511,
    };
    this._email = 'info@pnja.or.kr';
    this._phone = '0315957373';

    instance = this;
  }

  get name() {
    return this._name;
  }
  get address() {
    return this._address;
  }
  get zipCode() {
    return this._zipCode;
  }
  get location() {
    return this._location;
  }
  get email() {
    return this._email;
  }
  get phone() {
    return this._phone;
  }
}

export const church = new MyChurch();
