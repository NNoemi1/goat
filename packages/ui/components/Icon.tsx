import { library } from "@fortawesome/fontawesome-svg-core";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBitbucket,
  faFacebook,
  faGithub,
  faGitlab,
  faGoogle,
  faInstagram,
  faLinkedin,
  faMicrosoft,
  faPaypal,
  faStackOverflow,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAlignCenter,
  faArrowRightArrowLeft,
  faBars,
  faBarsProgress,
  faBicycle,
  faBook,
  faBug,
  faBuilding,
  faBullseye,
  faBus,
  faCableCar,
  faCar,
  faCaretDown,
  faCaretUp,
  faChartBar,
  faChartColumn,
  faChartLine,
  faChartPie,
  faChartSimple,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faCircle,
  faCircleCheck,
  faCircleHalfStroke,
  faCircleInfo,
  faCirclePlus,
  faCircleQuestion,
  faClock,
  faClone,
  faClose,
  faCompassDrafting,
  faCookieBite,
  faCopy,
  faCreditCard,
  faCross,
  faCrown,
  faCube,
  faDatabase,
  faDownload,
  faDrawPolygon,
  faEdit,
  faEllipsis,
  faEllipsisVertical,
  faEnvelope,
  faExpand,
  faExternalLinkAlt,
  faEye,
  faEyeSlash,
  faFerry,
  faFile,
  faFileInvoice,
  faFilter,
  faFloppyDisk,
  faFolder,
  faFolderPlus,
  faGears,
  faGlobe,
  faHouse,
  faImage,
  faLanguage,
  faLayerGroup,
  faLink,
  faList,
  faLocationCrosshairs,
  faLocationDot,
  faLocationPin,
  faLock,
  faMagnifyingGlassMinus,
  faMagnifyingGlassPlus,
  faMap,
  faMapLocationDot,
  faMaximize,
  faMinimize,
  faMinus,
  faMountain,
  faPalette,
  faPen,
  faPersonBiking,
  faPersonRunning,
  faPlay,
  faPlus,
  faQuestionCircle,
  faRefresh,
  faRocket,
  faRoute,
  faRulerCombined,
  faRulerHorizontal,
  faSearch,
  faShare,
  faSignOut,
  faSliders,
  faSortAlphaDown,
  faSortAlphaUp,
  faStar,
  faStreetView,
  faSubway,
  faTable,
  faToolbox,
  faTrain,
  faTrainTram,
  faTrash,
  faUnlock,
  faUpload,
  faUser,
  faUserPlus,
  faUsers,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SvgIcon } from "@mui/material";
import type { SvgIconProps } from "@mui/material";

import {
  addImageIcon,
  aggregateIcon,
  arcgisFeatureServiceIcon,
  boundingBoxIcon,
  comingSoonIcon,
  dataCategoryIcon,
  funicularIcon,
  geojsonIcon,
  gondolaIcon,
  hexagonIcon,
  licenseIcon,
  lineIcon,
  pointIcon,
  polygonIcon,
  streetNetworkIcon,
  wfsIcon,
  wmsIcon,
  wmtsIcon,
  xyzIcon,
} from "../assets/svg/OtherIcons";

export enum ICON_NAME {
  // Solid icons
  LAYERS = "layers",
  LEGEND = "legend",
  CHART = "chart",
  REPORT = "report",
  HELP = "help",
  TOOLBOX = "toolbox",
  FILTER = "filter",
  SCENARIO = "scenario",
  STYLE = "style",
  SIGNOUT = "signout",
  ORGANIZATION = "organization",
  MAP = "map",
  MAP_LOCATION = "map-location",
  CLOSE = "close",
  HOUSE = "house",
  FOLDER = "folder",
  FOLDER_NEW = "folder-new",
  SETTINGS = "settings",
  CIRCLECHECK = "circleCheck",
  CIRCLEINFO = "circleInfo",
  OUTILINEDINFO = "outlinedInfo",
  EMAIL = "email",
  ROCKET = "rocket",
  PLUS = "plus",
  MINUS = "minus",
  MAXIMIZE = "maximize",
  MINIMIZE = "minimize",
  STAR = "star",
  ELLIPSIS = "ellipsis",
  SEARCH = "search",
  CHEVRON_LEFT = "chevron-left",
  CHEVRON_RIGHT = "chevron-right",
  CHEVRON_DOWN = "chevron-down",
  CHEVRON_UP = "chevron-up",
  EYE = "eye",
  EYE_SLASH = "eye-slash",
  MORE_VERT = "more-vert",
  MORE_HORIZ = "more-horiz",
  STEPUP = "step-up",
  STEPDOWN = "step-down",
  LOCATION = "location",
  LOCATION_MARKER = "location-marker",
  LOCATION_CROSSHAIRS = "location-crosshairs",
  CROSS = "cross",
  CIRCLE = "circle",
  CIRCLE_PLUS = "circle-plus",
  USER = "user",
  USERS = "users",
  LANGUAGE = "language",
  FILE = "file",
  GLOBE = "globe",
  EXTERNAL_LINK = "external-link",
  HAMBURGER_MENU = "hamburger-menu",
  SHARE = "share",
  TRASH = "trash",
  EDIT = "edit",
  XCLOSE = "xclose",
  EDITPEN = "editpen",
  SAVE = "save",
  DATABASE = "database",
  SORT_ALPHA_ASC = "sort-alpha-asc",
  SORT_ALPHA_DESC = "sort-alpha-desc",
  CLOCK = "clock",
  DOWNLOAD = "download",
  UPLOAD = "upload",
  TABLE = "table",
  BARS_PROGRESS = "bar-progress",
  CREDIT_CARD = "credit-card",
  RULES_COMBINED = "rules-combined",
  RULER_HORIZONTAL = "ruler-horizontal",
  CROWN = "crown",
  BULLSEYE = "bullsey",
  COPY = "copy",
  CHART_PIE = "chart-pie",
  ADD_USER = "add-user",
  EXPAND = "expand",
  SLIDERS = "sliders",
  ZOOM_IN = "zoom-in",
  ZOOM_OUT = "zoom-out",
  LINK = "link",
  REFRESH = "refresh",
  DRAW_POLYGON = "draw-polygon",
  CLONE = "clone",
  MOUNTAIN = "mountain",
  ACCESSIBILITY = "accessibility",
  BOOK = "book",
  RUN = "run",
  BICYCLE = "bicycle",
  PEDELEC = "pedelec",
  BUS = "bus",
  CAR = "car",
  ROUTE = "route",
  TRAM = "tram",
  RAIL = "rail",
  SUBWAY = "subway",
  FERRY = "ferry",
  CABLE_CAR = "cable-car",
  FUNICULAR = "funicular",
  GONDOLA = "gondola",
  BUG = "bug",
  COOKIES = "cookies",
  LOCK = "lock",
  UNLOCK = "unlock",
  PLAY = "play",
  CUBE = "cube",
  IMAGE = "image",
  LIST = "list",
  // Brand icons
  GOOGLE = "google",
  MICROSOFT = "microsoft",
  FACEBOOK = "facebook",
  GITHUB = "github",
  GITLAB = "gitlab",
  STACKOVERFLOW = "stackoverflow",
  TWITTER = "twitter",
  LINKEDIN = "linkedin",
  INSTAGRAM = "instagram",
  BITBUCKET = "bitbucket",
  PAYPAL = "paypal",
  REVERSE = "reverse",
  // Custom icons
  ADD_IMAGE = "add-image",
  COMING_SOON = "coming-soon",
  AGGREGATE = "aggregate",
  HEXAGON = "hexagon",
  LICENSE = "license",
  DATA_CATEGORY = "data-category",
  LINE_CHART = "line-chart-icon",
  VERTICAL_BAR_CHART = "vertical-bar-chart",
  HORIZONTAL_BAR_CHART = "horizontal-bar-chart",
  BOUNDING_BOX = "bounding-box",
  POINT_FEATURE = "point-feature",
  LINE_FEATURE = "line-feature",
  POLYGON_FEATURE = "polygon-feature",
  STREET_NETWORK = "street-network",
  WMTS = "wmts",
  WMS = "wms",
  WFS = "wfs",
  XYZ = "xyz",
  ARCGIS_FEATURE_SERVICE = "arcgis-feature-service",
  GEOJSON = "geojson",
  PANEL_APPERANCE = "panel-appearance",
  PANEL_POSITION = "panel-position",
}

const nameToIcon: { [k in ICON_NAME]: IconDefinition } = {
  // Solid icons
  [ICON_NAME.LAYERS]: faLayerGroup,
  [ICON_NAME.LEGEND]: faList,
  [ICON_NAME.CHART]: faChartSimple,
  [ICON_NAME.REPORT]: faFileInvoice,
  [ICON_NAME.HELP]: faQuestionCircle,
  [ICON_NAME.TOOLBOX]: faToolbox,
  [ICON_NAME.FILTER]: faFilter,
  [ICON_NAME.SCENARIO]: faCompassDrafting,
  [ICON_NAME.STYLE]: faPalette,
  [ICON_NAME.SIGNOUT]: faSignOut,
  [ICON_NAME.ORGANIZATION]: faBuilding,
  [ICON_NAME.MAP]: faMap,
  [ICON_NAME.MAP_LOCATION]: faMapLocationDot,
  [ICON_NAME.CLOSE]: faClose,
  [ICON_NAME.HOUSE]: faHouse,
  [ICON_NAME.FOLDER]: faFolder,
  [ICON_NAME.FOLDER_NEW]: faFolderPlus,
  [ICON_NAME.SETTINGS]: faGears,
  [ICON_NAME.CIRCLECHECK]: faCircleCheck,
  [ICON_NAME.CIRCLEINFO]: faCircleInfo,
  [ICON_NAME.OUTILINEDINFO]: faCircleQuestion,
  [ICON_NAME.EMAIL]: faEnvelope,
  [ICON_NAME.ROCKET]: faRocket,
  [ICON_NAME.RUN]: faPersonRunning,
  [ICON_NAME.BUS]: faBus,
  [ICON_NAME.PLUS]: faPlus,
  [ICON_NAME.MINUS]: faMinus,
  [ICON_NAME.MAXIMIZE]: faMaximize,
  [ICON_NAME.MINIMIZE]: faMinimize,
  [ICON_NAME.ELLIPSIS]: faEllipsis,
  [ICON_NAME.SEARCH]: faSearch,
  [ICON_NAME.CHEVRON_LEFT]: faChevronLeft,
  [ICON_NAME.CHEVRON_RIGHT]: faChevronRight,
  [ICON_NAME.CHEVRON_DOWN]: faChevronDown,
  [ICON_NAME.CHEVRON_UP]: faChevronUp,
  [ICON_NAME.EYE]: faEye,
  [ICON_NAME.EYE_SLASH]: faEyeSlash,
  [ICON_NAME.STAR]: faStar,
  [ICON_NAME.MORE_VERT]: faEllipsisVertical,
  [ICON_NAME.MORE_HORIZ]: faEllipsis,
  [ICON_NAME.STEPUP]: faCaretUp,
  [ICON_NAME.STEPDOWN]: faCaretDown,
  [ICON_NAME.LOCATION]: faLocationDot,
  [ICON_NAME.LOCATION_MARKER]: faLocationPin,
  [ICON_NAME.LOCATION_CROSSHAIRS]: faLocationCrosshairs,
  [ICON_NAME.CROSS]: faCross,
  [ICON_NAME.CIRCLE]: faCircle,
  [ICON_NAME.CIRCLE_PLUS]: faCirclePlus,
  [ICON_NAME.USER]: faUser,
  [ICON_NAME.USERS]: faUsers,
  [ICON_NAME.LANGUAGE]: faLanguage,
  [ICON_NAME.FILE]: faFile,
  [ICON_NAME.GLOBE]: faGlobe,
  [ICON_NAME.HAMBURGER_MENU]: faBars,
  [ICON_NAME.SHARE]: faShare,
  [ICON_NAME.TRASH]: faTrash,
  [ICON_NAME.EDIT]: faEdit,
  [ICON_NAME.XCLOSE]: faXmark,
  [ICON_NAME.EDITPEN]: faPen,
  [ICON_NAME.SAVE]: faFloppyDisk,
  [ICON_NAME.DATABASE]: faDatabase,
  [ICON_NAME.SORT_ALPHA_ASC]: faSortAlphaUp,
  [ICON_NAME.SORT_ALPHA_DESC]: faSortAlphaDown,
  [ICON_NAME.CLOCK]: faClock,
  [ICON_NAME.DOWNLOAD]: faDownload,
  [ICON_NAME.UPLOAD]: faUpload,
  [ICON_NAME.TABLE]: faTable,
  [ICON_NAME.BARS_PROGRESS]: faBarsProgress,
  [ICON_NAME.EXTERNAL_LINK]: faExternalLinkAlt,
  [ICON_NAME.CREDIT_CARD]: faCreditCard,
  [ICON_NAME.RULES_COMBINED]: faRulerCombined,
  [ICON_NAME.RULER_HORIZONTAL]: faRulerHorizontal,
  [ICON_NAME.CROWN]: faCrown,
  [ICON_NAME.REVERSE]: faArrowRightArrowLeft,
  [ICON_NAME.BULLSEYE]: faBullseye,
  [ICON_NAME.COPY]: faCopy,
  [ICON_NAME.PEDELEC]: faPersonBiking,
  [ICON_NAME.BICYCLE]: faBicycle,
  [ICON_NAME.CAR]: faCar,
  [ICON_NAME.SLIDERS]: faSliders,
  [ICON_NAME.ZOOM_IN]: faMagnifyingGlassPlus,
  [ICON_NAME.ZOOM_OUT]: faMagnifyingGlassMinus,
  [ICON_NAME.LINK]: faLink,
  [ICON_NAME.REFRESH]: faRefresh,
  [ICON_NAME.MOUNTAIN]: faMountain,
  [ICON_NAME.ACCESSIBILITY]: faStreetView,
  [ICON_NAME.DRAW_POLYGON]: faDrawPolygon,
  [ICON_NAME.CLONE]: faClone,
  [ICON_NAME.BOOK]: faBook,
  [ICON_NAME.ROUTE]: faRoute,
  [ICON_NAME.TRAM]: faTrainTram,
  [ICON_NAME.RAIL]: faTrain,
  [ICON_NAME.SUBWAY]: faSubway,
  [ICON_NAME.FERRY]: faFerry,
  [ICON_NAME.CABLE_CAR]: faCableCar,
  [ICON_NAME.CHART_PIE]: faChartPie,
  [ICON_NAME.ADD_USER]: faUserPlus,
  [ICON_NAME.EXPAND]: faExpand,
  [ICON_NAME.BUG]: faBug,
  [ICON_NAME.COOKIES]: faCookieBite,
  [ICON_NAME.LOCK]: faLock,
  [ICON_NAME.UNLOCK]: faUnlock,
  [ICON_NAME.PLAY]: faPlay,
  [ICON_NAME.CUBE]: faCube,
  [ICON_NAME.IMAGE]: faImage,
  [ICON_NAME.LIST]: faList,
  // Brand icons
  [ICON_NAME.GOOGLE]: faGoogle,
  [ICON_NAME.MICROSOFT]: faMicrosoft,
  [ICON_NAME.FACEBOOK]: faFacebook,
  [ICON_NAME.GITHUB]: faGithub,
  [ICON_NAME.GITLAB]: faGitlab,
  [ICON_NAME.STACKOVERFLOW]: faStackOverflow,
  [ICON_NAME.TWITTER]: faXTwitter,
  [ICON_NAME.LINKEDIN]: faLinkedin,
  [ICON_NAME.INSTAGRAM]: faInstagram,
  [ICON_NAME.BITBUCKET]: faBitbucket,
  [ICON_NAME.PAYPAL]: faPaypal,
  // Custom icons
  [ICON_NAME.ADD_IMAGE]: addImageIcon,
  [ICON_NAME.COMING_SOON]: comingSoonIcon,
  [ICON_NAME.FUNICULAR]: funicularIcon,
  [ICON_NAME.GONDOLA]: gondolaIcon,
  [ICON_NAME.AGGREGATE]: aggregateIcon,
  [ICON_NAME.HEXAGON]: hexagonIcon,
  [ICON_NAME.LICENSE]: licenseIcon,
  [ICON_NAME.DATA_CATEGORY]: dataCategoryIcon,
  [ICON_NAME.LINE_CHART]: faChartLine,
  [ICON_NAME.VERTICAL_BAR_CHART]: faChartColumn,
  [ICON_NAME.HORIZONTAL_BAR_CHART]: faChartBar,
  [ICON_NAME.BOUNDING_BOX]: boundingBoxIcon,
  [ICON_NAME.POINT_FEATURE]: pointIcon,
  [ICON_NAME.LINE_FEATURE]: lineIcon,
  [ICON_NAME.POLYGON_FEATURE]: polygonIcon,
  [ICON_NAME.STREET_NETWORK]: streetNetworkIcon,
  [ICON_NAME.WMTS]: wmtsIcon,
  [ICON_NAME.WMS]: wmsIcon,
  [ICON_NAME.WFS]: wfsIcon,
  [ICON_NAME.XYZ]: xyzIcon,
  [ICON_NAME.ARCGIS_FEATURE_SERVICE]: arcgisFeatureServiceIcon,
  [ICON_NAME.GEOJSON]: geojsonIcon,
  [ICON_NAME.PANEL_POSITION]: faAlignCenter,
  [ICON_NAME.PANEL_APPERANCE]: faCircleHalfStroke,
};

interface BrandColors {
  [key: string]: string;
}
export const brandColors: BrandColors = {
  [ICON_NAME.GOOGLE]: "#4285F4",
  [ICON_NAME.MICROSOFT]: "#00A4EE",
  [ICON_NAME.FACEBOOK]: "#3B5998",
  [ICON_NAME.GITHUB]: "#333333",
  [ICON_NAME.GITLAB]: "#FCA121",
  [ICON_NAME.STACKOVERFLOW]: "#FE7A15",
  [ICON_NAME.TWITTER]: "#1DA1F2",
  [ICON_NAME.LINKEDIN]: "#0077B5",
  [ICON_NAME.INSTAGRAM]: "#E1306C",
  [ICON_NAME.BITBUCKET]: "#0052CC",
  [ICON_NAME.PAYPAL]: "#0079C1",
};

library.add(...Object.values(nameToIcon));

export function Icon({ iconName, ...rest }: SvgIconProps & { iconName: ICON_NAME }): JSX.Element {
  if (!(iconName in nameToIcon)) {
    throw new Error(`Invalid icon name: ${iconName}`);
  }
  return (
    <SvgIcon {...rest}>
      <FontAwesomeIcon icon={nameToIcon[iconName]} />
    </SvgIcon>
  );
}
