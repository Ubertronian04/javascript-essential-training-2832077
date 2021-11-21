class Smartphone {
  constructor(
    model,
    color,
    battery,
    charger,
    storage,
    phoneRAM,
    status,
    waterproof
  ) {
    this.model = model;
    this.color = color;
    this.battery = battery;
    this.charger = charger;
    this.storage = storage;
    this.phoneRAM = phoneRAM;
    this.status = status;
    this.waterproof = waterproof;
  }
  isWaterproof(water) {
    this.waterproof = water;
  }
  currentStatus(newstatus) {
    if (newstatus == 1) {
      this.status = "Power Off";
    } else if (newstatus == 2) {
      this.status = "Power On";
    } else if (newstatus == 3) {
      this.status = "Sleep";
    } else if (newstatus == 4) {
      this.status = "Charging";
    } else {
      this.status = "Unconfirmed";
    }
  }
}

export default Smartphone;
