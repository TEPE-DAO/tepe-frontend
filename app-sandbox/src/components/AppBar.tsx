import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import SendIcon from "@mui/icons-material/Send";
import MoreIcon from "@mui/icons-material/MoreVert";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useWallet } from "@txnlab/use-wallet";
import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Tooltip,
} from "@mui/material";
import EjectIcon from "@mui/icons-material/Eject";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import GavelIcon from "@mui/icons-material/Gavel";
import MasterService from "../services/MasterService.ts";
import AssetService from "../services/AssetService.ts";
import AccountBalances from "./AccountBalances/index.js";
import SendDialog from "./SendDialog/index.js";
import SubscriptionDialog from "./SubscriptionDialog/index.js";
import { zeroAddress } from "../utils/algorand.js";
import { makeStdLib } from "../utils/reach.js";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const stdlib = makeStdLib();

export default function PrimarySearchAppBar() {
  const { providers, activeAccount } = useWallet();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mailAnchorEl, setMailAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [mail, setMail] = React.useState<any>([]);

  const isMenuOpen = Boolean(anchorEl);
  const isMailMenuOpen = Boolean(mailAnchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [accountBalanceOpen, setAccountBalanceOpen] = React.useState(false);
  const [sendFormOpen, setSendFormOpen] = React.useState(false);
  const [subscriptionFormOpen, setSubscriptionFormOpen] = React.useState(false);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMailMenuClose = () => {
    setMailAnchorEl(null);
    handleMenuClose();
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMailMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMailAnchorEl(event.currentTarget);
  };

  const handleAccountBalanceMenuOpen = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAccountBalanceOpen(true);
  };

  const handleSendMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setSendFormOpen(true);
  };

  const handleSubscriptionMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setSubscriptionFormOpen(true);
  };

  const menuId = "primary-search-account-menu";

  const renderMailMenu = (
    <Menu
      anchorEl={mailAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMailMenuOpen}
      onClose={handleMailMenuClose}
    >
      {mail.map((el: any, i: number) => (
        <MenuItem key={`mail-${i}`}>
          <Stack direction="row" spacing={1} style={{ alignItems: "center" }}>
            <Chip label={el.time} />
            <span>
              {el.amount} {el.unitName} from {el.addrFrom.slice(0, 4)}...
              {el.addrFrom.slice(-4)}
            </span>
          </Stack>
        </MenuItem>
      ))}
    </Menu>
  );

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          providers?.[0].disconnect();
          handleMenuClose();
        }}
      >
        Disconnect
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = null;
  /*
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Transfers</p>
      </MenuItem>
      {<MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
    </MenuItem>}
      <MenuItem
        onClick={() => {
          providers?.[0].disconnect();
          handleMenuClose();
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <EjectIcon />
        </IconButton>
        <p>Disconnect</p>
      </MenuItem>
    </Menu>
    */

  React.useEffect(() => {
    if (!activeAccount) return;
    (async () => {
      // -------------------------------------------
      // use stored ready events and seek if needed
      // -------------------------------------------
      const storedEvents = JSON.parse(
        localStorage.getItem(`event-transfer`) ?? "{}"
      );
      const events = !storedEvents.time
        ? await MasterService.getTransferEvents(
            activeAccount?.address ?? zeroAddress
          )
        : await MasterService.getTransferEvents(
            activeAccount?.address ?? zeroAddress,
            storedEvents.time
          );
      const newEvents = [...(storedEvents?.events ?? []), ...events];
      localStorage.setItem(
        "event-transfer",
        JSON.stringify({
          time: await stdlib.getNetworkTime(),
          events: newEvents,
        })
      );
      const dEvents: any = []; // TODO: type
      for (const event of storedEvents?.events ?? []) {
        const dEvent = MasterService.decodeEvent(event);
        if (dEvent.addrTo === activeAccount.address) {
          const {
            params: { decimals, ["unit-name"]: unitName },
          } = await AssetService.getAsset(dEvent.assetId);
          dEvents.push({ ...dEvent, decimals, unitName });
        }
      }
      for (const event of events) {
        const dEvent = MasterService.decodeEvent(event);
        if (dEvent.addrTo === activeAccount.address) {
          const {
            params: { decimals, ["unit-name"]: unitName },
          } = await AssetService.getAsset(dEvent.assetId);
          dEvents.push({ ...dEvent, decimals, unitName, new: true });
        }
      }
      setMail(dEvents);
      // -------------------------------------------
    })();
  }, [activeAccount]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color="transparent"
        position="fixed"
        sx={{ top: "auto", bottom: 0 }}
      >
        <Toolbar>
          {
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          }
          {/*<Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            NFT DROP
        </Typography>*/}
          {
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          }
          <Box sx={{ flexGrow: 1 }} />
          {!activeAccount ? (
            <Box
              sx={{
                display: {
                  xs: "flex",
                  alignItems: "center",
                  gap: "1em",
                },
              }}
            >
              <Button
                variant="text"
                style={{ color: "white" }}
                onClick={() => {
                  providers?.[0].connect();
                }}
              >
                <img
                  style={{ height: "30px", filter: "grayscale(1)" }}
                  src={providers?.[0]?.metadata?.icon}
                />
              </Button>
            </Box>
          ) : (
            <>
              <Box
                sx={{
                  display: {
                    xs: "flex",
                    //md: "flex",
                    alignItems: "center",
                    gap: "1em",
                  },
                }}
              >
                <Tooltip title="Auctions">
                  <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                    onClick={() => {}}
                  >
                    <GavelIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Subscriptions">
                  <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                    onClick={handleSubscriptionMenuOpen}
                  >
                    <CurrencyExchangeIcon />
                  </IconButton>
                </Tooltip>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                  onClick={handleSendMenuOpen}
                >
                  <SendIcon />
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                  onClick={handleMailMenuOpen}
                >
                  <Badge
                    badgeContent={mail.filter((el: any) => el.new).length} // TODO: type
                    color="error"
                  >
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                  onClick={handleAccountBalanceMenuOpen}
                >
                  <AccountBalanceWalletIcon />
                </IconButton>
                {/*<IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
              </IconButton>*/}
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <img
                    style={{ height: "30px" }}
                    src={providers?.[0]?.metadata?.icon}
                  />
                </IconButton>
              </Box>
              {/*<Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
            </Box>*/}
            </>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMailMenu}
      {renderMenu}
      <SendDialog open={sendFormOpen} setOpen={setSendFormOpen} />
      <SubscriptionDialog
        open={subscriptionFormOpen}
        setOpen={setSubscriptionFormOpen}
      />
      {/* TODO move this into component like SendDialog */}
      <Dialog
        fullScreen={true}
        open={accountBalanceOpen}
        onClose={() => setAccountBalanceOpen(false)}
      >
        <DialogTitle>Account Balance</DialogTitle>
        <DialogContent>
          <AccountBalances />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAccountBalanceOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
