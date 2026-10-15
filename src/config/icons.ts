// Ícones Phosphor (peso regular, traço fino como os glifos da Apple), importados como SVG bruto.
import whatsapp from "@phosphor-icons/core/assets/regular/whatsapp-logo.svg?raw";
import instagram from "@phosphor-icons/core/assets/regular/instagram-logo.svg?raw";
import mapPin from "@phosphor-icons/core/assets/regular/map-pin.svg?raw";
import caretRight from "@phosphor-icons/core/assets/bold/caret-right-bold.svg?raw";
import caretLeft from "@phosphor-icons/core/assets/bold/caret-left-bold.svg?raw";
import arrowUpRight from "@phosphor-icons/core/assets/regular/arrow-up-right.svg?raw";
import list from "@phosphor-icons/core/assets/regular/list.svg?raw";
import x from "@phosphor-icons/core/assets/regular/x.svg?raw";
import phone from "@phosphor-icons/core/assets/regular/phone.svg?raw";
import navigation from "@phosphor-icons/core/assets/regular/navigation-arrow.svg?raw";
import calendar from "@phosphor-icons/core/assets/regular/calendar-check.svg?raw";

export const ICONS = { whatsapp, instagram, mapPin, caretRight, caretLeft, arrowUpRight, list, x, phone, navigation, calendar } as const;

export type IconName = keyof typeof ICONS;
