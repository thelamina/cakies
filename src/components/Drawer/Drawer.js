import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

const drawerWidth = 360;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    "max-width": drawerWidth,
    background: "#F24472",
    border: "none",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function PersistentDrawerRight(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button
        onClick={handleDrawerOpen}
        style={{
          height: "30px",
          width: "30px",
          background: "#F24472",
          border: "none",
          position: "fixed",
          top: "12vh",
          right: "0vw",
        }}
      >
        <img src='assets/icons/arrow.svg' alt='' style={{transform: 'rotate(180deg)'}}/>
      </button>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='right'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <button
          onClick={handleDrawerOpen}
          style={{
            height: "30px",
            width: "30px",
            background: "#F24472",
            position: "fixed",
            border: "none",
            top: "10vh",
            right: drawerWidth,
          }}
        >
          <img src='assets/icons/arrow.svg' alt='' />
        </button>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          {props.children}
        </main>
      </Drawer>
    </div>
  );
}
