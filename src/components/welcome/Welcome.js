import React from "react";

import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {urls} from "../../utils/urlUtils";
import {Link} from "react-router-dom";

export const Welcome = () => {
  return (
      <React.Fragment>
          <Typography>
              Welcome
          </Typography>
          {
              Object.values(urls).map((url, index) => {
                  return <Button raised keys={index} component={ props =>
                      <Link to={url.path} {...props}/> }>
                  </Button>
              })
          }
      </React.Fragment>
  )
};