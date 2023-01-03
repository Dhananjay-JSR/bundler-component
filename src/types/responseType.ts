// Generated by https://quicktype.io

export default interface ThemeTypeGenerator {
    breakpoints:   Breakpoints;
    borderPresets: BorderPresets;
    colorPalettes: ColorPalettes;
    textstyles:    { [key: string]: Textstyle };
    radiusPresets: RadiusPresets;
    shadowPresets: ShadowPresets;
}

export interface BorderPresets {
    B1: string;
    B2: string;
    B0: string;
    B8: string;
}

export interface Breakpoints {
    mobile:  string;
    laptop:  string;
    desktop: string;
}

export interface ColorPalettes {
    default:     Default;
    new_palette: NewPalette;
}

export interface Default {
    error:     { [key: string]: string };
    neutral:   { [key: string]: string };
    primary:   { [key: string]: string };
    secondary: { [key: string]: string };
    success:   { [key: string]: string };
    tertiary:  Tertiary;
    warning:   Tertiary;
}

export interface Tertiary {
}

export interface NewPalette {
    error:     Error;
    neutral:   { [key: string]: string };
    primary:   { [key: string]: string };
    secondary: Tertiary;
    success:   Success;
    tertiary:  Tertiary;
    warning:   Warning;
}

export interface Error {
    E100: string;
}

export interface Success {
    SU100: string;
}

export interface Warning {
    W100: string;
}

export interface RadiusPresets {
    R3: string;
    R2: string;
    R1: string;
    R0: string;
    R5: string;
    R8: string;
    R4: string;
    R6: string;
    R7: string;
    R9: string;
}

export interface ShadowPresets {
    S1: string;
    S0: string;
}

export interface Textstyle {
    fontfamily:  Fontfamily;
    fontsize:    string;
    fontweight:  Fontweight;
    line_height: null | string;
}

export enum Fontfamily {
    Lexend = "Lexend",
}

export enum Fontweight {
    Medium = "medium",
    Regular = "regular",
}
