import { Fab } from "@material-ui/core"
import { Brightness2, Brightness7 } from "@material-ui/icons"
import { LIGHT, Theme } from "../Styles/Colors"
import { useStyles } from "../Styles/Hooks"

interface Props {
  theme: Theme
  onClick: () => void
}

const ThemeFab = ({ theme, onClick }: Props) => {
  const { fab } = useStyles({ theme })

  return (
    <Fab className={fab} onClick={onClick}>
      {theme === LIGHT ? <Brightness2 /> : <Brightness7 />}
    </Fab>
  )
}

export default ThemeFab