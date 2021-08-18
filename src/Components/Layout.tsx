import { Box } from "@material-ui/core"
import { Theme } from "../Styles/Colors"
import { useStyles } from "../Styles/Hooks"

interface Props {
    theme: Theme
    onClick: () => void
}

const Layout = ({ theme, onClick }: Props) => {
    const { layout } = useStyles({ theme })

    return (
        <Box className={layout} onClick={onClick} />
    )
}


export default Layout