import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { mount } from "marketing/MarketingApp";

export default () => {
  const ref = useRef(null);

  const {
    push,
    location: { pathname },
    listen,
  } = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref?.current, {
      initialPath: pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        if (pathname !== nextPathname) {
          push(nextPathname);
        }
      },
    });
    listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
