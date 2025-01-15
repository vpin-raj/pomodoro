import { useState } from "react";
import { Layout } from "./pages/Layout";
import { Schedules } from "./components/Schedules";
import { Timer } from "./components/Timer";
import getCustomTheme from "./Theme/Theme";
import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { Scheduler } from "./const/Scheduler";

function App() {
  const [themeId, setThemeId] = useState(0);
  const [schedulerId, setSchedulerId] = useState(Scheduler?.defaultScheduleId);
  const theme = getCustomTheme(themeId);

  return (
    <ThemeProvider theme={theme}>
      <Layout
        leftContent={<Schedules setSchedulerId={setSchedulerId} />}
        // leftContent={
        //   <Box
        //     sx={{ backgroundColor: "gray", width: "100%", height: "100%" }}
        //   ></Box>
        // }
        rightContent={<Timer scheduleId={schedulerId} />}
        setTheme={setThemeId}
      ></Layout>
    </ThemeProvider>
  );
}

export default App;
