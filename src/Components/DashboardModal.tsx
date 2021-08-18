import { CircularProgress, Dialog, DialogContent, Grid } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { App, getApps } from "../Data/mock"
import { Theme } from "../Styles/Colors"
import DashboardItem from "./DashboardItem"

interface Props {
  theme: Theme
  dialogOpen: boolean
  toggleModal: () => void
}

const DashboardModal = ({ theme, dialogOpen, toggleModal }: Props) => {
  const [appList, setAppList] = useState<App[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      const apps = await getApps(0)
      setAppList(apps)
      setIsLoading(false)
    })()
  }, [])

  return (
    <Dialog open={dialogOpen} onClose={toggleModal} >
      <DialogContent>
        {isLoading
          ?
          <CircularProgress />
          :
          <Grid container spacing={5}>
            {appList.map(({ id, name }) =>
              <Grid item>
                <DashboardItem key={id} theme={theme} name={name} />
              </Grid>
            )}
          </Grid>
        }
      </DialogContent>
    </Dialog>
  )
}

export default DashboardModal