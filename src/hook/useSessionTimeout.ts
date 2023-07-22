import { useEffect } from "react";
import { useLocation, useSubmit } from "react-router-dom";

export const useSessionTimeout = () => {
  const submit = useSubmit();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      submit(null, { method: "post", action: "/logout" });
    }, 60_000);

    return () => clearTimeout(timer);
  }, [submit, location]);
};
