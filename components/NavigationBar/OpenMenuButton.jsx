import { mdiMenu, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";

export default function NavigationMenuOpen({ state }) {
  if (state == false) {
    return (
      <button>
        <Icon path={mdiMenu} size={1.5} className="text-white"></Icon>
      </button>
    );
  }
  if (state == true) {
    return (
      <button>
        <Icon path={mdiClose} size={1.5} className="text-white"></Icon>
      </button>
    );
  }
}
