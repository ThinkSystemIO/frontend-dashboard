import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, CircularProgress, Typography } from "@material-ui/core"
import { useEffect, useState } from "react"
import { Theme } from "../Styles/Colors"
import { useStyles } from "../Styles/Hooks"
import { activateService, isServiceDeployed, pollIsServiceDeployed } from "../Utils/utils"

interface Props {
    theme: Theme
    name: string
}

const DashboardItem = ({ theme, name }: Props) => {
    const { paper } = useStyles({ theme })
    const [isLoading, setIsLoading] = useState(false)
    const [isAppActivated, setIsAppActivated] = useState(false)

    useEffect(() => {
        (async () => {
            setIsLoading(true)
            const isActivated = await isServiceDeployed(name)
            setIsAppActivated(isActivated)
            setIsLoading(false)
        })()
    }, [name])

    const activate = async () => {
        setIsLoading(true)
        await activateService(name)
        const isActivated = await pollIsServiceDeployed(name)
        setIsAppActivated((isActivated))
        setIsLoading(false)
    }

    const redirect = () => window.location.href = `./${name}`

    return (
        <Card>
            {isLoading
                ?
                <CardContent>
                    <CircularProgress />
                </CardContent>
                :
                isAppActivated ?
                    <CardActionArea>
                        <CardMedia>
                            {"image"}
                        </CardMedia>
                        <Typography>
                            {name}
                        </Typography>
                        <Button onClick={redirect}>Open</Button>
                    </CardActionArea>
                    :
                    <CardContent>
                        <CardMedia>
                            {"image"}
                        </CardMedia>
                        <CardActions>
                            <Button onClick={activate}>Activate</Button>
                        </CardActions>
                    </CardContent>
            }
        </Card >
    )
}

export default DashboardItem