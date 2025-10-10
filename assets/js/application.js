import "@hotwired/turbo";

import "icons";

import { Application } from "@hotwired/stimulus";
import ApiController from "controllers/api";
import MediaController from "controllers/media";
import NavigationController from "controllers/navigation";
import SearchController from "controllers/search";
import SidebarController from "controllers/sidebar";
import ThemeController from "controllers/theme";
import TocController from "controllers/toc";
import TrailerController from "controllers/trailer";

const application = Application.start();
application.register("api", ApiController);
application.register("media", MediaController);
application.register("navigation", NavigationController);
application.register("search", SearchController);
application.register("sidebar", SidebarController);
application.register("theme", ThemeController);
application.register("toc", TocController);
application.register("trailer", TrailerController);
