import { makeStyles } from "@material-ui/core";
import { DARK_DARK, DARK_INFO, DARK_PRIMARY, DARK_SECONDARY, LIGHT, LIGHT_DARK, LIGHT_INFO, LIGHT_LIGHT, LIGHT_PRIMARY, Theme } from "./Colors";

interface Props {
    theme: Theme
}

const baseLayout = {
    height: "100vh",
    width: "100vw",
}
const baseFab = {
    bottom: "2rem",
    right: "2rem",
}

export const useStyles = makeStyles({
    layout: ({ theme }: Props) => theme === LIGHT ?
        {
            ...baseLayout,
            background: `radial-gradient(
                circle,
                ${LIGHT_PRIMARY}15%,
                ${LIGHT_DARK} 25%,
                ${LIGHT_INFO} 34%,
                ${LIGHT_DARK} 36%,
                ${LIGHT_PRIMARY} 43%,
                ${LIGHT_PRIMARY} 56%,
                ${LIGHT_DARK} 63%,
                ${LIGHT_LIGHT} 75%
            );`
        } :
        {
            ...baseLayout,
            background: `radial-gradient(
                circle,
                ${DARK_PRIMARY} 15%,
                ${DARK_DARK} 25%,
                ${DARK_SECONDARY} 34%,
                ${DARK_DARK} 36%,
                ${DARK_DARK} 46%,
                ${DARK_PRIMARY} 48%,
                ${DARK_PRIMARY} 51%,
                ${DARK_SECONDARY} 53%,
                ${DARK_DARK} 68%,
                ${DARK_SECONDARY} 74%
            );`
        },
    fab: ({ theme }: Props) => theme === LIGHT ?
        {
            ...baseFab,
            position: "fixed",
            color: LIGHT_PRIMARY,
            backgroundColor: LIGHT_INFO,
        } : {
            ...baseFab,
            position: "fixed",
            color: DARK_PRIMARY,
            backgroundColor: DARK_INFO,
        },
    paper: ({ theme }: Props) => theme === LIGHT ?
        {
            height: "100px",
            width: "100px",
        } :
        {
            height: "100px",
            width: "100px",
        },
})
