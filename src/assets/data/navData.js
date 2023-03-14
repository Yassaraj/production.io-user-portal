import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';

export const navData = [
    {
        id: 0,
        icon: <HomeIcon sx={{ fontSize: 40 }}/>,
        text: "Home",
        link: "/"
    },
    {
        id: 1,
        icon: <TravelExploreIcon sx={{ fontSize: 40 }}/>,
        text: "Scripts",
        link: "/scripts"
    },
    {
        id: 2,
        icon: <BarChartIcon sx={{ fontSize: 40 }}/>,
        text: "Mood Boards",
        link: "/moodboards"
    },
    {
        id: 3,
        icon: <SettingsIcon sx={{ fontSize: 40 }}/>,
        text: "Call Sheet",
        link: "/callsheet"
    },
]