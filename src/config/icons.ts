// Ícones Phosphor (peso bold, combina com o contorno dos cards e adesivos), importados como SVG bruto.
import whatsapp from "@phosphor-icons/core/assets/bold/whatsapp-logo-bold.svg?raw";
import instagram from "@phosphor-icons/core/assets/bold/instagram-logo-bold.svg?raw";
import arrowUpRight from "@phosphor-icons/core/assets/bold/arrow-up-right-bold.svg?raw";
import arrowDown from "@phosphor-icons/core/assets/bold/arrow-down-bold.svg?raw";
import arrowLeft from "@phosphor-icons/core/assets/bold/arrow-left-bold.svg?raw";
import arrowRight from "@phosphor-icons/core/assets/bold/arrow-right-bold.svg?raw";
import arrowsLeftRight from "@phosphor-icons/core/assets/bold/arrows-left-right-bold.svg?raw";
import mapPin from "@phosphor-icons/core/assets/bold/map-pin-bold.svg?raw";
import clock from "@phosphor-icons/core/assets/bold/clock-bold.svg?raw";
import pause from "@phosphor-icons/core/assets/bold/pause-bold.svg?raw";
import play from "@phosphor-icons/core/assets/bold/play-bold.svg?raw";
import butterfly from "@phosphor-icons/core/assets/bold/butterfly-bold.svg?raw";
import syringe from "@phosphor-icons/core/assets/bold/syringe-bold.svg?raw";
import drop from "@phosphor-icons/core/assets/bold/drop-bold.svg?raw";
import dropHalf from "@phosphor-icons/core/assets/bold/drop-half-bold.svg?raw";
import heart from "@phosphor-icons/core/assets/bold/heart-bold.svg?raw";
import userFocus from "@phosphor-icons/core/assets/bold/user-focus-bold.svg?raw";
import smiley from "@phosphor-icons/core/assets/bold/smiley-bold.svg?raw";
import sparkle from "@phosphor-icons/core/assets/bold/sparkle-bold.svg?raw";
import wave from "@phosphor-icons/core/assets/bold/wave-sine-bold.svg?raw";
import leaf from "@phosphor-icons/core/assets/bold/leaf-bold.svg?raw";
import wand from "@phosphor-icons/core/assets/bold/magic-wand-bold.svg?raw";
import crown from "@phosphor-icons/core/assets/bold/crown-bold.svg?raw";
import lightning from "@phosphor-icons/core/assets/bold/lightning-bold.svg?raw";
import chats from "@phosphor-icons/core/assets/bold/chats-circle-bold.svg?raw";
import clipboard from "@phosphor-icons/core/assets/bold/clipboard-text-bold.svg?raw";
import calendarCheck from "@phosphor-icons/core/assets/bold/calendar-check-bold.svg?raw";
import sealCheck from "@phosphor-icons/core/assets/bold/seal-check-bold.svg?raw";
import handHeart from "@phosphor-icons/core/assets/bold/hand-heart-bold.svg?raw";
import flower from "@phosphor-icons/core/assets/bold/flower-lotus-bold.svg?raw";

export const ICONS = {
  whatsapp,
  instagram,
  arrowUpRight,
  arrowDown,
  arrowLeft,
  arrowRight,
  arrowsLeftRight,
  mapPin,
  clock,
  pause,
  play,
  butterfly,
  syringe,
  drop,
  dropHalf,
  heart,
  userFocus,
  smiley,
  sparkle,
  wave,
  leaf,
  wand,
  crown,
  lightning,
  chats,
  clipboard,
  calendarCheck,
  sealCheck,
  handHeart,
  flower,
} as const;

export type IconName = keyof typeof ICONS;
