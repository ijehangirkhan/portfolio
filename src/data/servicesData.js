/* eslint-disable */
import { BiShoppingBag, BiPencil } from "react-icons/bi";
import { BsCodeSlash, BsClipboardData } from "react-icons/bs";
import { AiOutlineMail, AiFillAudio } from "react-icons/ai";
import { FaInternetExplorer,  FaChalkboardTeacher, FaCameraRetro, FaPinterest, FaVideo, FaTabletAlt, FaShippingFast, FaLaptopCode, FaDocker } from "react-icons/fa";
import { MdCloudDone, MdSecurity, MdCode } from "react-icons/md"
import { RiShieldCheckFill, RiFileSettingsLine } from "react-icons/ri"

export const servicesData = [
    // {
    //     id: 1,
    //     title: 'Marketing',
    //     icon: <BiShoppingBag/>
    // },
    {
        id: 2,
        title: 'Infrastructure Automation',
        icon: <MdCode /> 
    },
    {
        id: 3,
        title: 'Configuration Management',
        icon: <FaLaptopCode />
    },
    // {
    //     id: 4,
    //     title: 'Internet Research',
    //     icon: <FaInternetExplorer />
    // },
    // {
    //     id: 5,
    //     title: 'Tutoring',
    //     icon: <FaChalkboardTeacher />
    // },

    {
        id: 6,
        title: 'Containerization and Orchestration',
        icon: <FaDocker />
    },
    {
        id: 7,
        title: 'Monitoring and Logging',
        icon: <RiShieldCheckFill />
    },
    // {
    //     id: 8,
    //     title: 'Pinterest Virtual Assistant',
    //     icon: <FaPinterest />
    // }, 
    {
        id: 9,
        title: 'Cloud Infrastructure Management',
        icon: <MdCloudDone />
    },
    // {
    //     id: 10,
    //     title: 'Data Entry', 
    //     icon: <BsClipboardData />
    // },
    {
        id: 11,
        title: 'Security And Compliance',
        icon: <MdSecurity />
    },
    {
        id: 12,
        title: 'Continuous Integration',
        icon: <RiFileSettingsLine />
    },
    {
        id: 13,
        title: 'Continuous Deployment',
        icon: <FaShippingFast />
    },

]

// Uncomment your required service.
// Couldn't find the required services? Raise an issue on github at https://github.com/hhhrrrttt222111/developer-portfolio/issues/new
// You can also add on your own 😉.