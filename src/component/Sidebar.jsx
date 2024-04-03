import React from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  BuildingOfficeIcon,
  ArrowsUpDownIcon,
  ClipboardDocumentCheckIcon,
  SparklesIcon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Logo from "../assets/Layer 3.png";
import SocialIcons from "../assets/Social-icons.jpg";
import Stars from "../assets//Chat UI.png";
import ProfilePic from "../assets/Group 33079.png";
import "../App.css";

export default function SidebarWithBurgerMenu() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <div className="bg-gradient-to-r from-cyan-900 via-teal-600 to-cyan-900 p-4 flex flex-wrap justify-between items-center">
        <div>
          <IconButton variant="text" size="lg" onClick={openDrawer}>
            {isDrawerOpen ? (
              <XMarkIcon className="h-10 w-10 stroke-white" />
            ) : (
              <Bars3Icon className="h-10 w-10 stroke-white" />
            )}
          </IconButton>
        </div>

        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="social">
          <img src={SocialIcons} alt="Social-Icons" />
        </div>
      </div>

      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div className="mb-2  items-center gap-4 p-4">
            <div className="flex flex-wrap justify-end mb-4 items-center">
              {/*   <img src={Stars} alt="stars" /> */}
              <SparklesIcon className="h-5 w-5" />
              <p className="text-cyan-900 text-xs font-bold bg-cyan-50 ml-2 rounded-full p-2">
                NACHTMODUS
              </p>
            </div>
            <img src={Logo} alt="brand" className="w-full" />
          </div>

          <List>
            <ListItem className="items-start  focus:bg-[#9ee6e0]">
              <ListItemPrefix>
                <BuildingOfficeIcon className="h-5 w-5 " />
              </ListItemPrefix>
              <div>
                <Typography className="text-[18px] font-medium text-[#00404E] ">
                  Immobilienlexikont
                </Typography>
                <Typography className="text-[11px]">
                  Immobilienwissen für alle Fälle.
                </Typography>
              </div>
              <ListItemSuffix>
                <Chip
                  value="KI"
                  size="sm"
                  variant="ghost"
                  className="rounded-full bg-[#EEFBFF] w-[30px] h-[22px] text-center text-[9px]"
                />
              </ListItemSuffix>
            </ListItem>

            <ListItem className="items-start focus:bg-[#9ee6e0]">
              <ListItemPrefix>
                <ArrowsUpDownIcon className="h-5 w-5" />
              </ListItemPrefix>
              <div>
                <Typography className="text-[18px] font-medium text-[#00404E]">
                  Preisschätzung
                </Typography>
                <Typography className="text-[11px]">
                  Den Wert Ihres Hauses schätzen lassen.
                </Typography>
              </div>
              <ListItemSuffix>
                <Chip
                  value="LINK"
                  size="sm"
                  variant="ghost"
                  className="rounded-full bg-[#EEFBFF] w-[50px] h-[22px] text-center text-[9px]"
                />
              </ListItemSuffix>
            </ListItem>

            <ListItem className="items-start focus:bg-[#9ee6e0]">
              <ListItemPrefix>
                <ClipboardDocumentCheckIcon className="h-5 w-5" />
              </ListItemPrefix>
              <div>
                <Typography className="text-[18px] font-medium text-[#00404E]">
                  Checklisten
                </Typography>
                <Typography className="text-[11px]">
                  Immobilienwissen für alle Fälle.
                </Typography>
              </div>
              <ListItemSuffix>
                {/*   <Chip
                  value="PDF"
                  size="sm"
                  variant="ghost"
                  className="rounded-full bg-[#EEFBFF] w-[30px] h-[22px] text-center text-[9px]"
                /> */}
                <Typography className="rounded-full bg-[#EEFBFF] text-center text-[9px] font-bold flex items-center justify-center w-[50px] h-[22px]">
                  PDF <ChevronDownIcon className="h-3 w-3" />
                </Typography>
              </ListItemSuffix>
            </ListItem>

            <ListItem className="items-start focus:bg-[#9ee6e0]">
              <ListItemPrefix>
                <BookOpenIcon className="h-5 w-5" />
              </ListItemPrefix>
              <div>
                <Typography className="text-[18px] font-medium text-[#00404E]">
                  Ratgeber
                </Typography>
                <Typography className="text-[11px]">
                  Immobilienwissen für alle Fälle.
                </Typography>
              </div>
              <ListItemSuffix>
                <Chip
                  value="KI"
                  size="sm"
                  variant="ghost"
                  className="rounded-full bg-[#EEFBFF] w-[30px] h-[22px] text-center text-[9px]"
                />
              </ListItemSuffix>
            </ListItem>
          </List>

          {/*  Carlos Kuk - Eigentümer Section */}

          <div class="w-full max-w-sm bg-teal border border-teal-500 rounded-lg shadow dark:bg-teal-500 dark:border-teal-500 mt-20 bg-teal-500">
            <div class="flex flex-col items-center px-8 pb-8">
              <img
                class="w-24 h-24 mb-4 rounded-full shadow-lg custom-pp"
                src={ProfilePic}
              />
              <h5 class="mb-1 text-xl font-medium  text-white mb-3">
                Immotrust AG
              </h5>
              <span class="text-sm  text-white text-center">
                Vertrauensvolle <br /> Immobilienberatung seit 2008.
              </span>
              <div class="flex mt-4 md:mt-6">
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-teal-400 rounded-lg "
                >
                  Carlos Kuk - Eigentümer
                </a>
              </div>
            </div>
          </div>

          <Typography className="text-[14px] text-center mt-4 text-gray-500">
            Impressum & Datenschutzcenter
          </Typography>
        </Card>
      </Drawer>
    </>
  );
}
