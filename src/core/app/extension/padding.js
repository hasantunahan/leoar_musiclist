import { getWidth } from "./dimension";

export function lowPadding() {
    return getWidth()*.01
}

export function normalPadding() {
    return getWidth()*.03
}

export function highPadding() {}
