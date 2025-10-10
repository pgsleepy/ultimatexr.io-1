import "@hotwired/turbo";

import "api";
import "search";
import "icons";
import "navigation";
import "theme";
import "toc";
import "trailer";

import { Application } from "@hotwired/stimulus";
import MediaController from "controllers/media";

const application = Application.start();
application.register("media", MediaController);
