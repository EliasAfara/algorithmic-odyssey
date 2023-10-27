import { generateDocument } from "../GenerateDocument.js";

describe("generateDocument", () => {
  it("should return true for a valid document", () => {
    const characters = "Bste!hetsi ogEAxpelrt x ";
    const document = "AlgoExpert is the Best!";
    expect(generateDocument(characters, document)).toBe(true);
  });

  it("should return false for an invalid document", () => {
    const characters = "abcabc";
    const document = "aabbccc";
    expect(generateDocument(characters, document)).toBe(false);
  });

  it("should return false when characters do not contain required character", () => {
    const characters = "A";
    const document = "a";
    expect(generateDocument(characters, document)).toBe(false);
  });

  it("should return true when the document is empty", () => {
    const characters = "a hsgalhsa sanbjksbdkjba kjx";
    const document = "";
    expect(generateDocument(characters, document)).toBe(true);
  });

  it("should return false when characters do not contain required characters", () => {
    const characters = " ";
    const document = "hello";
    expect(generateDocument(characters, document)).toBe(false);
  });

  it("should return false when characters lack required characters", () => {
    const characters = "aheaolabbhb";
    const document = "hello";
    expect(generateDocument(characters, document)).toBe(false);
  });

  it("should return true when characters contain required characters", () => {
    const characters = "&*&you^a%^&8766 _=-09     docanCMakemthisdocument";
    const document = "Can you make this document &";
    expect(generateDocument(characters, document)).toBe(true);
  });
});
