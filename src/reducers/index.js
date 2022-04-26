import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import SizeReducer from "./sizeReducer";
import UserReducer from "./userReducer";
import PopupReducer from "./popupReducer";
import ProjectReducer from "./projectReducer";
import TeamReducer from "./teamReducer";
import ClassIndexReducer from "./classIndexReducer";
import TeamuserReducer from "./teamUserReducer";
import IdeaReducer from "./ideaReducer";

const rootReducer = combineReducers({
  form: formReducer,
  size: SizeReducer,
  user: UserReducer,
  popup: PopupReducer,
  class: ProjectReducer,
  team: TeamReducer,
  index: ClassIndexReducer,
  teamuser: TeamuserReducer,
  idea: IdeaReducer
});

export default rootReducer;
