export class ColorCheck {
  static CodeToString(code: string): string {
    switch (code) {
      case "cfff":
        return "white";
      case "c333":
        return "black";
      case "cfe2e2e":
        return "red";
      case "cfe642e":
        return "orange";
      case "cffff00":
        return "yellow";
      case "c01df01":
        return "green";
      case "c0040ff":
        return "blue";
      case "c642efe":
        return "purple";
    }
  }
}
