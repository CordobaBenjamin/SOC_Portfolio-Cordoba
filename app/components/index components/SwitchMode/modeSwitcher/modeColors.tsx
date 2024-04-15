import React from "react";

const Colors:any = {
  light: {
    text: {
        textMain: "text-black",
        textSecondary: "text-emerald-700",
        textSecondary2: "text-red-600",
        twisted: "text-emerald-700"
    },
    color: {
        overlap: "shadow-2xl",
        overlap2: 'shadow-2xl shadow-gray-700',
        bg: "bg-gray-200",
        main: "black",
        border: "border-red-700",
        borderY: "border-x-gray-200 border-y-red-700",
        borderSecondary: "border-black",
        borderYSecondary: "border-x-gray-200 border-y-black"
    }
  },
  dark: {
    text: {
        textMain: "text-gray-400",
        textSecondary: "text-emerald-900",
        textSecondary2: "text-emerald-600",
        twisted: "text-emerald-900"
    },
    color: {
        overlap: "dark shadow-2xl shadow-neutral-800",
        overlap2: "bg-zinc-700 shadow-2xl shadow-neutral-700",
        bg: "bg-zinc-900",
        main: "gray-300",
        border: "border-emerald-800",
        borderY: "border-x-zinc-800 border-y-emerald-900",
        borderSecondary: "border-zinc-800",
        borderYSecondary: "border-x-zinc-900 border-y-gray-300"

    },
} };

export default Colors;
